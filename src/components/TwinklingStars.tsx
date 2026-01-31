import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  twinkleOffset: number;
  twinkleSpeed: number;
  color: string;
}

const TwinklingStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      
      // Reinitialize stars on resize
      initStars();
    };

    const initStars = () => {
      const starCount = 45; // 30-50 range
      const colors = ['#FFFFFF', '#8B5CF6', '#3B82F6']; // White, Violet, Blue
      const colorWeights = [0.7, 0.15, 0.15]; // 70% white, 15% violet, 15% blue

      starsRef.current = Array.from({ length: starCount }, () => {
        // Weighted color selection
        const rand = Math.random();
        let color = colors[0];
        let cumulative = 0;
        for (let i = 0; i < colorWeights.length; i++) {
          cumulative += colorWeights[i];
          if (rand < cumulative) {
            color = colors[i];
            break;
          }
        }

        return {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: 1 + Math.random() * 2, // 1-3px
          baseOpacity: 0.3 + Math.random() * 0.5, // 0.3-0.8
          twinkleOffset: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.0008 + Math.random() * 0.0012, // 2-4s cycle
          color,
        };
      });
    };

    const animate = (time: number) => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw stars
      starsRef.current.forEach((star) => {
        // Calculate twinkle opacity
        const twinkle = prefersReducedMotion 
          ? 0 
          : Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.25;
        const opacity = Math.max(0.1, Math.min(1, star.baseOpacity + twinkle));

        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = star.color;
        
        // Draw star with soft glow
        ctx.shadowBlur = star.size * 2;
        ctx.shadowColor = star.color;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    if (!prefersReducedMotion) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      // Draw static stars for reduced motion
      animate(0);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default TwinklingStars;
