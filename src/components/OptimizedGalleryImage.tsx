import React, { useState, useEffect, memo } from 'react';
import { useAdvancedIntersectionObserver } from '../hooks/useAdvancedIntersectionObserver';
import { advancedImageCache } from '../utils/advancedImageCache';
import { performanceMonitor } from '../utils/performanceMonitor';
import { Skeleton } from './ui/skeleton';

interface OptimizedGalleryImageProps {
  src: string;
  alt: string;
  className?: string;
  onError?: () => void;
  priority?: number;
  sizes?: string;
}

const OptimizedGalleryImage = memo<OptimizedGalleryImageProps>(({
  src,
  alt,
  className = '',
  onError,
  priority = 5,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [loadStartTime, setLoadStartTime] = useState<number>(0);
  
  const { 
    elementRef, 
    shouldLoad, 
    shouldPreload,
    priority: dynamicPriority 
  } = useAdvancedIntersectionObserver({
    threshold: 0.01, // Even more aggressive threshold
    triggerOnce: true,
    priority,
    preloadDistance: 1200 // Larger preload distance
  });

  useEffect(() => {
    // Check if image is already cached first
    const cacheStats = advancedImageCache.getCacheStats();
    if (cacheStats.loaded > 0) {
      // Image might already be preloaded, try to load immediately
      let isMounted = true;
      setIsLoading(true);
      setHasError(false);
      setLoadStartTime(performance.now());

      const loadImage = async () => {
        try {
          console.log(`Loading cached/preloaded image ${src} with priority ${dynamicPriority}`);
          const workingUrl = await advancedImageCache.getOptimizedImageUrl(src, dynamicPriority);
          if (isMounted) {
            setCurrentSrc(workingUrl);
          }
        } catch (error) {
          console.log('OptimizedGalleryImage: Failed to load preloaded image:', src);
          if (isMounted) {
            setHasError(true);
            setCurrentSrc('/placeholder.svg');
            onError?.();
          }
        }
      };

      loadImage();
      return () => { isMounted = false; };
    }

    // Fallback to intersection observer behavior for non-preloaded images
    const shouldStartLoading = shouldLoad || shouldPreload || priority > 12;
    
    if (!shouldStartLoading) return;

    let isMounted = true;
    setIsLoading(true);
    setHasError(false);
    setLoadStartTime(performance.now());

    const loadImage = async () => {
      try {
        console.log(`Loading image ${src} with priority ${dynamicPriority}`);
        const workingUrl = await advancedImageCache.getOptimizedImageUrl(src, dynamicPriority);
        if (isMounted) {
          setCurrentSrc(workingUrl);
        }
      } catch (error) {
        console.log('OptimizedGalleryImage: Failed to load image:', src);
        if (isMounted) {
          setHasError(true);
          setCurrentSrc('/placeholder.svg');
          onError?.();
        }
      }
    };

    loadImage();

    return () => {
      isMounted = false;
    };
  }, [src, shouldLoad, shouldPreload, dynamicPriority, priority, onError]);

  const handleImageLoad = () => {
    const loadTime = performance.now() - loadStartTime;
    performanceMonitor.recordImageLoad(src, loadTime);
    console.log(`Image loaded successfully: ${src} in ${loadTime.toFixed(2)}ms`);
    setIsLoading(false);
  };

  const handleImageError = () => {
    const loadTime = performance.now() - loadStartTime;
    performanceMonitor.recordMetric('ImageLoadError', loadTime);
    console.log(`Image load error: ${src}`);
    setIsLoading(false);
    setHasError(true);
    setCurrentSrc('/placeholder.svg');
    onError?.();
  };

  return (
    <div ref={elementRef} className="relative w-full h-full">
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      
      {currentSrc && (
        <img
          src={currentSrc}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading={priority > 12 ? 'eager' : 'lazy'}
          sizes={sizes}
          decoding="async"
        />
      )}
      
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center text-gray-500 text-sm p-4">
          <div className="text-center">
            <div className="mb-2">🖼️</div>
            <div>Imagem não encontrada</div>
            <div className="text-xs mt-1 opacity-70">
              {src.split('/').pop()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

OptimizedGalleryImage.displayName = 'OptimizedGalleryImage';

export default OptimizedGalleryImage;
