import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  twinkleOffset: number;
  twinkleSpeed: number;
  color: string;
}

interface FloatingOrb {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  floatOffset: number;
  floatSpeed: number;
  color: string;
  vx: number;
  vy: number;
}

const TwinklingStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const orbsRef = useRef<FloatingOrb[]>([]);
  const animationRef = useRef<number>(0);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isDark = resolvedTheme === 'dark';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      
      if (isDark) {
        initStars();
      } else {
        initOrbs();
      }
    };

    // Dark Mode: Twinkling Stars
    const initStars = () => {
      const starCount = 45;
      const colors = ['#FFFFFF', '#8B5CF6', '#3B82F6'];
      const colorWeights = [0.7, 0.15, 0.15];

      starsRef.current = Array.from({ length: starCount }, () => {
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
          size: 1 + Math.random() * 2,
          baseOpacity: 0.3 + Math.random() * 0.5,
          twinkleOffset: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.0008 + Math.random() * 0.0012,
          color,
        };
      });
    };

    // Light Mode: Floating Gradient Orbs
    const initOrbs = () => {
      const orbCount = 20;
      // Soft pastel colors for light mode
      const colors = [
        'rgba(139, 92, 246, 0.15)',   // Soft Violet
        'rgba(236, 72, 153, 0.12)',   // Soft Pink
        'rgba(245, 158, 11, 0.1)',    // Soft Orange/Peach
        'rgba(59, 130, 246, 0.1)',    // Soft Blue
      ];

      orbsRef.current = Array.from({ length: orbCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 30 + Math.random() * 60, // Larger, softer orbs
        baseOpacity: 0.3 + Math.random() * 0.4,
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: 0.0003 + Math.random() * 0.0005, // Slow, gentle movement
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const animateDark = (time: number) => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      starsRef.current.forEach((star) => {
        const twinkle = prefersReducedMotion 
          ? 0 
          : Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.25;
        const opacity = Math.max(0.1, Math.min(1, star.baseOpacity + twinkle));

        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = star.color;
        ctx.shadowBlur = star.size * 2;
        ctx.shadowColor = star.color;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animateDark);
    };

    const animateLight = (time: number) => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      orbsRef.current.forEach((orb) => {
        // Gentle floating motion
        const floatX = prefersReducedMotion 
          ? 0 
          : Math.sin(time * orb.floatSpeed + orb.floatOffset) * 20;
        const floatY = prefersReducedMotion 
          ? 0 
          : Math.cos(time * orb.floatSpeed * 0.7 + orb.floatOffset) * 15;
        
        // Subtle opacity pulsing
        const pulse = prefersReducedMotion 
          ? 0 
          : Math.sin(time * orb.floatSpeed * 1.5 + orb.floatOffset) * 0.15;
        const opacity = Math.max(0.1, Math.min(0.6, orb.baseOpacity + pulse));

        const x = orb.x + floatX;
        const y = orb.y + floatY;

        // Draw soft gradient orb
        ctx.save();
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, orb.size);
        gradient.addColorStop(0, orb.color.replace(/[\d.]+\)$/, `${opacity})`));
        gradient.addColorStop(0.5, orb.color.replace(/[\d.]+\)$/, `${opacity * 0.5})`));
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, orb.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animateLight);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    if (!prefersReducedMotion) {
      if (isDark) {
        animationRef.current = requestAnimationFrame(animateDark);
      } else {
        animationRef.current = requestAnimationFrame(animateLight);
      }
    } else {
      // Draw static version
      if (isDark) {
        animateDark(0);
      } else {
        animateLight(0);
      }
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [resolvedTheme]);

  const isDark = resolvedTheme === 'dark';

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: isDark ? 'screen' : 'multiply' }}
    />
  );
};

export default TwinklingStars;
