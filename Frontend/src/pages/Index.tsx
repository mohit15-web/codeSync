import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeatureSection";
import TrustAndCTASection from "../components/TrustAndCTASection";
import { v4 as uuidv4 } from "uuid";
import Footer from "../components/Footer";
import Logo from "../assets/Logo.png";
const Index = () => {
  const handleShareClick = () => {
    const roomId = uuidv4(); // generates a unique room ID
    window.location.href = `/${roomId}`;
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center justify-center">
                <img src={Logo} alt="" className="w-16" />
                <span className="text-2xl font-bold">CodeSync</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md transition-colors">
                Sign Up
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        {/* <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Code Together,
              <span className="text-primary-500"> In Real-time</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Professional collaborative coding platform with Monaco Editor,
              real-time synchronization, and seamless sharing. Perfect for pair
              programming, code reviews, and team collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleShareClick}
                className="bg-red-600 hover:bg-red-400 text-white px-4 py-2 rounded-md transition-colors"
              >
                Share Code Now
              </button>
            </div>
          </div>
        </div> */}

        <HeroSection handleShareClick={handleShareClick} />
        {/* Floating Code Preview */}
        <div className="max-w-4xl mx-auto mt-16 animate-fade-in">
          <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-gray-400 text-sm">main.js</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="text-gray-300">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-300">collaborateInRealTime</span>
                <span className="text-gray-300">() {"{"}</span>
              </div>
              <div className="ml-4 text-gray-300">
                <span className="text-blue-400">const</span>{" "}
                <span className="text-white">experience</span>{" "}
                <span className="text-gray-300">=</span>{" "}
                <span className="text-green-400">'amazing'</span>
                <span className="text-gray-300">;</span>
              </div>
              <div className="ml-4 text-gray-300">
                <span className="text-blue-400">return</span>{" "}
                <span className="text-white">experience</span>
                <span className="text-gray-300">;</span>
              </div>
              <div className="text-gray-300">{"}"}</div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection handleShareClick={handleShareClick} />
      <TrustAndCTASection handleShareClick={handleShareClick} />

      {/* Footer */}
      <Footer />
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">CodeShare</span>
            </div>
            <div className="text-gray-400">
              © 2024 CodeShare. Built for developers, by developers.
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Index;
