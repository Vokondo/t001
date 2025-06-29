import React from 'react';
import { ArrowRight, Play, TrendingUp, Users, Target, BarChart3, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import AnimationWrapper from '../components/AnimationWrapper';

const Home = () => {
  const { theme } = useTheme();
  
  const stats = [
    { value: '500+', label: 'Companies trust us' },
    { value: '2.5x', label: 'Average ROI increase' },
    { value: '98%', label: 'Client satisfaction' }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'Data-driven strategies that scale your business exponentially with measurable results.'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Reach your ideal customers with laser-focused campaigns across all digital channels.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights and reporting that turn data into actionable growth opportunities.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'CEO, TechFlow',
      content: 'Trendzeta transformed our digital presence completely. We saw 300% growth in qualified leads within just 4 months.',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Founder, GrowthLab',
      content: 'The ROI we achieved exceeded all expectations. Their team understands growth marketing like no other agency.',
      rating: 5,
      image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-orange-600/20 rounded-full blur-3xl animate-float animate-delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        {/* Animated Grid Pattern */}
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)]'
        } bg-[size:40px_40px] animate-pulse-slow`}></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-16 text-center">
          {/* Animated Badge */}
          <AnimationWrapper animation="fade-in-up" delay={200}>
            <div className={`inline-flex items-center backdrop-blur-sm border rounded-full px-4 py-2 mb-6 hover-lift ${
              theme === 'dark' 
                ? 'bg-white/5 border-white/10' 
                : 'bg-gray-100/80 border-gray-200'
            }`}>
              <Sparkles className="h-4 w-4 text-orange-400 mr-2 animate-spin-slow" />
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>Trusted by 500+ growing companies</span>
            </div>
          </AnimationWrapper>
          
          {/* Animated Main Headline */}
          <AnimationWrapper animation="fade-in-up" delay={400}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className={`transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Transform your business with
              </span>
              <br />
              <span className="text-gradient-animate">
                digital excellence
              </span>
            </h1>
          </AnimationWrapper>
          
          {/* Animated Subtitle */}
          <AnimationWrapper animation="fade-in-up" delay={600}>
            <p className={`text-lg max-w-2xl mx-auto mb-8 leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Drive exponential growth with data-driven digital marketing strategies. 
              We help businesses scale from startup to enterprise with proven methodologies.
            </p>
          </AnimationWrapper>
          
          {/* Animated CTA Buttons */}
          <AnimationWrapper animation="fade-in-up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                to="/contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg shadow-orange-500/25 btn-animate hover-lift animate-glow"
              >
                <span>Get started today</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <button className={`group flex items-center font-semibold transition-all duration-300 hover-lift ${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>
                <div className={`backdrop-blur-sm border p-3 rounded-full mr-3 group-hover:border-orange-500/50 transition-all duration-300 hover-scale ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-gray-100/80 border-gray-200'
                }`}>
                  <Play className="h-4 w-4 ml-0.5 group-hover:animate-bounce-slow" />
                </div>
                Watch demo
              </button>
            </div>
          </AnimationWrapper>
          
          {/* Desktop Stats / Mobile Video */}
          <AnimationWrapper animation="fade-in-up" delay={1000}>
            {/* Desktop Stats - Hidden on Mobile */}
            <div className="hidden sm:grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center p-4 backdrop-blur-sm border rounded-xl transition-all duration-300 hover-lift card-hover animate-delay-${(index + 1) * 100} ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-gray-100/80 border-gray-200'
                }`}>
                  <div className={`text-2xl font-bold mb-1 transition-colors duration-300 text-gradient-animate ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{stat.value}</div>
                  <div className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mobile Video - Hidden on Desktop */}
            <div className="sm:hidden max-w-md mx-auto">
              <div className={`backdrop-blur-sm border rounded-2xl overflow-hidden hover:border-orange-400/50 transition-all duration-300 hover-lift card-hover ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-gray-100/80 border-gray-200'
              }`}>
                <div className="relative aspect-video">
                  <video
                    className="w-full h-full object-cover rounded-t-2xl"
                    poster="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                    controls
                    preload="metadata"
                  >
                    <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-2xl pointer-events-none"></div>
                </div>
                <div className="p-4">
                  <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>See Trendzeta in Action</h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Watch how we've helped businesses like yours achieve remarkable growth through strategic digital marketing.
                  </p>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-black to-gray-900/50' 
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimationWrapper animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Everything you need to grow
              </h2>
              <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Comprehensive digital marketing solutions designed to accelerate your business growth
              </p>
            </div>
          </AnimationWrapper>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimationWrapper key={index} animation="fade-in-up" delay={index * 200}>
                <div className={`group backdrop-blur-sm border rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 card-hover hover-lift ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10 hover:border-white/20' 
                    : 'bg-white/80 border-gray-200 hover:border-gray-300 hover:shadow-lg'
                }`}>
                  <div className={`inline-flex p-3 rounded-xl mb-4 group-hover:bg-orange-500/20 transition-all duration-300 hover-scale icon-bounce ${
                    theme === 'dark' ? 'bg-orange-500/10' : 'bg-orange-100'
                  }`}>
                    <feature.icon className="h-6 w-6 text-orange-400 group-hover:animate-wiggle" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{feature.title}</h3>
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>{feature.description}</p>
                </div>
              </AnimationWrapper>
            ))}
          </div>

          <AnimationWrapper animation="fade-in-up" delay={600}>
            <div className="text-center mt-12">
              <Link 
                to="/services"
                className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 transition-colors duration-200 group hover-lift"
              >
                Explore all services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Social Proof */}
      <section className={`py-20 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-white/5' : 'bg-gray-100/50'
      }`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimationWrapper animation="fade-in-up">
            <div className="text-center mb-12">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Loved by marketing teams worldwide
              </h2>
              <p className={`text-lg transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Join thousands of businesses that have transformed their growth with Trendzeta
              </p>
            </div>
          </AnimationWrapper>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimationWrapper key={index} animation={index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'} delay={index * 200}>
                <div className={`backdrop-blur-sm border rounded-2xl p-6 transition-all duration-500 hover-lift card-hover ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10 hover:border-white/20' 
                    : 'bg-white/80 border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-orange-400 fill-current animate-bounce-slow" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                  
                  <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className={`w-10 h-10 rounded-full object-cover mr-3 border transition-all duration-300 hover-scale ${
                        theme === 'dark' ? 'border-white/20' : 'border-gray-200'
                      }`}
                    />
                    <div>
                      <div className={`font-semibold text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{testimonial.name}</div>
                      <div className={`text-xs transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-t from-black to-gray-900/50' 
          : 'bg-gradient-to-t from-white to-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimationWrapper animation="fade-in-up">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to accelerate your growth?
            </h2>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fade-in-up" delay={200}>
            <p className={`text-lg mb-8 leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Join hundreds of successful businesses that have transformed their growth with Trendzeta. 
              Let's discuss how we can help you achieve your goals.
            </p>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fade-in-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25 btn-animate hover-lift animate-glow"
              >
                Start your growth journey
              </Link>
              <Link 
                to="/pricing"
                className={`px-6 py-3 rounded-lg font-semibold border transition-all duration-300 hover-lift ${
                  theme === 'dark'
                    ? 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border-white/10 hover:border-white/20'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 border-gray-200 hover:border-gray-300'
                }`}
              >
                View pricing
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Home;