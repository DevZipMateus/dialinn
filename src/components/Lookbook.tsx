import React from 'react';

const Lookbook = () => {
  const lookbookImages = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070&auto=format&fit=crop',
      title: 'CITY NIGHTS',
      description: 'Navegando pelas ruas com estilo'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=2070&auto=format&fit=crop',
      title: 'NEON VIBES',
      description: 'Energia urbana em cada peça'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2070&auto=format&fit=crop',
      title: 'CONCRETE JUNGLE',
      description: 'Sobrevivendo na selva de pedra'
    },
    {
      id: 4,
      image: '/lovable-uploads/046559f0-1539-4bf0-ba3a-7fef0a57e923.png',
      title: 'STREET CULTURE',
      description: 'Autenticidade em cada movimento'
    }
  ];

  return (
    <section id="lookbook" className="py-12 sm:py-16 lg:py-20 bg-urban-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-orbitron font-black text-white mb-3 sm:mb-4 px-2">
            LOOKBOOK <span className="text-urban-flame">URBNSZN</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-2xl mx-auto px-4">
            Veja como nossa comunidade veste a atitude nas ruas da cidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {lookbookImages.map((item, index) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-urban-black/90 via-urban-black/20 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-orbitron font-bold mb-2 text-urban-neon leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.description}
                </p>
              </div>

              {/* Neon border effect on hover */}
              <div className="absolute inset-0 neon-border opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lookbook;
