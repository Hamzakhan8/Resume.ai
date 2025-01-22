import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-4xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-400">
          Choose Your Plan
        </h3>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Select the perfect plan for your needs. Upgrade or downgrade at any time.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-8 md:space-y-0">
          {/* Basic Plan */}
          <div className="group relative w-full md:w-96 transform transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-violet-500/50 transition-colors">
              <div className="text-violet-400 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-2 text-white">Basic</h4>
              <p className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
                $9.99<span className="text-gray-400 text-base font-normal">/month</span>
              </p>
              <ul className="text-left mb-8 space-y-4">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Access to basic features
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Email support
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-violet-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/25">
                Get Started
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="group relative w-full md:w-96 transform transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gray-800 p-8 rounded-2xl border border-violet-500/50 hover:border-violet-500 transition-colors">
              <div className="absolute -top-5 right-5">
                <span className="bg-gradient-to-r from-violet-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </span>
              </div>
              <div className="text-violet-400 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-2 text-white">Pro</h4>
              <p className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
                $19.99<span className="text-gray-400 text-base font-normal">/month</span>
              </p>
              <ul className="text-left mb-8 space-y-4">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Access to all features
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority support
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-violet-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/25">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 