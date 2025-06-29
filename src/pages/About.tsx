import React from 'react';
import { Award, Users, TrendingUp, Target, CheckCircle, ArrowRight, Brain, Shield, Rocket, Linkedin, Twitter, Mail, Sparkles, Heart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import AnimationWrapper from '../components/AnimationWrapper';

const About = () => {
  const { theme } = useTheme();

  const stats = [
    { icon: Users, value: '500+', label: 'Happy clients' },
    { icon: TrendingUp, value: '2.5x', label: 'Average ROI' },
    { icon: Target, value: '98%', label: 'Success rate' },
    { icon: Award, value: '50+', label: 'Awards won' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We stay ahead of digital trends, constantly evolving our strategies to leverage the latest technologies and methodologies.'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Complete visibility into our processes and results. No black boxes, just clear communication and honest reporting.'
    },
    {
      icon: Rocket,
      title: 'Results Driven',
      description: 'Every strategy is designed with measurable outcomes in mind. We focus on metrics that matter to your bottom line.'
    }
  ];

  const team = [
    {
      name: 'Alex Rodriguez',
      title: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg',
      bio: '15+ years in digital marketing, former Google executive with expertise in scaling growth strategies.',
      specialties: ['Growth Strategy', 'Team Leadership', 'Business Development'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'alex@trendzeta.com'
      }
    },
    {
      name: 'Sarah Kim',
      title: 'Head of Strategy',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      bio: 'Data scientist turned marketing strategist, MIT graduate specializing in AI-driven marketing solutions.',
      specialties: ['Data Analytics', 'AI Marketing', 'Strategy Development'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@trendzeta.com'
      }
    },
    {
      name: 'Michael Chen',
      title: 'Creative Director',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      bio: 'Award-winning creative with 12+ years at top agencies, leading innovative campaigns for Fortune 500 companies.',
      specialties: ['Creative Strategy', 'Brand Development', 'Content Creation'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@trendzeta.com'
      }
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
                <Heart className="h-4 w-4 text-orange-400 mr-2 animate-pulse-slow" />
                <span className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>The team behind your success</span>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-in-up" delay={400}>
              <h1 className={`text-3xl sm:text-4xl font-bold mb-3 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Meet the growth experts who make it happen
              </h1>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-in-up" delay={600}>
              <p className={`text-base max-w-2xl mx-auto transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                We're passionate marketers, data scientists, and growth hackers united by one mission: accelerating your business success.
              </p>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-12 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-black to-gray-900/50' 
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimationWrapper key={index} animation="scale-in" delay={index * 100}>
                <div className={`text-center p-4 backdrop-blur-sm border rounded-xl hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-1 group card-hover ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-gray-100/80 border-gray-200'
                }`}>
                  <div className={`inline-flex p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 hover-scale ${
                    theme === 'dark' ? 'bg-orange-500/10' : 'bg-orange-100'
                  }`}>
                    <stat.icon className="h-5 w-5 text-orange-400 icon-bounce" />
                  </div>
                  <div className={`text-2xl font-bold mb-1 transition-colors duration-300 text-gradient-animate ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{stat.value}</div>
                  <div className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>{stat.label}</div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className={`py-12 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-white/5' : 'bg-gray-100/50'
      }`}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimationWrapper animation="fade-in-up">
            <div className={`backdrop-blur-sm border rounded-2xl p-6 hover-lift card-hover ${
              theme === 'dark' 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/80 border-gray-200'
            }`}>
              <div className="flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-orange-400 mr-2 animate-spin-slow" />
                <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Our Mission</h2>
              </div>
              <p className={`text-base leading-relaxed transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                To empower every business with world-class digital marketing capabilities, 
                regardless of size or budget. We believe great marketing should be accessible to all, 
                and every success story starts with a vision—let's build yours together.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Values Section */}
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
                What drives us every day
              </h2>
              <p className={`text-base max-w-2xl mx-auto transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Our core values shape every decision, every strategy, and every relationship we build
              </p>
            </div>
          </AnimationWrapper>
          
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <AnimationWrapper key={index} animation="fade-in-up" delay={index * 200}>
                <div className={`backdrop-blur-sm border rounded-2xl p-6 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-2 group card-hover hover-lift ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-white/80 border-gray-200 hover:shadow-lg'
                }`}>
                  <div className={`inline-flex p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 hover-scale ${
                    theme === 'dark' ? 'bg-orange-500/10' : 'bg-orange-100'
                  }`}>
                    <value.icon className="h-6 w-6 text-orange-400 icon-wiggle" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{value.title}</h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>{value.description}</p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-white/5' : 'bg-gray-100/50'
      }`}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimationWrapper animation="fade-in-up">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Meet our leadership team
              </h2>
              <p className={`text-base max-w-2xl mx-auto transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Experienced leaders who've built and scaled marketing teams at top companies worldwide
              </p>
            </div>
          </AnimationWrapper>
          
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <AnimationWrapper key={index} animation={index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'} delay={index * 200}>
                <div className="group">
                  <div className={`backdrop-blur-sm border rounded-2xl p-6 hover:border-orange-400/50 transition-all duration-500 hover:-translate-y-2 card-hover hover-lift ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-white/80 border-gray-200 hover:shadow-lg'
                  }`}>
                    {/* Profile Image */}
                    <div className="relative mb-4">
                      <div className="w-20 h-20 mx-auto relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className={`w-full h-full rounded-2xl object-cover border-2 group-hover:border-orange-400/50 transition-all duration-300 hover-scale ${
                            theme === 'dark' ? 'border-white/20' : 'border-gray-200'
                          }`}
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center animate-bounce-slow">
                          <Sparkles className="h-3 w-3 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Member Info */}
                    <div className="text-center mb-4">
                      <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{member.name}</h3>
                      <p className="text-orange-400 font-semibold text-sm mb-3">{member.title}</p>
                      <p className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>{member.bio}</p>
                    </div>
                    
                    {/* Specialties */}
                    <div className="mb-4">
                      <h4 className={`font-semibold mb-2 text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Expertise</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, idx) => (
                          <span 
                            key={idx}
                            className={`px-2 py-1 border rounded-full text-orange-400 text-xs font-medium hover-scale ${
                              theme === 'dark' 
                                ? 'bg-orange-500/10 border-orange-500/20' 
                                : 'bg-orange-100 border-orange-200'
                            }`}
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex justify-center space-x-2">
                      <a 
                        href={member.social.linkedin}
                        className={`p-2 border rounded-lg hover:border-orange-400/50 transition-all duration-200 group/social hover-lift icon-bounce ${
                          theme === 'dark' 
                            ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                            : 'bg-gray-100 border-gray-200 hover:bg-gray-200'
                        }`}
                      >
                        <Linkedin className={`h-4 w-4 group-hover/social:text-orange-400 transition-colors duration-200 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`} />
                      </a>
                      <a 
                        href={member.social.twitter}
                        className={`p-2 border rounded-lg hover:border-orange-400/50 transition-all duration-200 group/social hover-lift icon-bounce ${
                          theme === 'dark' 
                            ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                            : 'bg-gray-100 border-gray-200 hover:bg-gray-200'
                        }`}
                      >
                        <Twitter className={`h-4 w-4 group-hover/social:text-orange-400 transition-colors duration-200 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`} />
                      </a>
                      <a 
                        href={`mailto:${member.social.email}`}
                        className={`p-2 border rounded-lg hover:border-orange-400/50 transition-all duration-200 group/social hover-lift icon-bounce ${
                          theme === 'dark' 
                            ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                            : 'bg-gray-100 border-gray-200 hover:bg-gray-200'
                        }`}
                      >
                        <Mail className={`h-4 w-4 group-hover/social:text-orange-400 transition-colors duration-200 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`} />
                      </a>
                    </div>
                  </div>
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
              Ready to write your success story?
            </h2>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fade-in-up" delay={200}>
            <p className={`text-base mb-8 leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Let's discuss how our team can help transform your digital marketing and accelerate your growth journey.
            </p>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fade-in-up" delay={400}>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25 group btn-animate hover-lift animate-glow"
            >
              Start the conversation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default About;