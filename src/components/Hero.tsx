import React from 'react';
import ResumeTailorWorkflow from './Resumetaolor';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-violet-500/30 blur-3xl animate-blob" />
      <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl animate-blob animation-delay-2000" />
      
      {/* Two-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column - Hero content */}
        <div className="text-left">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
            Transform Your Resume with AI
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-8">
            Stand out from the crowd with our intelligent resume tailoring system. 
            Upload your CV and job description, and let AI optimize your resume for success.
          </p>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-xl font-semibold transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/25 flex items-center justify-center">
                <span>Get Started</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="px-8 py-3 bg-gray-800 text-white rounded-xl font-semibold transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/25">
                Watch Demo
              </button>
            </div>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">ATS-Friendly Format</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">AI-Powered Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Instant Results</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Professional Design</span>
              </div>
            </div>

         
          </div>
        </div>

        {/* Right column - Resume Tailor component */}
        <div className="group relative w-full transform transition-all duration-300 animate-float">
            <ResumeTailorWorkflow />
          </div>
      </div>
    </div>
  );
};

export default Hero;