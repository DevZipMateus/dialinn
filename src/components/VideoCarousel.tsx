
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Play } from 'lucide-react';

const VideoCarousel = () => {
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

  // Start with the first video as main
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Auto-advance carousel every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => 
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearInterval(interval);
  }, [videos.length]);

  const handleVideoClick = (index: number) => {
    setCurrentVideoIndex(index);
  };

  // Get 5 videos to display (2 before, main, 2 after)
  const getVisibleVideos = () => {
    const visibleVideos = [];
    for (let i = -2; i <= 2; i++) {
      let index = currentVideoIndex + i;
      if (index < 0) index = videos.length + index;
      if (index >= videos.length) index = index - videos.length;
      visibleVideos.push({ video: videos[index], originalIndex: index, position: i });
    }
    return visibleVideos;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gold-50 to-gold-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Vídeos da <span className="text-gradient">Coleção</span>
            </h2>
            <p className="text-lg text-gray-600">
              Veja nossas peças em movimento e descubra todos os detalhes
            </p>
          </div>

          {/* Videos Display - 5 videos with main one centered */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {getVisibleVideos().map(({ video, originalIndex, position }) => (
              <div
                key={`${originalIndex}-${position}`}
                className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 shadow-lg hover:shadow-2xl ${
                  position === 0
                    ? 'ring-4 ring-gold-500 scale-110 z-10 w-80 h-96 md:w-96 md:h-[32rem] lg:w-[28rem] lg:h-[36rem]' 
                    : 'hover:scale-105 opacity-70 hover:opacity-90 w-48 h-64 md:w-56 md:h-80 lg:w-64 lg:h-96'
                }`}
                onClick={() => handleVideoClick(originalIndex)}
              >
                <video
                  className="w-full h-full object-cover"
                  autoPlay={position === 0}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={video} type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Play className={`text-white ${position === 0 ? 'w-12 h-12' : 'w-8 h-8'}`} />
                </div>
                {position === 0 && (
                  <div className="absolute top-4 right-4 w-4 h-4 bg-gold-500 rounded-full animate-pulse"></div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setCurrentVideoIndex(currentVideoIndex === 0 ? videos.length - 1 : currentVideoIndex - 1)}
              className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Play className="w-6 h-6 rotate-180 text-gray-700" />
            </button>
            <button
              onClick={() => setCurrentVideoIndex(currentVideoIndex === videos.length - 1 ? 0 : currentVideoIndex + 1)}
              className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Play className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Video Counter */}
          <div className="flex justify-center">
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
