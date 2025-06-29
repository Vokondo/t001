import React from 'react';
import { Check, Zap, Crown, Rocket, ArrowRight, DollarSign, Calculator, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import AnimationWrapper from '../components/AnimationWrapper';

const Pricing = () => {
  const { theme } = useTheme();

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses looking to establish their digital presence',
      features: [
        'SEO optimization (up to 20 keywords)',
        'Google Ads management ($5K ad spend)',
        'Social media management (2 platforms)',
        'Monthly performance reports',
        'Email support',
        'Basic analytics setup'
      ],
      popular: false,
      cta: 'Start growing today'
    },
    {
      name: 'Professional',
      icon: Rocket,
      price: '$5,000',
      period: '/month',
      description: 'Comprehensive solution for growing businesses ready to scale',
      features: [
        'Advanced SEO (up to 50 keywords)',
        'Multi-platform PPC ($15K ad spend)',
        'Social media management (4 platforms)',
        'Content marketing (8 pieces/month)',
        'Marketing automation setup',
        'Bi-weekly strategy calls',
        'Advanced analytics & reporting',
        'Priority support'
      ],
      popular: true,
      cta: 'Scale your business'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex needs',
      features: [
        'Unlimited SEO keywords',
        'Enterprise PPC management',
        'Full-service content marketing',
        'Advanced marketing automation',
        'Dedicated account manager',
        'Weekly strategy sessions',
        'Custom integrations',
        'White-label reporting',
        '24/7 priority support'
      ],
      popular: false,
      cta: 'Contact sales'
    }
  ];

  const faqs = [
    {
      question: 'What\'s included in the setup process?',
      answer: 'We handle everything from initial audits and strategy development to campaign setup and optimization. You\'ll have a dedicated team working on your account from day one.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'While some improvements can be seen within the first month, significant results typically appear within 3-6 months as our strategies gain momentum.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely! You can change your plan at any time. We\'ll work with you to ensure a smooth transition.'
    },
    {
      question: 'Do you require long-term contracts?',
      answer: 'We offer both month-to-month and annual contracts. Annual contracts come with a 15% discount.'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      {/* Page Header */}
      <section className={`pt-20 pb-8 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <AnimationWrapper animation="fade-in-up" delay={200}>
              <div className={`inline-flex items-center backdrop-blur-sm border rounded-full px-4 py-2 mb-4 hover-lift ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-gray-100/80 border-gray-200'
              }`}>
                <DollarSign className="h-4 w-4 text-orange-400 mr-2 animate-spin-slow" />
                <span className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>Transparent, value-driven pricing</span>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-in-up" delay={400}>
              <h1 className={`text-3xl sm:text-4xl font-bold mb-3 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Plans that scale with your ambitions
              </h1>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-in-up" delay={600}>
              <p className={`text-base max-w-2xl mx-auto transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Choose the perfect plan for your business stage. No hidden fees, no surprises—just transparent pricing that grows with you.
              </p>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className={`py-12 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-black to-gray-900/50' 
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Calculator, title: 'ROI Guarantee', desc: '2.5x average return on investment' },
              { icon: TrendingUp, title: 'Flexible Plans', desc: 'Scale up or down anytime' },
              { icon: Check, title: 'No Setup Fees', desc: 'Get started immediately' }
            ].map((item, index) => (
              <AnimationWrapper key={index} animation="scale-in" delay={index * 100}>
                <div className={`backdrop-blur-sm border rounded-xl p-4 text-center hover-lift card-hover ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-gray-100/80 border-gray-200'
                }`}>
                  <item.icon className="h-6 w-6 text-orange-400 mx-auto mb-2 icon-bounce" />
                  <h3 className={`font-bold mb-1 text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{item.title}</h3>
                  <p className={`text-xs transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>{item.desc}</p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-white/5' : 'bg-gray-100/50'
      }`}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimationWrapper animation="fade-in-up">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Plans that grow with your business
              </h2>
              <p className={`text-base max-w-2xl mx-auto transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                From startups to enterprises, we have the right solution for your growth stage
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <AnimationWrapper key={index} animation="fade-in-up" delay={index * 200}>
                <div
                  className={`relative rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 card-hover hover-lift ${
                    plan.popular 
                      ? 'bg-orange-500/10 border-2 border-orange-500/30 shadow-xl shadow-orange-500/20 scale-105 animate-glow' 
                      : theme === 'dark'
                        ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20'
                        : 'bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 hover:shadow-lg'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full font-medium text-sm shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg mr-3 hover-scale ${
                      plan.popular 
                        ? 'bg-orange-500/20' 
                        : theme === 'dark' 
                          ? 'bg-white/10' 
                          : 'bg-gray-100'
                    }`}>
                      <plan.icon className={`h-5 w-5 icon-wiggle ${
                        plan.popular 
                          ? 'text-orange-400' 
                          : theme === 'dark' 
                            ? 'text-gray-400' 
                            : 'text-gray-600'
                      }`} />
                    </div>
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{plan.name}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline mb-2">
                      <span className={`text-3xl font-bold transition-colors duration-300 text-gradient-animate ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{plan.price}</span>
                      {plan.period && <span className={`ml-1 text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>{plan.period}</span>}
                    </div>
                    <p className={`text-sm transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="h-2 w-2 text-green-400 animate-pulse-slow" />
                        </div>
                        <span className={`text-xs transition-colors duration-300 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact"
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group text-sm btn-animate hover-lift ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25 transform hover:scale-105 animate-glow'
                        : theme === 'dark'
                          ? 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/10 hover:border-white/20'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-black to-gray-900/50' 
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimationWrapper animation="fade-in-up">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Questions? We have answers
              </h2>
              <p className={`text-base transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Everything you need to know about our pricing and services
              </p>
            </div>
          </AnimationWrapper>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimationWrapper key={index} animation="fade-in-up" delay={index * 100}>
                <div className={`backdrop-blur-sm border rounded-xl p-6 hover:border-orange-400/50 transition-colors duration-300 hover-lift card-hover ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-white/80 border-gray-200'
                }`}>
                  <h3 className={`text-base font-bold mb-2 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{faq.question}</h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>{faq.answer}</p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-t from-black to-gray-900/50' 
          : 'bg-gradient-to-t from-white to-gray-50'
      }`}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimationWrapper animation="fade-in-up">
            <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to invest in your growth?
            </h2>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fade-in-up" delay={200}>
            <p className={`text-base mb-8 leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Schedule a free consultation to discuss your goals and find the perfect plan for your business. 
              No pressure, just honest advice about what will work best for you.
            </p>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fade-in-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25 btn-animate hover-lift animate-glow"
              >
                Schedule your free consultation
              </Link>
              <a 
                href="tel:+1-555-123-4567"
                className={`px-6 py-3 rounded-xl font-semibold border transition-all duration-300 hover-lift ${
                  theme === 'dark'
                    ? 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border-white/10 hover:border-white/20'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 border-gray-200 hover:border-gray-300'
                }`}
              >
                Call us directly
              </a>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Pricing;