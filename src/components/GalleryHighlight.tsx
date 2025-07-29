
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const GalleryHighlight = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Imagens em destaque da galeria
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
    }
  ];

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

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
            <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl mb-8">
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].title}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
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

              {/* Auto-rotation indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm">Auto</span>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-2 md:gap-4 mb-8">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => goToImage(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'ring-4 ring-gold-500 scale-110'
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-16 h-12 md:w-20 md:h-16 lg:w-24 lg:h-18 object-cover"
                  />
                </button>
              ))}
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
