import React from 'react';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-4xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-400">
          Meet Our Team
        </h3>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          The passionate individuals behind our success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Team Member 1 */}
          <div className="group relative transform transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-violet-500/50 transition-colors">
              <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="Sarah Johnson" className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-violet-400 object-cover" />
              <h4 className="text-2xl font-bold mb-2 text-white">Sarah Johnson</h4>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 font-semibold">CEO</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="group relative transform transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-violet-500/50 transition-colors">
              <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg" alt="Michael Chen" className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-violet-400 object-cover" />
              <h4 className="text-2xl font-bold mb-2 text-white">Michael Chen</h4>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 font-semibold">CTO</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="group relative transform transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-violet-500/50 transition-colors">
              <img src="https://images.pexels.com/photos/3799115/pexels-photo-3799115.jpeg" alt="Emily Rodriguez" className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-violet-400 object-cover" />
              <h4 className="text-2xl font-bold mb-2 text-white">Emily Rodriguez</h4>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 font-semibold">Lead Designer</p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="group relative transform transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-violet-500/50 transition-colors">
              <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" alt="David Kim" className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-violet-400 object-cover" />
              <h4 className="text-2xl font-bold mb-2 text-white">David Kim</h4>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 font-semibold">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 