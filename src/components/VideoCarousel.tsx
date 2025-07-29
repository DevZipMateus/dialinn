
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

          {/* Main Video Display */}
          <div className="mb-8">
            <video
              key={videos[currentVideoIndex]}
              className="rounded-2xl shadow-2xl w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videos[currentVideoIndex]} type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
          </div>

          {/* Video Thumbnails Carousel */}
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                  <div
                    className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentVideoIndex 
                        ? 'ring-4 ring-gold-500 scale-105' 
                        : 'hover:scale-105 hover:shadow-lg'
                    }`}
                    onClick={() => handleVideoClick(index)}
                  >
                    <video
                      className="w-full h-20 md:h-24 object-cover"
                      muted
                      playsInline
                      preload="metadata"
                    >
                      <source src={`${video}#t=1`} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Play className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                    {index === currentVideoIndex && (
                      <div className="absolute top-1 right-1 w-2 h-2 bg-gold-500 rounded-full"></div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Video Counter */}
          <div className="flex justify-center mt-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-gray-700">
              {currentVideoIndex + 1} de {videos.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
