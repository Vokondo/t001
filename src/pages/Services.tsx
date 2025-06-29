import React from 'react';
import { Search, Target, TrendingUp, Users, MessageSquare, BarChart3, CheckCircle, ArrowRight, Zap, Rocket, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import AnimationWrapper from '../components/AnimationWrapper';

const Services = () => {
  const { theme } = useTheme();

  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Dominate search results with comprehensive SEO strategies that drive organic traffic and increase visibility.',
      features: ['Technical SEO audits', 'Keyword research & strategy', 'Content optimization', 'Link building', 'Local SEO', 'Performance tracking'],
      results: '+250% organic traffic increase'
    },
    {
      icon: Target,
      title: 'Pay-Per-Click Advertising',
      description: 'Maximize ROI with precision-targeted ad campaigns across Google, Facebook, LinkedIn, and other platforms.',
      features: ['Campaign strategy & setup', 'Ad copy & creative development', 'Audience targeting', 'Bid management', 'Landing page optimization', 'Performance analytics'],
      results: '3.2x average ROAS'
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Build engaged communities and drive conversions through strategic social media presence and advertising.',
      features: ['Social media strategy', 'Content creation & curation', 'Community management', 'Social advertising', 'Influencer partnerships', 'Social analytics'],
      results: '180% increase in engagement'
    },
    {
      icon: MessageSquare,
      title: 'Content Marketing',
      description: 'Create compelling content that educates, engages, and converts your target audience into loyal customers.',
      features: ['Content strategy development', 'Blog writing & SEO', 'Video content production', 'Email marketing', 'Webinar production', 'Content distribution'],
      results: '4x increase in qualified leads'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with comprehensive analytics, reporting, and business intelligence solutions.',
      features: ['Analytics setup & configuration', 'Custom dashboard creation', 'Conversion tracking', 'Attribution modeling', 'Predictive analytics', 'Monthly reporting'],
      results: '95% improvement in decision accuracy'
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'Accelerate your business growth with data-driven strategies and continuous optimization across all channels.',
      features: ['Growth strategy development', 'A/B testing & optimization', 'Conversion rate optimization', 'Customer acquisition', 'Retention strategies', 'Performance scaling'],
      results: '300% increase in customer acquisition'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business, goals, and current performance to identify opportunities.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a customized marketing strategy tailored to your objectives and audience.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the strategy with precision, setting up campaigns and creating content.'
    },
    {
      step: '04',
      title: 'Optimization & Growth',
      description: 'Continuous monitoring and optimization to maximize ROI and sustainable growth.'
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
                <Rocket className="h-4 w-4 text-orange-400 mr-2 animate-bounce-slow" />
                <span className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>Full-service digital marketing</span>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-in-up" delay={400}>
              <h1 className={`text-3xl sm:text-4xl font-bold mb-3 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Services that drive real business growth
              </h1>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-in-up" delay={600}>
              <p className={`text-base max-w-2xl mx-auto transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                From SEO to paid advertising, we offer comprehensive digital marketing solutions designed to accelerate your business growth and maximize ROI.
              </p>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-black to-gray-900/50' 
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimationWrapper animation="fade-in-up">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Our complete service arsenal
              </h2>
              <p className={`text-base max-w-2xl mx-auto transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Each service is designed to work seamlessly together, creating a powerful marketing ecosystem for your business
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <AnimationWrapper key={index} animation={index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'} delay={index * 100}>
                <div className={`backdrop-blur-sm border rounded-2xl p-6 hover:border-orange-400/50 transition-all duration-500 hover:-translate-y-1 group card-hover hover-lift ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-white/80 border-gray-200 hover:shadow-lg'
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 hover-scale ${
                      theme === 'dark' ? 'bg-orange-500/10' : 'bg-orange-100'
                    }`}>
                      <service.icon className="h-6 w-6 text-orange-400 icon-wiggle" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{service.title}</h3>
                      <p className={`mb-4 text-sm leading-relaxed transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>{service.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 text-orange-400 flex-shrink-0 animate-pulse-slow" />
                            <span className={`text-xs transition-colors duration-300 ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className={`rounded-lg p-3 mb-4 border hover-lift ${
                        theme === 'dark' 
                          ? 'bg-orange-500/10 border-orange-500/20' 
                          : 'bg-orange-100 border-orange-200'
                      }`}>
                        <div className={`text-xs mb-1 transition-colors duration-300 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>Average Results:</div>
                        <div className="text-orange-400 font-bold text-sm text-gradient-animate">{service.results}</div>
                      </div>
                      
                      <Link 
                        to="/contact"
                        className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 transition-colors duration-200 group/link text-sm hover-lift"
                      >
                        Get started with this service
                        <ArrowRight className="ml-2 h-3 w-3 group-hover/link:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-white/5' : 'bg-gray-100/50'
      }`}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimationWrapper animation="fade-in-up">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                How we deliver results
              </h2>
              <p className={`text-base transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Our proven 4-step process ensures consistent, measurable results for every client
              </p>
            </div>
          </AnimationWrapper>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <AnimationWrapper key={index} animation="scale-in" delay={index * 200}>
                <div className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25 hover-scale animate-glow">
                      <span className="text-sm font-bold text-white">{step.step}</span>
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent animate-pulse-slow"></div>
                    )}
                  </div>
                  <h3 className={`text-base font-bold mb-2 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{step.title}</h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>{step.description}</p>
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
              Ready to dominate your competition?
            </h2>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fade-in-up" delay={200}>
            <p className={`text-base mb-8 leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Let's discuss how our comprehensive services can accelerate your business growth. 
              Get a free consultation and custom strategy proposal tailored to your goals.
            </p>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fade-in-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25 btn-animate hover-lift animate-glow"
              >
                Get your free strategy session
              </Link>
              <Link 
                to="/pricing"
                className={`px-6 py-3 rounded-xl font-semibold border transition-all duration-300 hover-lift ${
                  theme === 'dark'
                    ? 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border-white/10 hover:border-white/20'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 border-gray-200 hover:border-gray-300'
                }`}
              >
                View pricing options
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Services;