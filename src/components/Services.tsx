import React from 'react';
import { Search, Target, TrendingUp, Users, MessageSquare, BarChart3, Brain, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI-Powered SEO',
      description: 'Advanced machine learning algorithms optimize your content for maximum search visibility and organic growth.',
      features: ['Smart Keyword Research', 'Content Optimization', 'Technical SEO Automation', 'Competitor Analysis AI'],
      gradient: 'from-violet-600 to-indigo-600'
    },
    {
      icon: Target,
      title: 'Precision Ad Targeting',
      description: 'AI-driven audience segmentation and bidding strategies that maximize ROI across all advertising platforms.',
      features: ['Smart Audience Building', 'Dynamic Bid Optimization', 'Cross-Platform Management', 'Performance Prediction'],
      gradient: 'from-indigo-600 to-cyan-600'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast market trends and customer behavior with advanced AI models that guide strategic decisions.',
      features: ['Trend Forecasting', 'Customer Journey Mapping', 'Revenue Prediction', 'Market Intelligence'],
      gradient: 'from-cyan-600 to-teal-600'
    },
    {
      icon: Users,
      title: 'Social Intelligence',
      description: 'AI-powered social media management that understands your audience and creates engaging content automatically.',
      features: ['Content Generation', 'Sentiment Analysis', 'Optimal Posting Times', 'Influencer Matching'],
      gradient: 'from-teal-600 to-green-600'
    },
    {
      icon: MessageSquare,
      title: 'Content AI Engine',
      description: 'Generate high-converting content at scale with AI that understands your brand voice and audience preferences.',
      features: ['Blog Post Generation', 'Email Campaigns', 'Ad Copy Creation', 'Video Scripts'],
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      icon: Rocket,
      title: 'Growth Automation',
      description: 'End-to-end marketing automation powered by AI that scales your growth without scaling your team.',
      features: ['Lead Scoring', 'Campaign Automation', 'Customer Segmentation', 'Lifecycle Marketing'],
      gradient: 'from-emerald-600 to-violet-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-8">
            <span className="text-sm font-medium text-violet-400">AI-Powered Solutions</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Next-Generation Marketing
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Powered by Advanced AI
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Transform your marketing strategy with AI solutions that learn, adapt, and optimize 
            your campaigns in real-time for unprecedented growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-slate-700/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10" 
                   style={{background: `linear-gradient(135deg, ${service.gradient.split(' ')[1]}, ${service.gradient.split(' ')[3]})`}}></div>
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-300">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;