
import React from 'react';

const FeaturedCollection = () => {
  const products = [
    {
      id: 1,
      name: 'CONCRETE HOODIE',
      price: 'R$ 299',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2070&auto=format&fit=crop',
      category: 'HOODIES'
    },
    {
      id: 2,
      name: 'STREET KING TEE',
      price: 'R$ 149',
      image: '/lovable-uploads/9c762b1b-358b-4424-a27a-23afe414ae1e.png',
      category: 'CAMISETAS'
    },
    {
      id: 3,
      name: 'NEON JOGGERS',
      price: 'R$ 249',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2070&auto=format&fit=crop',
      category: 'CALÇAS'
    },
    {
      id: 4,
      name: 'URBAN BOMBER',
      price: 'R$ 399',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070&auto=format&fit=crop',
      category: 'JAQUETAS'
    },
    {
      id: 5,
      name: 'GRAFFITI CAP',
      price: 'R$ 89',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=2070&auto=format&fit=crop',
      category: 'ACESSÓRIOS'
    },
    {
      id: 6,
      name: 'MIDNIGHT SHORTS',
      price: 'R$ 179',
      image: '/lovable-uploads/9c762b1b-358b-4424-a27a-23afe414ae1e.png',
      category: 'SHORTS'
    }
  ];

  const handleWhatsAppClick = (productName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para o produto: ${productName}`);
    const whatsappNumber = "5511999999999"; // Número fictício
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="collection" className="py-12 sm:py-16 lg:py-20 bg-urban-concrete">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-orbitron font-black text-white mb-3 sm:mb-4 px-2">
            COLEÇÃO EM <span className="text-urban-neon">DESTAQUE</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-2xl mx-auto px-4">
            Peças exclusivas que definem o streetwear autêntico. Cada item conta uma história das ruas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group relative overflow-hidden bg-urban-black/50 rounded-lg transition-all duration-500 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-urban-black via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white">
                <p className="text-urban-neon text-xs sm:text-sm font-medium mb-1">{product.category}</p>
                <h3 className="text-sm sm:text-lg lg:text-xl font-bold mb-2 leading-tight">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-urban-electric">{product.price}</span>
                  <button 
                    onClick={() => handleWhatsAppClick(product.name)}
                    className="bg-urban-neon text-urban-black px-3 py-2 sm:px-4 font-bold text-xs sm:text-sm transition-all duration-300 hover:bg-urban-flame"
                  >
                    SOLICITAR ORÇAMENTO
                  </button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-urban-neon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
