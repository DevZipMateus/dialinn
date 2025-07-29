
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: '@streetking.sp',
      text: 'URBNSZN entende o que é autenticidade. Cada peça conta uma história real.',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 2,
      name: '@graffitigirl',
      text: 'Finalmente uma marca que representa nossa cultura de verdade. Respect!',
      image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 3,
      name: '@skateboard.vibes',
      text: 'Qualidade top, style único. URBNSZN é referência no streetwear nacional.',
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2070&auto=format&fit=crop',
      likes: '1,234'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2070&auto=format&fit=crop',
      likes: '2,156'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2070&auto=format&fit=crop',
      likes: '987'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070&auto=format&fit=crop',
      likes: '3,421'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-urban-concrete">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-orbitron font-black text-white mb-3 sm:mb-4 px-2">
            O QUE A <span className="text-urban-neon">COMUNIDADE</span> FALA
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg px-4">
            Vozes autênticas das ruas que vestem nossa atitude.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="glass-effect p-4 sm:p-6 rounded-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-urban-neon/20 flex items-center justify-center mr-3">
                  <span className="text-urban-neon font-bold text-sm sm:text-base">@</span>
                </div>
                <span className="text-urban-neon font-medium text-sm sm:text-base">{testimonial.name}</span>
              </div>
              <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Instagram Feed */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-orbitron font-black text-white mb-3 sm:mb-4 px-2">
            #<span className="text-urban-flame">URBNSZNSTYLE</span>
          </h3>
          <p className="text-gray-400 text-sm sm:text-base px-4">
            Compartilhe seu look e marque @urbnszn para aparecer aqui!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
          {instagramPosts.map((post, index) => (
            <div 
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-urban-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-lg sm:text-2xl mb-1 sm:mb-2">❤️</div>
                  <div className="font-bold text-sm sm:text-base">{post.likes}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
