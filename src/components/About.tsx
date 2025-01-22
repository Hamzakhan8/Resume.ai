import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              About ResumeTailor
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
              ResumeTailor is an AI-powered tool designed to help you create the perfect resume tailored to any job description.
            </p>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gray-800 rounded-2xl border border-gray-700 hover:border-violet-500/50 transition-colors p-8">
              <p className="text-gray-300 leading-relaxed mb-12">
                Our advanced algorithms analyze your CV and the job requirements to provide you with a customized resume that stands out.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-4 transform transition-all duration-300 hover:-translate-y-2">
                  <div className="text-violet-400 mb-4">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">AI-Powered</h3>
                  <p className="text-gray-400">Smart algorithms that understand your needs</p>
                </div>
                
                <div className="text-center p-4 transform transition-all duration-300 hover:-translate-y-2">
                  <div className="text-violet-400 mb-4">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Fast & Easy</h3>
                  <p className="text-gray-400">Get your tailored resume in minutes</p>
                </div>
                
                <div className="text-center p-4 transform transition-all duration-300 hover:-translate-y-2">
                  <div className="text-violet-400 mb-4">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Better Results</h3>
                  <p className="text-gray-400">Increase your chances of landing interviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 