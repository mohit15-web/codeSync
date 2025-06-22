import React from 'react';
import { ArrowRight, Star, Shield, Zap, Users, TrendingUp, Award } from 'lucide-react';

const TrustAndCTASection = ({handleShareClick}) => {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Active Developers",
      description: "Join thousands of developers worldwide"
    },
    {
      icon: Zap,
      number: "1M+",
      label: "Code Sessions",
      description: "Millions of collaborative sessions completed"
    },
    {
      icon: Shield,
      number: "99.9%",
      label: "Uptime",
      description: "Enterprise-grade reliability you can trust"
    },
    {
      icon: TrendingUp,
      number: "50M+",
      label: "Lines of Code",
      description: "Collaborative code written on our platform"
    }
  ];

  const testimonials = [
    {
      quote: "This platform has revolutionized how our team collaborates on code. The real-time sync is flawless.",
      author: "Sarah Chen",
      role: "Senior Developer",
      company: "TechCorp"
    },
    {
      quote: "Finally, a collaborative coding solution that actually works. No more merge conflicts!",
      author: "Michael Rodriguez",
      role: "Team Lead",
      company: "StartupXYZ"
    }
  ];

  const companies = [
    "TechCorp", "InnovateLabs", "DevStudio", "CodeWorks", "AgileTeam", "BuildFast"
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Trust Indicators Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Company Logos */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-gray-500 mb-8">
              Trusted by developers at leading companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {companies.map((company, index) => (
                <div key={index} className="text-lg font-semibold text-gray-600 hover:text-gray-800 transition-colors">
                  {company}
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 group-hover:bg-blue-200 rounded-full mb-4 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-100 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Join the Future of Collaborative Coding
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your
            <span className="block">Development Workflow?</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already collaborating more effectively. 
            Start your free trial today – no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button onClick={handleShareClick} className="group bg-white hover:bg-gray-50 text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center">
              Share Code Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
        
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              <span>Setup in 30 seconds</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span>Free for small teams</span>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Trust Signals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-sm text-gray-600">SOC 2 compliant with end-to-end encryption</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-600">Sub-second synchronization worldwide</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">Expert support when you need it most</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustAndCTASection;