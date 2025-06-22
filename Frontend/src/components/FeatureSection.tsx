import React from 'react';
import { Code, Users, Zap, Shield, Globe, Sparkles } from 'lucide-react';

const FeaturesSection = ({handleShareClick}) => {
  const features = [
    {
      icon: Code,
      title: "Monaco Editor",
      description: "Industry-standard code editor with IntelliSense, syntax highlighting, and advanced editing features for a seamless coding experience."
    },
    {
      icon: Users,
      title: "Real-time Collaboration",
      description: "Multiple developers can code together simultaneously with live cursors, instant updates, and conflict-free editing."
    },
    {
      icon: Zap,
      title: "Instant Synchronization",
      description: "Lightning-fast sync across all connected devices with sub-second latency and automatic conflict resolution."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "End-to-end encryption, secure room sharing, and enterprise-grade security to protect your sensitive code."
    },
    {
      icon: Globe,
      title: "Universal Access",
      description: "Works seamlessly across all devices and browsers with no installation required. Share with a simple link."
    },
    {
      icon: Sparkles,
      title: "Smart Features",
      description: "Auto-save, version history, syntax validation, and intelligent code completion to boost your productivity."
    }
  ];

  return (
    <div className="relative bg-gray-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(148,163,184,0.1)_1px,_transparent_0)] bg-[length:32px_32px]"></div>
      
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Everything You Need for
              <span className="block text-blue-600">Collaborative Coding</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional-grade features designed for developers who demand the best collaborative experience.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-100 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 pt-12 border-t border-gray-200">
            <p className="text-gray-600 mb-6">
              Ready to transform your development workflow?
            </p>
            <button onClick={handleShareClick} className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get Started Free
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;