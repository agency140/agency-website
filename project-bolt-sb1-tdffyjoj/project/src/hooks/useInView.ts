import { useState, useEffect, useRef, useCallback } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView({ 
  threshold = 0.1, 
  rootMargin = '0px',
  triggerOnce = true 
}: UseInViewOptions = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver>();

  const callback = useCallback(([entry]: IntersectionObserverEntry[]) => {
    const inView = entry.isIntersecting;
    setIsInView(inView);
    
    if (inView && triggerOnce && observerRef.current && ref.current) {
      observerRef.current.unobserve(ref.current);
    }
  }, [triggerOnce]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(callback, {
      threshold,
      rootMargin
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [callback, threshold, rootMargin]);

  return { ref, isInView };
}