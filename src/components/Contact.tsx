import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, ArrowRight, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div class="glowing-button-container">
            <div className="glowing-button inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-8">
              <span className="text-sm font-medium text-violet-400">Get Started Today</span>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Save Money and Time
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Running a business is hard - We make sales and grow your business in 
            the most efficient way possible.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column - Tools Preview */}
          <div className="space-y-8">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">SEO Blog Writer</h3>
                <div className="bg-gradient-to-r from-green-400 to-emerald-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Active
                </div>
              </div>
              <p className="text-slate-400 mb-6">
                First-class SEO blog content powered by your website. 
                AI blog writer that understands your business and writes 
                content that ranks on Google and drives traffic to your site.
              </p>
              <div className="flex items-center text-violet-400 font-medium">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Find Prospect & Personalize Outreach</h3>
                <div className="bg-gradient-to-r from-blue-400 to-indigo-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </div>
              </div>
              <p className="text-slate-400 mb-6">
                Automatically find and personalize outreach to potential customers. 
                Our AI analyzes your ideal customer profile and creates personalized 
                messages that convert.
              </p>
              <div className="flex items-center text-violet-400 font-medium">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">SEO Keyword Research</h3>
                <div className="bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Beta
                </div>
              </div>
              <p className="text-slate-400 mb-6">
                Find the best SEO keywords to rank for and get organic traffic. 
                Our advanced AI analyzes search patterns and competition to find 
                opportunities your competitors miss.
              </p>
              <div className="flex items-center text-violet-400 font-medium">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Start Your Free Trial</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors"
                    placeholder="Enter your company"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Tell us about your goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors resize-none"
                    placeholder="What are your marketing challenges?"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-2xl shadow-violet-600/25"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-slate-800/50">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <Mail className="h-6 w-6 text-violet-400 mb-2" />
                    <div className="text-sm text-slate-300">Email</div>
                    <div className="text-xs text-slate-400">hello@trendzeta.ai</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Phone className="h-6 w-6 text-indigo-400 mb-2" />
                    <div className="text-sm text-slate-300">Phone</div>
                    <div className="text-xs text-slate-400">+1 (555) 123-4567</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Calendar className="h-6 w-6 text-cyan-400 mb-2" />
                    <div className="text-sm text-slate-300">Schedule</div>
                    <div className="text-xs text-slate-400">Book a demo call</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;