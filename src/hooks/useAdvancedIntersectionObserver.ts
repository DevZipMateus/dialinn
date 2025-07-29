
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

  // More aggressive preload distances
  const networkSettings = networkAware.getOptimalSettings();
  const effectiveRootMargin = rootMargin || `${preloadDistance || networkSettings.preloadDistance * 2}px`;

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

    // Much larger preload margin for aggressive loading
    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        setIsNearViewport(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: `${(preloadDistance || networkSettings.preloadDistance) * 4}px`,
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
  const shouldPreload = isNearViewport; // Always preload if near viewport

  const getPriority = useCallback(() => {
    if (isIntersecting) return priority + 5; // Higher boost for visible items
    if (isNearViewport) return priority + 3; // Higher boost for near items
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
