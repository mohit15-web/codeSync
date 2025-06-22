

const HeroSection = ({handleShareClick}) => {
 
  return (
    <div className="relative bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(148,163,184,0.15)_1px,_transparent_0)] bg-[length:24px_24px]"></div>
      </div>

      {/* Main Content */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                Code Together
                <span className="text-blue-600"> In Real-time</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Professional collaborative coding platform with Monaco Editor,
                real-time synchronization, and seamless sharing.
              </p>

              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Perfect for pair programming, code reviews, and team
                collaboration.
              </p>
            </div>

            {/* CTA Section */}
            <div className="pt-8 space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleShareClick}
                  className="px-8 cursor-pointer py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Share Code Now
                </button>

              </div>

              {/* Feature highlights */}
              <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Instant Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Real-time Sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Secure Sharing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Monaco Editor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
