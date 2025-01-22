import React, { useState } from 'react';
import { Mail, MessageSquare, Send, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
          Get in Touch
        </h3>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="group relative transform transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-violet-500/50 transition-colors">
              
              {status === 'success' && (
                <Alert className="mb-6 bg-green-900/50 border border-green-500/50">
                  <AlertCircle className="w-4 h-4 text-green-400" />
                  <AlertDescription className="text-green-200">
                    Message sent successfully! We'll get back to you soon.
                  </AlertDescription>
                </Alert>
              )}

              {status === 'error' && (
                <Alert className="mb-6 bg-red-900/50 border border-red-500/50">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <AlertDescription className="text-red-200">
                    Failed to send message. Please try again.
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900 text-gray-200 border border-gray-700 rounded-lg px-4 py-3 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
                        placeholder="Your Name"
                      />
                      <MessageSquare className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900 text-gray-200 border border-gray-700 rounded-lg px-4 py-3 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
                        placeholder="Your Email"
                      />
                      <Mail className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-gray-900 text-gray-200 border border-gray-700 rounded-lg px-4 py-3 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 resize-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-violet-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/25 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Email', value: 'contact@example.com' },
              { title: 'Phone', value: '+1 (555) 123-4567' },
              { title: 'Address', value: '123 Business Ave, Suite 100' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-violet-500/50 transition-colors"
              >
                <h4 className="text-violet-400 font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs; 