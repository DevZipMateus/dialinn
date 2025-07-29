
import { useEffect, useState } from 'react';
import { advancedImageCache } from '../utils/advancedImageCache';

interface PreloadStats {
  total: number;
  loaded: number;
  errors: number;
  isComplete: boolean;
}

export const useImagePreloader = (imageUrls: string[], enabled: boolean = true) => {
  const [stats, setStats] = useState<PreloadStats>({
    total: imageUrls.length,
    loaded: 0,
    errors: 0,
    isComplete: false
  });

  useEffect(() => {
    if (!enabled || imageUrls.length === 0) return;

    console.log(`🚀 Starting immediate preload of ${imageUrls.length} images...`);
    
    let loadedCount = 0;
    let errorCount = 0;

    // Preload all images immediately with maximum priority
    const preloadPromises = imageUrls.map(async (url, index) => {
      try {
        // Use maximum priority for immediate loading
        await advancedImageCache.getOptimizedImageUrl(url, 20 + index);
        loadedCount++;
        console.log(`✅ Preloaded image ${loadedCount}/${imageUrls.length}: ${url.split('/').pop()}`);
        
        setStats(prev => ({
          ...prev,
          loaded: loadedCount,
          isComplete: loadedCount + errorCount === imageUrls.length
        }));
      } catch (error) {
        errorCount++;
        console.log(`❌ Failed to preload image: ${url.split('/').pop()}`);
        
        setStats(prev => ({
          ...prev,
          errors: errorCount,
          isComplete: loadedCount + errorCount === imageUrls.length
        }));
      }
    });

    // Wait for all preloads to complete
    Promise.allSettled(preloadPromises).then(() => {
      console.log(`🎉 Preload complete! Loaded: ${loadedCount}, Errors: ${errorCount}`);
      setStats(prev => ({ ...prev, isComplete: true }));
    });

  }, [imageUrls, enabled]);

  return stats;
};
