import React from 'react';
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/10 to-indigo-600/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-8">
            <Sparkles className="h-4 w-4 text-violet-400 mr-2" />
            <span className="text-sm font-medium text-slate-300">Trusted by 500+ Growing Companies</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Revolutionize Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Marketing with AI Power
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Boost your campaign performance by 300% with AI-driven insights that turn 
            data into revenue. Get advanced AI marketing solutions that scale with your business.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group relative bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center shadow-2xl shadow-violet-600/25">
              <span>Get Started Free</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group flex items-center text-slate-300 hover:text-white font-semibold transition-colors duration-200">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-3 rounded-full mr-3 group-hover:border-violet-500/50 transition-colors duration-200">
                <Play className="h-5 w-5 ml-0.5" />
              </div>
              Watch Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                1.67x
              </div>
              <div className="text-sm text-slate-400">Impressive Performance</div>
              <div className="text-xs text-slate-500">vs other tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                29%
              </div>
              <div className="text-sm text-slate-400">Customer Retention</div>
              <div className="text-xs text-slate-500">vs last quarter</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-2">
                19%
              </div>
              <div className="text-sm text-slate-400">Extra Growth Revenue</div>
              <div className="text-xs text-slate-500">from last year</div>
            </div>
          </div>
        </div>
        
        {/* Dashboard Preview */}
        <div className="mt-20 relative">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-3xl blur-3xl transform scale-105"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-8 shadow-2xl">
              <div className="bg-slate-800/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-slate-400 text-sm">trendzeta.ai/dashboard</div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-violet-600/20 to-indigo-600/20 rounded-xl p-6 border border-violet-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <TrendingUp className="h-8 w-8 text-violet-400" />
                      <span className="text-2xl font-bold text-white">+247%</span>
                    </div>
                    <div className="text-slate-300 text-sm">Campaign Performance</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 rounded-xl p-6 border border-indigo-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <Users className="h-8 w-8 text-indigo-400" />
                      <span className="text-2xl font-bold text-white">12.4K</span>
                    </div>
                    <div className="text-slate-300 text-sm">New Leads Generated</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-600/20 to-violet-600/20 rounded-xl p-6 border border-cyan-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <Zap className="h-8 w-8 text-cyan-400" />
                      <span className="text-2xl font-bold text-white">98.7%</span>
                    </div>
                    <div className="text-slate-300 text-sm">AI Accuracy Rate</div>
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

export default Hero;