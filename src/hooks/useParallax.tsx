import { useEffect, useState, useRef, RefObject } from 'react';

interface ParallaxOptions {
  speed?: number; // Parallax speed multiplier (default: 0.5)
  direction?: 'up' | 'down'; // Direction of parallax movement
  clamp?: boolean; // Whether to clamp values
}

interface ParallaxResult {
  ref: RefObject<HTMLElement>;
  offset: number;
  style: React.CSSProperties;
}

export const useParallax = (options: ParallaxOptions = {}): ParallaxResult => {
  const { speed = 0.5, direction = 'up', clamp = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the center of the viewport
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      
      // Calculate parallax offset
      let parallaxOffset = distanceFromCenter * speed * (direction === 'up' ? 1 : -1);
      
      // Clamp the offset to prevent extreme values
      if (clamp) {
        parallaxOffset = Math.max(-100, Math.min(100, parallaxOffset));
      }
      
      setOffset(parallaxOffset);
    };

    // Initial calculation
    handleScroll();

    // Add scroll listener with passive flag for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [speed, direction, clamp]);

  const style: React.CSSProperties = {
    transform: `translateY(${offset}px)`,
    willChange: 'transform',
  };

  return { ref, offset, style };
};

// Hook for multiple parallax layers
interface ParallaxLayerOptions {
  speeds: number[];
}

export const useParallaxLayers = (options: ParallaxLayerOptions) => {
  const { speeds } = options;
  const [offsets, setOffsets] = useState<number[]>(speeds.map(() => 0));
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;

      const newOffsets = speeds.map(speed => {
        const offset = distanceFromCenter * speed;
        return Math.max(-150, Math.min(150, offset));
      });

      setOffsets(newOffsets);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [speeds]);

  return { containerRef, offsets };
};

export default useParallax;
