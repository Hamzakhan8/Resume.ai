import React, { useState, useCallback } from 'react';
import { Upload, FileText, Check, AlertCircle, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const MAX_TOKENS = 30720; // Maximum tokens allowed by the API
const MAX_CHARACTERS = 15000; // Limit to prevent exceeding token count

const ResumeTailorWorkflow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadStatus, setUploadStatus] = useState({
    cv: false,
    jobDescription: false
  });
  const [files, setFiles] = useState<{
    cv: File | string | null;
    jobDescription: File | string;
  }>({
    cv: null,
    jobDescription: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [tailoredResume, setTailoredResume] = useState<string | null>(null);
  const [downloadFormat, setDownloadFormat] = useState<'pdf' | 'docx'>('pdf');

  const steps = [
    {
      number: 1,
      title: 'Upload Documents',
      description: 'Share your existing CV and the job description',
      icon: Upload,
      status: uploadStatus.cv && uploadStatus.jobDescription ? 'complete' : 'current'
    },
    {
      number: 2,
      title: 'AI Analysis',
      description: 'Our AI analyzes both documents to identify key requirements and matches',
      icon: FileText,
      status: currentStep >= 2 ? 'complete' : 'waiting'
    },
    {
      number: 3,
      title: 'Resume Generation',
      description: 'Creates a tailored resume highlighting relevant experience',
      icon: Check,
      status: currentStep >= 3 ? 'complete' : 'waiting'
    }
  ];

  const handleFileDrop = useCallback(async (event: React.DragEvent, type: 'cv' | 'jobDescription') => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    
    // Validate file type
    const validTypes = type === 'cv' 
      ? ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      : ['application/pdf', 'text/plain'];
      
    if (!validTypes.includes(file.type)) {
      setError(`Invalid file type for ${type}. Please upload ${type === 'cv' ? 'PDF or Word' : 'PDF or Text'} file.`);
      return;
    }

    setFiles(prev => ({ ...prev, [type]: file }));
    setUploadStatus(prev => ({ ...prev, [type]: true }));
    setError('');
  }, []);

  const handleFileSelect = useCallback(async (event: React.ChangeEvent<HTMLInputElement>, type: 'cv' | 'jobDescription') => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFiles(prev => ({ ...prev, [type]: file }));
    setUploadStatus(prev => ({ ...prev, [type]: true }));
  }, []);

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value.slice(0, MAX_CHARACTERS);
    setFiles(prev => ({ ...prev, jobDescription: text }));
    setUploadStatus(prev => ({ ...prev, jobDescription: text.length > 0 }));
  };

  const handleCVChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value.slice(0, MAX_CHARACTERS);
    setFiles(prev => ({ ...prev, cv: text }));
    setUploadStatus(prev => ({ ...prev, cv: text.length > 0 }));
  };

  const processDocuments = async () => {
    if (!files.cv || !files.jobDescription) return;

    setIsProcessing(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3002/api/analyze-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cv: typeof files.cv === 'string' ? files.cv : await readFileContent(files.cv as File),
          jobDescription: typeof files.jobDescription === 'string' 
            ? files.jobDescription 
            : await readFileContent(files.jobDescription as File)
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to process documents');
      }

      const data = await response.json();
      console.log('AI Response:', data); // Debug log

      // Format the JSON response into a readable resume
      const formattedResume = `
Professional Summary:
${data.summary}

Key Skills:
${data.keySkills.map((skill: string) => `• ${skill}`).join('\n')}

Professional Experience:
${data.experience.map((exp: string) => `• ${exp}`).join('\n')}
      `.trim();

      console.log('Formatted Resume:', formattedResume); // Debug log
      setTailoredResume(formattedResume);
      setCurrentStep(3);

      // Add a preview of the content
      const previewElement = document.createElement('div');
      previewElement.innerHTML = `
        <div style="
          background: #1a1a1a;
          color: #fff;
          padding: 20px;
          margin: 20px 0;
          border-radius: 8px;
          white-space: pre-wrap;
          font-family: monospace;
        ">
          ${formattedResume}
        </div>
      `;
      
      // Find the download buttons container and insert the preview before it
      const downloadSection = document.querySelector('.flex.flex-col.items-center.gap-4');
      if (downloadSection) {
        downloadSection.insertBefore(previewElement, downloadSection.firstChild);
      }

    } catch (error: any) {
      console.error('Processing error:', error);
      setError(error.message || 'Failed to process documents. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Updated file reader function with better error handling
  const readFileContent = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const text = e.target?.result;
          if (typeof text === 'string') {
            resolve(text);
          } else {
            reject(new Error('Failed to read file as text'));
          }
        } catch (error) {
          reject(error);
        }
      };
      
      reader.onerror = (e) => {
        reject(new Error('Error reading file: ' + e.target?.error));
      };
      
      try {
        reader.readAsText(file);
      } catch (error) {
        reject(error);
      }
    });
  };

  const handleDownload = async () => {
    if (!tailoredResume) {
      setError('No resume content available for download');
      return;
    }

    console.log('Content being downloaded:', tailoredResume); // Debug log

    try {
      if (downloadFormat === 'pdf') {
        // Create a styled HTML version of the content
        const htmlContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 40px;
                  line-height: 1.6;
                  color: #000;
                  background: #fff;
                }
                h1 {
                  color: #333;
                  border-bottom: 2px solid #333;
                  padding-bottom: 8px;
                  margin-bottom: 20px;
                }
                .content {
                  white-space: pre-wrap;
                  font-size: 12pt;
                }
              </style>
            </head>
            <body>
              <h1>Tailored Resume</h1>
              <div class="content">${tailoredResume}</div>
            </body>
          </html>
        `;

        const printWindow = window.open('', '_blank');
        if (!printWindow) {
          throw new Error('Please allow popups for this website');
        }

        printWindow.document.write(htmlContent);
        printWindow.document.close();

        // Wait for content to load
        await new Promise(resolve => setTimeout(resolve, 1000));

        printWindow.focus();
        printWindow.print();
        setTimeout(() => printWindow.close(), 1000);

      } else {
        // For Word document
        const content = `
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Calibri, Arial, sans-serif; }
                p { margin: 0; padding: 0; }
              </style>
            </head>
            <body>
              <h1>Tailored Resume</h1>
              <div style="white-space: pre-wrap;">${tailoredResume}</div>
            </body>
          </html>
        `;

        const blob = new Blob([content], { 
          type: 'application/msword' 
        });

        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'tailored-resume.doc';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }
    } catch (err: any) {
      console.error('Download error:', err);
      setError(err.message || 'Error downloading resume. Please try again.');
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 ">
      <Card className="max-w-4xl mx-auto bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
            AI Resume Tailor
          </CardTitle>
          {error && (
            <Alert variant="destructive" className="bg-red-900/50 border border-red-500/50">
              <AlertCircle className="w-3 h-3 text-red-400" />
              <AlertDescription className="text-sm text-red-200">{error}</AlertDescription>
            </Alert>
          )}
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            {/* Progress Steps - updated styling */}
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2
                      ${step.status === 'complete' ? 'bg-gradient-to-r from-violet-500 to-blue-500' : 
                        step.status === 'current' ? 'bg-gradient-to-r from-violet-400 to-blue-400' : 'bg-gray-700'}`}>
                      <step.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-sm text-white">{step.title}</div>
                      <div className="text-xs text-gray-400">{step.description}</div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="h-0.5 flex-1 bg-gray-700" />
                  )}
                </div>
              ))}
            </div>

            {/* Upload Section - updated styling */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-gray-700 hover:border-violet-500/50 rounded-lg p-4 text-center transition-colors">
                <FileText className={`w-6 h-6 mx-auto mb-2 ${uploadStatus.cv ? 'text-violet-400' : 'text-gray-400'}`} />
                <div className="font-semibold text-sm text-white">CV Description</div>
                <textarea
                  className="w-full h-28 mt-2 p-2 bg-gray-900 text-gray-200 border border-gray-700 rounded-lg resize-none text-sm focus:border-violet-500/50"
                  placeholder="Paste your CV content here..."
                  onChange={handleCVChange}
                  value={typeof files.cv === 'string' ? files.cv : ''}
                />
              </div>

              <div className="border-2 border-gray-700 hover:border-violet-500/50 rounded-lg p-4 text-center transition-colors">
                <FileText className={`w-6 h-6 mx-auto mb-2 ${uploadStatus.jobDescription ? 'text-violet-400' : 'text-gray-400'}`} />
                <div className="font-semibold text-sm text-white">Job Description</div>
                <textarea
                  className="w-full h-28 mt-2 p-2 bg-gray-900 text-gray-200 border border-gray-700 rounded-lg resize-none text-sm focus:border-violet-500/50"
                  placeholder="Paste the job description here..."
                  onChange={handleDescriptionChange}
                  value={typeof files.jobDescription === 'string' ? files.jobDescription : ''}
                />
              </div>
            </div>

            {/* Features Section - updated styling */}
            <div className="grid grid-cols-3 gap-4">
              <Alert className="bg-gray-900/50 border border-gray-700">
                <AlertCircle className="w-3 h-3 text-violet-400" />
                <AlertDescription className="text-xs text-gray-300">
                  AI-powered keyword matching
                </AlertDescription>
              </Alert>
              <Alert className="bg-gray-900/50 border border-gray-700">
                <AlertCircle className="w-3 h-3 text-violet-400" />
                <AlertDescription className="text-xs text-gray-300">
                  Professional PDF formatting
                </AlertDescription>
              </Alert>
              <Alert className="bg-gray-900/50 border border-gray-700">
                <AlertCircle className="w-3 h-3 text-violet-400" />
                <AlertDescription className="text-xs text-gray-300">
                  ATS-friendly output
                </AlertDescription>
              </Alert>
            </div>

            {/* Download Section - updated styling */}
            <div className="flex flex-col items-center gap-4">
              {currentStep === 3 && (
                <div className="flex gap-4 mb-2">
                  <button
                    onClick={() => setDownloadFormat('pdf')}
                    className={`px-4 py-1 rounded-lg text-sm ${
                      downloadFormat === 'pdf'
                        ? 'bg-violet-500 text-white'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    PDF
                  </button>
                  <button
                    onClick={() => setDownloadFormat('docx')}
                    className={`px-4 py-1 rounded-lg text-sm ${
                      downloadFormat === 'docx'
                        ? 'bg-violet-500 text-white'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    Word
                  </button>
                </div>
              )}
              
              {currentStep === 1 && uploadStatus.cv && uploadStatus.jobDescription && (
                <button 
                  onClick={processDocuments}
                  disabled={isProcessing}
                  className="bg-gradient-to-r from-violet-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all disabled:opacity-50"
                >
                  {isProcessing ? 'Sending request...' : 'Start Processing'}
                </button>
              )}
              
              <button 
                onClick={handleDownload}
                className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition-all
                  ${currentStep === 3 
                    ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white hover:shadow-lg hover:shadow-violet-500/25' 
                    : 'bg-gray-700 text-gray-400'}`}
                disabled={currentStep !== 3}
              >
                <Download className="w-4 h-4" />
                Download as {downloadFormat.toUpperCase()}
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeTailorWorkflow;