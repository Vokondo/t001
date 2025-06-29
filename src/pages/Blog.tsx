import React from 'react';
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Lightbulb } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import AnimationWrapper from '../components/AnimationWrapper';

const Blog = () => {
  const { theme } = useTheme();

  const featuredPost = {
    title: 'The Future of Digital Marketing: AI-Powered Strategies for 2024',
    excerpt: 'Discover how artificial intelligence is revolutionizing digital marketing and learn the strategies that will dominate in 2024.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    author: 'Sarah Kim',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'AI Marketing'
  };

  const blogPosts = [
    {
      title: 'SEO Trends That Will Dominate Search Rankings in 2024',
      excerpt: 'Stay ahead of the competition with these emerging SEO trends and optimization strategies.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg',
      author: 'Alex Rodriguez',
      date: 'March 12, 2024',
      readTime: '6 min read',
      category: 'SEO'
    },
    {
      title: 'Maximizing ROI with Advanced PPC Campaign Strategies',
      excerpt: 'Learn how to optimize your pay-per-click campaigns for maximum return on investment.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      author: 'Michael Chen',
      date: 'March 10, 2024',
      readTime: '7 min read',
      category: 'PPC'
    },
    {
      title: 'Social Media Marketing: Building Authentic Brand Communities',
      excerpt: 'Discover strategies for creating engaged communities that drive brand loyalty and conversions.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
      author: 'Emily Watson',
      date: 'March 8, 2024',
      readTime: '5 min read',
      category: 'Social Media'
    },
    {
      title: 'Content Marketing ROI: Measuring What Matters',
      excerpt: 'Learn how to track and measure the true impact of your content marketing efforts.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg',
      author: 'David Park',
      date: 'March 5, 2024',
      readTime: '6 min read',
      category: 'Content Marketing'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 24 },
    { name: 'SEO', count: 8 },
    { name: 'PPC', count: 6 },
    { name: 'Social Media', count: 5 },
    { name: 'Content Marketing', count: 4 },
    { name: 'Analytics', count: 3 }
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
                <BookOpen className="h-4 w-4 text-orange-400 mr-2 animate-bounce-slow" />
                <span className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>Expert insights and strategies</span>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-in-up" delay={400}>
              <h1 className={`text-3xl sm:text-4xl font-bold mb-3 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Marketing insights that drive growth
              </h1>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fade-in-up" delay={600}>
              <p className={`text-base max-w-2xl mx-auto transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Expert insights, proven strategies, and the latest trends in digital marketing to help your business grow.
              </p>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Blog Stats */}
      <section className={`py-12 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-black to-gray-900/50' 
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: TrendingUp, title: 'Weekly Updates', desc: 'Fresh insights every week' },
              { icon: Lightbulb, title: 'Actionable Tips', desc: 'Strategies you can implement today' },
              { icon: User, title: 'Expert Authors', desc: 'Written by industry professionals' }
            ].map((item, index) => (
              <AnimationWrapper key={index} animation="scale-in" delay={index * 100}>
                <div className={`backdrop-blur-sm border rounded-xl p-4 text-center card-hover hover-lift ${
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

      {/* Featured Post */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-white/5' : 'bg-gray-100/50'
      }`}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimationWrapper animation="fade-in-up">
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Featured Article</h2>
              <p className={`text-sm transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>Our most popular and impactful content</p>
            </div>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fade-in-up" delay={200}>
            <div className={`backdrop-blur-sm border rounded-2xl overflow-hidden hover:border-orange-400/50 transition-all duration-500 hover:-translate-y-1 card-hover hover-lift ${
              theme === 'dark' 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/80 border-gray-200 hover:shadow-lg'
            }`}>
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-48 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover-scale transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full font-medium text-sm shadow-lg animate-pulse-slow">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <h3 className={`text-xl lg:text-2xl font-bold mb-3 leading-tight transition-colors duration-300 text-gradient-animate ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {featuredPost.title}
                  </h3>
                  
                  <p className={`mb-4 text-sm leading-relaxed transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center space-x-3 text-xs transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                    }`}>
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 transition-colors duration-200 group text-sm hover-lift">
                    Read the full article
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-black to-gray-900/50' 
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <AnimationWrapper animation="fade-in-left">
                <div className={`backdrop-blur-sm border rounded-xl p-4 sticky top-24 hover-lift ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-white/80 border-gray-200'
                }`}>
                  <h3 className={`text-base font-bold mb-4 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Browse by Topic</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className={`w-full flex items-center justify-between text-left hover:text-orange-400 transition-all duration-200 py-2 px-3 rounded-lg text-sm hover-lift animate-fade-in-left ${
                          theme === 'dark' 
                            ? 'text-gray-300 hover:bg-white/5' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                        <span>{category.name}</span>
                        <span className={`text-xs transition-colors duration-300 ${
                          theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                        }`}>({category.count})</span>
                      </button>
                    ))}
                  </div>
                </div>
              </AnimationWrapper>
            </div>
            
            {/* Posts Grid */}
            <div className="lg:w-3/4">
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <AnimationWrapper key={index} animation={index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'} delay={index * 100}>
                    <article className={`backdrop-blur-sm border rounded-xl overflow-hidden hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-1 group card-hover hover-lift ${
                      theme === 'dark' 
                        ? 'bg-white/5 border-white/10' 
                        : 'bg-white/80 border-gray-200 hover:shadow-lg'
                    }`}>
                      <div className="relative h-36">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-medium animate-pulse-slow">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className={`text-base font-bold mb-2 leading-tight group-hover:text-orange-400 transition-colors duration-200 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {post.title}
                        </h3>
                        
                        <p className={`mb-3 text-sm leading-relaxed transition-colors duration-300 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {post.excerpt}
                        </p>
                        
                        <div className={`flex items-center justify-between text-xs mb-3 transition-colors duration-300 ${
                          theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                        }`}>
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <User className="h-3 w-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{post.date}</span>
                            </div>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <button className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 transition-colors duration-200 group/btn text-sm hover-lift">
                          Read more
                          <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </button>
                      </div>
                    </article>
                  </AnimationWrapper>
                ))}
              </div>
              
              <AnimationWrapper animation="fade-in-up" delay={400}>
                <div className="text-center mt-8">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25 text-sm btn-animate hover-lift animate-glow">
                    Load more articles
                  </button>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
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
              Never miss an insight
            </h2>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fade-in-up" delay={200}>
            <p className={`text-base mb-8 leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Get the latest marketing strategies, industry trends, and growth tips delivered 
              straight to your inbox every week. Join 10,000+ marketers who trust our insights.
            </p>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fade-in-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm focus-ring hover-lift ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10 text-white placeholder-gray-500' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
              />
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg shadow-orange-500/25 text-sm btn-animate hover-lift animate-glow">
                Subscribe now
                <ArrowRight className="ml-2 h-3 w-3" />
              </button>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Blog;