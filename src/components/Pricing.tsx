import React from 'react';
import { Check, Zap, Crown, Rocket, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: '$19',
      period: '/month',
      description: 'Perfect for small teams getting started with AI marketing',
      features: [
        'Access to Workflow Editor',
        '5 Text Inputs (Blocks) per AI',
        'Limited Integrations',
        'Limited Campaigns',
        'Community Support'
      ],
      gradient: 'from-slate-700 to-slate-800',
      borderGradient: 'from-slate-600 to-slate-700',
      popular: false,
      cta: 'Get 14 Days Free Trial'
    },
    {
      name: 'Professional',
      icon: Rocket,
      price: '$49',
      period: '/month',
      description: 'Advanced features for growing marketing teams',
      features: [
        'Connect to Your Business',
        'Copy to Your Business Voice',
        'All Text Inputs (Blocks) per AI',
        'All Integrations',
        'Custom Integrations',
        'Basic Data Reporting',
        'Email Support'
      ],
      gradient: 'from-violet-600 to-indigo-600',
      borderGradient: 'from-violet-500 to-indigo-500',
      popular: true,
      cta: 'Get 14 Days Free Trial'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: '$99',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Connect to Your Business',
        'Copy to Your Business Voice',
        'All Text Inputs (Blocks) per AI',
        'All Integrations',
        'Custom Integrations',
        'Advanced Data Reporting',
        'Basic Data Reporting',
        'Priority Support'
      ],
      gradient: 'from-indigo-600 to-cyan-600',
      borderGradient: 'from-indigo-500 to-cyan-500',
      popular: false,
      cta: 'Get 14 Days Free Trial'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-8">
            <span className="text-sm font-medium text-violet-400">Simple, Easy Pricing</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              No Limits.
            </span>
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent ml-3">
              All Monthly (10% off)
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your team. Upgrade or downgrade at any time. 
            No hidden fees, no surprises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${
                plan.popular ? 'scale-105 z-10' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-3xl p-8 h-full transition-all duration-500 hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-violet-500/50 shadow-2xl shadow-violet-600/25' 
                  : 'border-slate-800/50 hover:border-slate-700/50'
              }`}>
                {/* Gradient Border Effect */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-3xl blur-xl -z-10"></div>
                )}
                
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${plan.gradient} mr-4`}>
                    <plan.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-slate-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group ${
                  plan.popular
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 transform hover:scale-105 shadow-lg shadow-violet-600/25'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50'
                }`}>
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-4">Need a custom solution for your enterprise?</p>
          <button className="text-violet-400 font-semibold hover:text-violet-300 transition-colors duration-200 flex items-center justify-center mx-auto group">
            Contact us for enterprise pricing
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;