import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'VP of Marketing, Waverio',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      content: 'Trendzeta\'s AI completely transformed our marketing ROI. We saw a 340% increase in qualified leads within the first quarter.',
      rating: 5,
      company: 'Waverio'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Growth Director, Loopscale',
      image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg',
      content: 'The predictive analytics helped us identify high-value customers before our competitors. Game-changing technology.',
      rating: 5,
      company: 'Loopscale'
    },
    {
      name: 'Emily Watson',
      title: 'CMO, Attentione',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      content: 'Finally, a marketing platform that actually understands our business. The AI insights are incredibly accurate.',
      rating: 5,
      company: 'Attentione'
    }
  ];

  const companies = [
    { name: 'Waverio', logo: '🌊' },
    { name: 'Loopscale', logo: '🔄' },
    { name: 'Attentione', logo: '👁️' },
    { name: 'Incanto', logo: '✨' }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-8">
            <span className="text-sm font-medium text-violet-400">Customer Success Stories</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Loved by Marketing Teams
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Around the World
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Join thousands of marketing professionals who've transformed their results with our AI platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-slate-700/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-indigo-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
              
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-violet-400 mb-6 opacity-50" />
              
              <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-slate-700"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Company Logos */}
        <div className="text-center">
          <p className="text-slate-400 mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center space-x-3 text-slate-400 hover:text-slate-300 transition-colors duration-200">
                <span className="text-2xl">{company.logo}</span>
                <span className="font-semibold">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;