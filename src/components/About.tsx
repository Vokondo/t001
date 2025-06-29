import React from 'react';
import { Award, Users, TrendingUp, Target, Zap, Brain, Shield, Rocket } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '40,000+', label: 'Active Users', gradient: 'from-violet-600 to-indigo-600' },
    { icon: TrendingUp, value: '1.67x', label: 'Performance Boost', gradient: 'from-indigo-600 to-cyan-600' },
    { icon: Target, value: '29%', label: 'Higher Retention', gradient: 'from-cyan-600 to-teal-600' },
    { icon: Award, value: '19%', label: 'Revenue Growth', gradient: 'from-teal-600 to-violet-600' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Engine',
      description: 'Our proprietary AI algorithms analyze millions of data points to optimize your campaigns in real-time.',
      gradient: 'from-violet-600 to-indigo-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance ensures your data is protected at all times.',
      gradient: 'from-indigo-600 to-cyan-600'
    },
    {
      icon: Rocket,
      title: 'Scalable Infrastructure',
      description: 'Built to handle enterprise-level campaigns with 99.9% uptime and lightning-fast performance.',
      gradient: 'from-cyan-600 to-teal-600'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-8">
              <span className="text-sm font-medium text-violet-400">Why Choose Trendzeta</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Ready to Transform Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Team's Potential with AI?
              </span>
            </h2>
            
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Join thousands of marketing teams who've revolutionized their performance with our 
              AI-powered platform. Experience the future of digital marketing today.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} flex-shrink-0`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-8 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-violet-600/25">
              Get Started Today
            </button>
          </div>
          
          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-3xl blur-3xl transform scale-105"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-violet-600/20 to-indigo-600/20 rounded-2xl p-6 border border-violet-500/20">
                    <div className="text-3xl font-bold text-white mb-2">1.67x</div>
                    <div className="text-slate-300 text-sm">Performance Boost</div>
                    <div className="text-xs text-slate-500 mt-1">vs other tools</div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 rounded-2xl p-6 border border-indigo-500/20">
                    <div className="text-3xl font-bold text-white mb-2">29%</div>
                    <div className="text-slate-300 text-sm">Higher Retention</div>
                    <div className="text-xs text-slate-500 mt-1">vs last quarter</div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-600/20 to-teal-600/20 rounded-2xl p-6 border border-cyan-500/20">
                    <div className="text-3xl font-bold text-white mb-2">19%</div>
                    <div className="text-slate-300 text-sm">Revenue Growth</div>
                    <div className="text-xs text-slate-500 mt-1">from last year</div>
                  </div>
                  <div className="bg-gradient-to-br from-teal-600/20 to-violet-600/20 rounded-2xl p-6 border border-teal-500/20">
                    <div className="text-3xl font-bold text-white mb-2">40K+</div>
                    <div className="text-slate-300 text-sm">Active Users</div>
                    <div className="text-xs text-slate-500 mt-1">and growing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;