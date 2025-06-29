import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, ArrowRight, Send, MessageCircle, Users, Clock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import AnimationWrapper from '../components/AnimationWrapper';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email us',
      details: 'hello@trendzeta.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit us',
      details: '123 Business Ave, Suite 100',
      description: 'New York, NY 10001'
    },
    {
      icon: Calendar,
      title: 'Schedule',
      details: 'Book a strategy call',
      description: 'Free 30-minute consultation'
    }
  ];

  const services = [
    'SEO Optimization',
    'PPC Advertising',
    'Social Media Marketing',
    'Content Marketing',
    'Marketing Automation',
    'Analytics & Reporting',
    'Full-Service Package'
  ];

  const budgetRanges = [
    'Under $2,500/month',
    '$2,500 - $5,000/month',
    '$5,000 - $10,000/month',
    '$10,000 - $25,000/month',
    'Over $25,000/month'
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
                <MessageCircle className="h-4 w-4 text-orange-400 mr-2 animate-bounce-slow" />
                <span className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>Let's start the conversation</span>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-in-up" delay={400}>
              <h1 className={`text-3xl sm:text-4xl font-bold mb-3 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Ready to transform your business?
              </h1>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-in-up" delay={600}>
              <p className={`text-base max-w-2xl mx-auto transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Tell us about your goals and challenges. We'll create a custom strategy that drives real results for your business.
              </p>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className={`py-12 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-black to-gray-900/50' 
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Clock, title: 'Quick Response', desc: 'We respond within 24 hours' },
              { icon: Users, title: 'Expert Team', desc: 'Direct access to specialists' },
              { icon: Calendar, title: 'Free Consultation', desc: '30-minute strategy session' }
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

      {/* Contact Info Cards */}
      <section className={`py-12 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-white/5' : 'bg-gray-100/50'
      }`}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <AnimationWrapper key={index} animation="fade-in-up" delay={index * 100}>
                <div className={`backdrop-blur-sm border rounded-xl p-4 text-center hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-1 group card-hover hover-lift ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-gray-100/80 border-gray-200'
                }`}>
                  <div className={`inline-flex p-3 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300 hover-scale ${
                    theme === 'dark' ? 'bg-orange-500/10' : 'bg-orange-100'
                  }`}>
                    <info.icon className="h-5 w-5 text-orange-400 icon-wiggle" />
                  </div>
                  <h3 className={`text-base font-semibold mb-1 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{info.title}</h3>
                  <p className="text-orange-400 font-medium text-sm mb-1 text-gradient-animate">{info.details}</p>
                  <p className={`text-xs transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>{info.description}</p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-black to-gray-900/50' 
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimationWrapper animation="fade-in-up">
            <div className={`backdrop-blur-sm border rounded-2xl p-8 hover:border-orange-400/50 transition-colors duration-300 card-hover hover-lift ${
              theme === 'dark' 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/80 border-gray-200'
            }`}>
              <div className="text-center mb-8">
                <h2 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Tell us about your project</h2>
                <p className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Share your goals and challenges with us. We'll create a custom strategy that drives real results.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <AnimationWrapper animation="fade-in-left" delay={200}>
                    <div>
                      <label htmlFor="name" className={`block font-medium mb-2 text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm focus-ring hover-lift ${
                          theme === 'dark' 
                            ? 'bg-white/5 border-white/10 text-white placeholder-gray-500' 
                            : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </AnimationWrapper>
                  
                  <AnimationWrapper animation="fade-in-right" delay={200}>
                    <div>
                      <label htmlFor="email" className={`block font-medium mb-2 text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm focus-ring hover-lift ${
                          theme === 'dark' 
                            ? 'bg-white/5 border-white/10 text-white placeholder-gray-500' 
                            : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </AnimationWrapper>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <AnimationWrapper animation="fade-in-left" delay={300}>
                    <div>
                      <label htmlFor="company" className={`block font-medium mb-2 text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm focus-ring hover-lift ${
                          theme === 'dark' 
                            ? 'bg-white/5 border-white/10 text-white placeholder-gray-500' 
                            : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="Your company name"
                      />
                    </div>
                  </AnimationWrapper>
                  
                  <AnimationWrapper animation="fade-in-right" delay={300}>
                    <div>
                      <label htmlFor="phone" className={`block font-medium mb-2 text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm focus-ring hover-lift ${
                          theme === 'dark' 
                            ? 'bg-white/5 border-white/10 text-white placeholder-gray-500' 
                            : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="Your phone number"
                      />
                    </div>
                  </AnimationWrapper>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <AnimationWrapper animation="fade-in-left" delay={400}>
                    <div>
                      <label htmlFor="service" className={`block font-medium mb-2 text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm focus-ring hover-lift ${
                          theme === 'dark' 
                            ? 'bg-white/5 border-white/10 text-white' 
                            : 'bg-white border-gray-200 text-gray-900'
                        }`}
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service} className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </AnimationWrapper>
                  
                  <AnimationWrapper animation="fade-in-right" delay={400}>
                    <div>
                      <label htmlFor="budget" className={`block font-medium mb-2 text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Monthly Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={`w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm focus-ring hover-lift ${
                          theme === 'dark' 
                            ? 'bg-white/5 border-white/10 text-white' 
                            : 'bg-white border-gray-200 text-gray-900'
                        }`}
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range} className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </AnimationWrapper>
                </div>
                
                <AnimationWrapper animation="fade-in-up" delay={500}>
                  <div>
                    <label htmlFor="message" className={`block font-medium mb-2 text-sm transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Tell us about your goals *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none text-sm focus-ring hover-lift ${
                        theme === 'dark' 
                          ? 'bg-white/5 border-white/10 text-white placeholder-gray-500' 
                          : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="Describe your current challenges, goals, and what success looks like for your business..."
                      required
                    ></textarea>
                  </div>
                </AnimationWrapper>
                
                <AnimationWrapper animation="scale-in" delay={600}>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-lg shadow-orange-500/25 text-sm btn-animate hover-lift animate-glow"
                  >
                    <Send className="mr-2 h-4 w-4 icon-bounce" />
                    Send my project details
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </AnimationWrapper>
              </form>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Contact;