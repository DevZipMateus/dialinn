
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Play } from 'lucide-react';

const VideoCarousel = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    '/lovable-uploads/galeria/videos/1029023305970523.mp4',
    '/lovable-uploads/galeria/videos/1139953328164491.mp4',
    '/lovable-uploads/galeria/videos/1399891877911123.mp4',
    '/lovable-uploads/galeria/videos/1419548869339720.mp4',
    '/lovable-uploads/galeria/videos/1430024271580658.mp4',
    '/lovable-uploads/galeria/videos/1452998722681872.mp4',
    '/lovable-uploads/galeria/videos/1703096983725985.mp4',
    '/lovable-uploads/galeria/videos/1831044967477404.mp4',
    '/lovable-uploads/galeria/videos/2137234143422737.mp4',
    '/lovable-uploads/galeria/videos/2301264853638968.mp4',
    '/lovable-uploads/galeria/videos/24030058533352445.mp4',
    '/lovable-uploads/galeria/videos/24095100463432973.mp4',
    '/lovable-uploads/galeria/videos/4069381839944446.mp4',
    '/lovable-uploads/galeria/videos/4190196144583691.mp4',
    '/lovable-uploads/galeria/videos/4193952834219629.mp4',
    '/lovable-uploads/galeria/videos/601708066068335.mp4',
    '/lovable-uploads/galeria/videos/628304629834392.mp4',
    '/lovable-uploads/galeria/videos/642318378278370.mp4',
    '/lovable-uploads/galeria/videos/705607655679361.mp4',
    '/lovable-uploads/galeria/videos/718381661019706.mp4',
    '/lovable-uploads/galeria/videos/dia.mp4',
    '/lovable-uploads/galeria/videos/dialinn.mp4'
  ];

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => 
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [videos.length]);

  const handleVideoClick = (index: number) => {
    setCurrentVideoIndex(index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gold-50 to-gold-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Vídeos da <span className="text-gradient">Coleção</span>
            </h2>
            <p className="text-lg text-gray-600">
              Veja nossas peças em movimento e descubra todos os detalhes
            </p>
          </div>

          {/* Videos Carousel */}
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div
                    className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl ${
                      index === currentVideoIndex 
                        ? 'ring-4 ring-gold-500 scale-105' 
                        : 'hover:scale-105'
                    }`}
                    onClick={() => handleVideoClick(index)}
                  >
                    <video
                      className="w-full h-48 md:h-56 lg:h-64 object-cover"
                      autoPlay={index === currentVideoIndex}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    >
                      <source src={video} type="video/mp4" />
                      Seu navegador não suporta vídeos HTML5.
                    </video>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    {index === currentVideoIndex && (
                      <div className="absolute top-3 right-3 w-3 h-3 bg-gold-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>

          {/* Video Counter */}
          <div className="flex justify-center mt-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 text-sm text-gray-700 shadow-lg">
              Vídeo {currentVideoIndex + 1} de {videos.length} em destaque
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
