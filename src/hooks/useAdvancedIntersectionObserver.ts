
import { useEffect, useRef, useState, useCallback } from 'react';
import { networkAware } from '../utils/networkAware';

interface UseAdvancedIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  priority?: number;
  preloadDistance?: number;
}

export const useAdvancedIntersectionObserver = ({
  threshold = 0.1,
  rootMargin,
  triggerOnce = true,
  priority = 5,
  preloadDistance
}: UseAdvancedIntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Get network-aware settings
  const networkSettings = networkAware.getOptimalSettings();
  const effectiveRootMargin = rootMargin || `${preloadDistance || networkSettings.preloadDistance}px`;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsIntersecting(isVisible);
        
        if (isVisible && triggerOnce && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      {
        threshold,
        rootMargin: effectiveRootMargin,
      }
    );

    // Separate observer for preloading (larger margin)
    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        setIsNearViewport(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: `${(preloadDistance || networkSettings.preloadDistance) * 2}px`,
      }
    );

    observer.observe(element);
    preloadObserver.observe(element);

    return () => {
      observer.unobserve(element);
      preloadObserver.unobserve(element);
    };
  }, [threshold, effectiveRootMargin, triggerOnce, hasTriggered, preloadDistance, networkSettings.preloadDistance]);

  const shouldLoad = triggerOnce ? (hasTriggered || isIntersecting) : isIntersecting;
  const shouldPreload = isNearViewport && networkAware.shouldPreload();

  const getPriority = useCallback(() => {
    if (isIntersecting) return priority + 3; // Boost priority for visible items
    if (isNearViewport) return priority + 1; // Slight boost for near items
    return priority;
  }, [isIntersecting, isNearViewport, priority]);

  return { 
    elementRef, 
    isIntersecting, 
    shouldLoad, 
    shouldPreload,
    isNearViewport,
    priority: getPriority()
  };
};
