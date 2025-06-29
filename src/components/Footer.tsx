import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import AnimationWrapper from './AnimationWrapper';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about' },
      { name: 'Careers', path: '#' },
      { name: 'Press', path: '#' }
    ],
    services: [
      { name: 'SEO Services', path: '/services' },
      { name: 'PPC Management', path: '/services' },
      { name: 'Social Media', path: '/services' },
      { name: 'Content Marketing', path: '/services' }
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'Case Studies', path: '#' },
      { name: 'Webinars', path: '#' },
      { name: 'Free Tools', path: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Cookie Policy', path: '#' },
      { name: 'GDPR', path: '#' }
    ]
  };

  return (
    <footer className={`border-t transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-black border-white/10' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <AnimationWrapper animation="fade-in-up" className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 hover-rotate animate-glow">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className={`text-xl font-semibold transition-all duration-300 group-hover:text-orange-400 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Trendzeta
              </span>
            </Link>
            
            <p className={`mb-8 max-w-md leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Empowering businesses worldwide with cutting-edge digital marketing solutions. 
              Transform your online presence and drive measurable growth with Trendzeta.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-8">
              <h4 className={`font-semibold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`flex-1 px-4 py-3 border rounded-l-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 focus-ring ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10 text-white placeholder-gray-500' 
                      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
                />
                <button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-r-xl transition-all duration-300 flex items-center btn-animate hover-lift animate-glow">
                  <ArrowRight className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-3 rounded-xl hover:bg-orange-500/10 transition-all duration-300 group border hover-lift icon-bounce ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-gray-100 border-gray-200'
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <social.icon className={`h-5 w-5 group-hover:text-orange-400 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`} />
                </a>
              ))}
            </div>
          </AnimationWrapper>
          
          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <AnimationWrapper key={category} animation="fade-in-up" delay={categoryIndex * 100}>
              <div>
                <h3 className={`font-semibold mb-6 transition-colors duration-300 capitalize ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{category}</h3>
                <ul className="space-y-4">
                  {links.map((link, linkIndex) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path} 
                        className={`hover:text-orange-400 transition-all duration-300 hover-lift animate-fade-in-left ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                        style={{animationDelay: `${linkIndex * 0.05}s`}}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimationWrapper>
          ))}
        </div>
        
        {/* Bottom Section */}
        <AnimationWrapper animation="fade-in-up" delay={500}>
          <div className={`border-t mt-16 pt-8 transition-colors duration-300 ${
            theme === 'dark' ? 'border-white/10' : 'border-gray-200'
          }`}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className={`text-sm transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                © {currentYear} Trendzeta. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {footerLinks.legal.map((link, index) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm hover:text-orange-400 transition-all duration-300 hover-lift animate-fade-in-right ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </footer>
  );
};

export default Footer;