
import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { useAdvancedIntersectionObserver } from '../hooks/useAdvancedIntersectionObserver';
import { videoQueue } from '../utils/videoLoadingQueue';
import { performanceMonitor } from '../utils/performanceMonitor';
import { networkAware } from '../utils/networkAware';

interface OptimizedVideoItemProps {
  video: string;
  isMain: boolean;
  onClick: () => void;
  priority?: number;
}

const OptimizedVideoItem = memo<OptimizedVideoItemProps>(({ 
  video, 
  isMain, 
  onClick, 
  priority = 5 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadStartTime, setLoadStartTime] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const { 
    elementRef, 
    shouldLoad, 
    shouldPreload,
    priority: dynamicPriority 
  } = useAdvancedIntersectionObserver({
    threshold: 0.1,
    priority: isMain ? priority + 5 : priority
  });

  const networkSettings = networkAware.getOptimalSettings();

  useEffect(() => {
    if ((!shouldLoad && !shouldPreload && !isMain) || !videoRef.current) return;

    setLoadStartTime(performance.now());
    
    videoQueue.addToQueue({
      url: video,
      element: videoRef.current,
      priority: isMain ? dynamicPriority + 5 : dynamicPriority,
      onLoad: () => {
        const loadTime = performance.now() - loadStartTime;
        performanceMonitor.recordVideoLoad(video, loadTime);
        setIsLoaded(true);
      },
      onError: () => {
        console.log('Video load failed:', video);
        performanceMonitor.recordMetric('VideoLoadError', performance.now() - loadStartTime);
      }
    });

    return () => {
      videoQueue.removeFromQueue(video);
    };
  }, [shouldLoad, shouldPreload, isMain, video, dynamicPriority, loadStartTime]);

  useEffect(() => {
    if (isMain && videoRef.current && isLoaded) {
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Error playing video:', error);
        }
      };
      playVideo();
    } else if (!isMain && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isMain, isLoaded]);

  const handleVideoClick = useCallback(() => {
    onClick();
  }, [onClick]);

  const getVideoQuality = () => {
    if (networkSettings.videoQuality === 'low') {
      return { width: '480', height: '360' };
    }
    if (networkSettings.videoQuality === 'medium') {
      return { width: '720', height: '540' };
    }
    return {}; // Original quality
  };

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
      {(shouldLoad || shouldPreload || isMain) && (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="none"
          {...getVideoQuality()}
        >
          <source src={video} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      )}
      
      {!isLoaded && (shouldLoad || shouldPreload || isMain) && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">
            {networkSettings.videoQuality === 'low' ? 'Carregando...' : 'Carregando vídeo...'}
          </div>
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
      
      {networkSettings.videoQuality === 'low' && (
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          Economia de dados
        </div>
      )}
    </div>
  );
});

OptimizedVideoItem.displayName = 'OptimizedVideoItem';

export default OptimizedVideoItem;
