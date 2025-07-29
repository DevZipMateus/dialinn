import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const GalleryHighlight = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Imagens em destaque da galeria - expandida com mais imagens
  const galleryImages = [
    {
      id: 1,
      src: '/lovable-uploads/galeria/595012070155187.jpeg',
      title: 'Vestido Elegante Rosa',
      description: 'Elegância e sofisticação'
    },
    {
      id: 2,
      src: '/lovable-uploads/galeria/611830828639877.jpeg',
      title: 'Conjunto Executivo',
      description: 'Para a mulher moderna'
    },
    {
      id: 3,
      src: '/lovable-uploads/galeria/656056254173424.jpeg',
      title: 'Blusa Social Premium',
      description: 'Detalhes únicos'
    },
    {
      id: 4,
      src: '/lovable-uploads/galeria/673514409065395.jpeg',
      title: 'Vestido Festa Dourado',
      description: 'Para eventos especiais'
    },
    {
      id: 5,
      src: '/lovable-uploads/galeria/683387854776260.jpeg',
      title: 'Calça Alfaiataria',
      description: 'Cintura alta elegante'
    },
    {
      id: 6,
      src: '/lovable-uploads/galeria/703869159331200.jpeg',
      title: 'Saia Midi Elegante',
      description: 'Caimento perfeito'
    },
    {
      id: 7,
      src: '/lovable-uploads/galeria/711996638497079.jpeg',
      title: 'Look Casual Chique',
      description: 'Conforto e estilo'
    },
    {
      id: 8,
      src: '/lovable-uploads/galeria/722563677357129.jpeg',
      title: 'Conjunto Sofisticado',
      description: 'Versatilidade única'
    },
    {
      id: 9,
      src: '/lovable-uploads/galeria/725605296929145.jpeg',
      title: 'Peça Statement',
      description: 'Destaque garantido'
    },
    {
      id: 10,
      src: '/lovable-uploads/galeria/727078570122692.jpeg',
      title: 'Look Contemporâneo',
      description: 'Tendência atual'
    },
    {
      id: 11,
      src: '/lovable-uploads/galeria/739245238702349.jpeg',
      title: 'Estilo Minimalista',
      description: 'Menos é mais'
    },
    {
      id: 12,
      src: '/lovable-uploads/galeria/740202325265066.jpeg',
      title: 'Conjunto Premium',
      description: 'Qualidade superior'
    },
    {
      id: 13,
      src: '/lovable-uploads/galeria/744764928137543.jpeg',
      title: 'Look Festa',
      description: 'Brilho e glamour'
    },
    {
      id: 14,
      src: '/lovable-uploads/galeria/749625090785807.jpeg',
      title: 'Peça Exclusiva',
      description: 'Design único'
    },
    {
      id: 15,
      src: '/lovable-uploads/galeria/753423803847560.jpeg',
      title: 'Conjunto Moderno',
      description: 'Inovação em moda'
    }
  ];

  // Auto-rotate carousel every 4 seconds (increased due to more images)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(
      currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gold-50 to-gold-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4">
              Nossa <span className="text-gradient">Galeria</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Descubra nossa coleção exclusiva de peças elegantes, 
              criadas especialmente para realçar sua beleza única.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Main Image Display */}
            <div className="relative aspect-[3/2] md:aspect-[4/3] lg:aspect-[5/3] overflow-hidden rounded-2xl shadow-2xl mb-8">
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].title}
                className="w-full h-full object-contain bg-gray-50 transition-all duration-700 ease-in-out"
              />
              
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold mb-2">
                  {galleryImages[currentImageIndex].title}
                </h3>
                <p className="text-lg md:text-xl text-gray-200">
                  {galleryImages[currentImageIndex].description}
                </p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Thumbnail Navigation - Scrollable */}
            <div className="mb-8">
              <div className="flex gap-2 md:gap-3 overflow-x-auto pb-4 scrollbar-hide justify-center">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => goToImage(index)}
                    className={`relative flex-shrink-0 overflow-hidden rounded-lg transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'ring-4 ring-gold-500 scale-110'
                        : 'hover:scale-105 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() => navigate('/galeria')}
                className="inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Eye className="w-6 h-6" />
                Ver Galeria Completa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHighlight;
