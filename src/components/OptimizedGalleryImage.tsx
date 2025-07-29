
import React, { useState, useEffect, memo } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { imageCache } from '../utils/imageCache';
import { Skeleton } from './ui/skeleton';

interface OptimizedGalleryImageProps {
  src: string;
  alt: string;
  className?: string;
  onError?: () => void;
  priority?: boolean;
}

const OptimizedGalleryImage = memo<OptimizedGalleryImageProps>(({
  src,
  alt,
  className = '',
  onError,
  priority = false
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const { elementRef, shouldLoad } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px',
    triggerOnce: true,
  });

  useEffect(() => {
    if (!shouldLoad && !priority) return;

    let isMounted = true;
    setIsLoading(true);
    setHasError(false);

    const loadImage = async () => {
      try {
        const workingUrl = await imageCache.getWorkingImageUrl(src);
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
  }, [src, shouldLoad, priority, onError]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
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
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading={priority ? 'eager' : 'lazy'}
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
