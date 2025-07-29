
import React, { useState, useEffect } from 'react';
import { findWorkingImagePath, normalizeImagePath } from '../utils/imageUtils';

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
  onError?: () => void;
  loading?: 'eager' | 'lazy';
}

const GalleryImage: React.FC<GalleryImageProps> = ({
  src,
  alt,
  className = '',
  onError,
  loading = 'lazy'
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 2;

  useEffect(() => {
    let isMounted = true;
    
    const loadImage = async () => {
      setIsLoading(true);
      setHasError(false);
      
      console.log('GalleryImage: Starting image load for:', src);
      
      // First try the normalized original path
      const normalizedPath = normalizeImagePath(src);
      setCurrentSrc(normalizedPath);
      
      // If that fails, we'll try alternatives in the onError handler
    };

    loadImage();
    
    return () => {
      isMounted = false;
    };
  }, [src]);

  const handleImageError = async () => {
    console.log(`GalleryImage: Error loading image ${currentSrc}, retry count: ${retryCount}`);
    
    if (retryCount < maxRetries) {
      setRetryCount(prev => prev + 1);
      
      // Try to find a working alternative path
      const workingPath = await findWorkingImagePath(src);
      
      if (workingPath && workingPath !== currentSrc) {
        console.log('GalleryImage: Trying alternative path:', workingPath);
        setCurrentSrc(workingPath);
        return;
      }
    }
    
    // All retries failed
    console.log('GalleryImage: All retries failed for:', src);
    setHasError(true);
    setIsLoading(false);
    setCurrentSrc('/placeholder.svg');
    onError?.();
  };

  const handleImageLoad = () => {
    console.log('GalleryImage: Successfully loaded:', currentSrc);
    setIsLoading(false);
    setHasError(false);
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Carregando...</div>
        </div>
      )}
      
      <img
        src={currentSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading={loading}
      />
      
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
};

export default GalleryImage;
