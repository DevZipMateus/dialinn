
import React, { useState, useEffect, useCallback, memo } from 'react';
import { Play } from 'lucide-react';
import OptimizedVideoItem from './OptimizedVideoItem';

const OptimizedVideoCarousel = memo(() => {
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

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance with debouncing
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => 
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearInterval(interval);
  }, [videos.length, isAutoPlaying]);

  const handleVideoClick = useCallback((index: number) => {
    setCurrentVideoIndex(index);
    setIsAutoPlaying(false);
    
    // Resume auto-play after 30 seconds
    setTimeout(() => setIsAutoPlaying(true), 30000);
  }, []);

  const handlePrevious = useCallback(() => {
    setCurrentVideoIndex(prev => prev === 0 ? videos.length - 1 : prev - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 30000);
  }, [videos.length]);

  const handleNext = useCallback(() => {
    setCurrentVideoIndex(prev => prev === videos.length - 1 ? 0 : prev + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 30000);
  }, [videos.length]);

  // Get 5 videos to display with enhanced preload logic
  const getVisibleVideos = useCallback(() => {
    const visibleVideos = [];
    for (let i = -2; i <= 2; i++) {
      let index = currentVideoIndex + i;
      if (index < 0) index = videos.length + index;
      if (index >= videos.length) index = index - videos.length;
      
      visibleVideos.push({ 
        video: videos[index], 
        originalIndex: index, 
        position: i
      });
    }
    return visibleVideos;
  }, [currentVideoIndex, videos]);

  const visibleVideos = getVisibleVideos();

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
            {visibleVideos.map(({ video, originalIndex, position }) => (
              <OptimizedVideoItem
                key={`${originalIndex}-${position}`}
                video={video}
                isMain={position === 0}
                onClick={() => handleVideoClick(originalIndex)}
                priority={position === 0 ? 10 : Math.max(8 - Math.abs(position), 3)}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={handlePrevious}
              className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Play className="w-6 h-6 rotate-180 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Play className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Video Counter */}
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 text-sm text-gray-700 shadow-lg">
              Vídeo {currentVideoIndex + 1} de {videos.length} em destaque
              {!isAutoPlaying && (
                <span className="ml-2 text-gold-600">• Pausado</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

OptimizedVideoCarousel.displayName = 'OptimizedVideoCarousel';

export default OptimizedVideoCarousel;
