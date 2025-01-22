import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900 text-white backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <nav>
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text">
                ResumeCraft
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                <a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a>
                <button className="px-4 py-2 bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-xl font-semibold transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/25">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;