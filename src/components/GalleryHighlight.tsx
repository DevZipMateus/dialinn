
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Eye } from 'lucide-react';
import GalleryImage from './GalleryImage';

const GalleryHighlight = () => {
  const featuredImages = [
    '/lovable-uploads/galeria/1002512835154927.jpeg',
    '/lovable-uploads/galeria/1038066235160988.jpeg',
    '/lovable-uploads/galeria/1049792647143677.jpeg',
    '/lovable-uploads/galeria/1056777893278555.jpeg',
    '/lovable-uploads/galeria/1089543675937845.jpeg',
    '/lovable-uploads/galeria/1093633756076567.jpeg'
  ];

  return (
    <section id="galeria-destaque" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-gold-600" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900">
              Nossa <span className="text-gold-600">Galeria</span>
            </h2>
            <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-gold-600" />
          </div>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Conheça alguns dos nossos trabalhos mais marcantes e veja como transformamos sonhos em realidade
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {featuredImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <GalleryImage
                src={image}
                alt={`Trabalho em destaque ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm font-medium">Ver detalhes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 max-w-2xl mx-auto border border-gold-200">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-4">
              Explore Nossa Galeria Completa
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              Descubra centenas de trabalhos únicos e encontre a inspiração perfeita para seu próximo projeto
            </p>
            
            <Link
              to="/galeria"
              className="inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Camera className="w-5 h-5" />
              Ver Galeria Completa
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHighlight;
