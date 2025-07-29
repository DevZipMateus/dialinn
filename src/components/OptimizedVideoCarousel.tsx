
import React, { useState, useEffect, useCallback, memo } from 'react';
import { Play, Pause } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface VideoItemProps {
  video: string;
  isMain: boolean;
  onClick: () => void;
  shouldPreload: boolean;
}

const VideoItem = memo<VideoItemProps>(({ video, isMain, onClick, shouldPreload }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { elementRef, shouldLoad } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '200px',
  });

  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isMain && videoRef.current && isLoaded) {
      videoRef.current.play();
      setIsPlaying(true);
    } else if (!isMain && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isMain, isLoaded]);

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  const handleVideoClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <div
      ref={elementRef}
      className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 shadow-lg hover:shadow-2xl ${
        isMain
          ? 'ring-4 ring-gold-500 scale-110 z-10 w-80 h-96 md:w-96 md:h-[32rem] lg:w-[28rem] lg:h-[36rem]' 
          : 'hover:scale-105 opacity-70 hover:opacity-90 w-48 h-64 md:w-56 md:h-80 lg:w-64 lg:h-96'
      }`}
      onClick={handleVideoClick}
    >
      {(shouldLoad || shouldPreload) && (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          preload={shouldPreload ? "metadata" : "none"}
          onLoadedData={handleVideoLoad}
        >
          <source src={video} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      )}
      
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-gray-400 text-sm">Carregando vídeo...</div>
        </div>
      )}
      
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        {isPlaying ? (
          <Pause className={`text-white ${isMain ? 'w-12 h-12' : 'w-8 h-8'}`} />
        ) : (
          <Play className={`text-white ${isMain ? 'w-12 h-12' : 'w-8 h-8'}`} />
        )}
      </div>
      
      {isMain && (
        <div className="absolute top-4 right-4 w-4 h-4 bg-gold-500 rounded-full animate-pulse"></div>
      )}
    </div>
  );
});

VideoItem.displayName = 'VideoItem';

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

  // Get 5 videos to display (2 before, main, 2 after)
  const getVisibleVideos = useCallback(() => {
    const visibleVideos = [];
    for (let i = -2; i <= 2; i++) {
      let index = currentVideoIndex + i;
      if (index < 0) index = videos.length + index;
      if (index >= videos.length) index = index - videos.length;
      visibleVideos.push({ 
        video: videos[index], 
        originalIndex: index, 
        position: i,
        shouldPreload: Math.abs(i) <= 1 // Only preload adjacent videos
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
            {visibleVideos.map(({ video, originalIndex, position, shouldPreload }) => (
              <VideoItem
                key={`${originalIndex}-${position}`}
                video={video}
                isMain={position === 0}
                onClick={() => handleVideoClick(originalIndex)}
                shouldPreload={shouldPreload}
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
