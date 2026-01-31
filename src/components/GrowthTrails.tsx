import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

// ============================================
// CURVE TYPE DEFINITIONS
// ============================================

interface CurveType {
  name: string;
  k: number;
  x0: number;
  growthRate: number;
  color: {
    start: string;
    mid: string;
    end: string;
  };
  weight: number;
}

// Dark Mode Colors (existing)
const DARK_CURVE_TYPES: Record<string, CurveType> = {
  slowBurn: {
    name: 'Slow Burn',
    k: 6,
    x0: 0.3,
    growthRate: 4,
    color: {
      start: '#8B5CF6', // Violet
      mid: '#EC4899',   // Pink
      end: '#F59E0B'    // Orange
    },
    weight: 0.2
  },
  fastMover: {
    name: 'Fast Mover',
    k: 10,
    x0: 0.2,
    growthRate: 2.5,
    color: {
      start: '#3B82F6', // Blue
      mid: '#8B5CF6',   // Violet
      end: '#EC4899'    // Pink
    },
    weight: 0.2
  },
  balanced: {
    name: 'Balanced',
    k: 8,
    x0: 0.25,
    growthRate: 3,
    color: {
      start: '#8B5CF6', // Violet
      mid: '#F59E0B',   // Orange
      end: '#FFFFFF'    // White
    },
    weight: 0.6
  }
};

// Light Mode Colors (higher contrast, deeper saturation)
const LIGHT_CURVE_TYPES: Record<string, CurveType> = {
  slowBurn: {
    name: 'Slow Burn',
    k: 6,
    x0: 0.3,
    growthRate: 4,
    color: {
      start: '#7C3AED', // Deeper Violet
      mid: '#DB2777',   // Deeper Pink
      end: '#EA580C'    // Deeper Orange
    },
    weight: 0.2
  },
  fastMover: {
    name: 'Fast Mover',
    k: 10,
    x0: 0.2,
    growthRate: 2.5,
    color: {
      start: '#2563EB', // Deeper Blue
      mid: '#7C3AED',   // Deeper Violet
      end: '#DB2777'    // Deeper Pink
    },
    weight: 0.2
  },
  balanced: {
    name: 'Balanced',
    k: 8,
    x0: 0.25,
    growthRate: 3,
    color: {
      start: '#7C3AED', // Deeper Violet
      mid: '#EA580C',   // Deeper Orange
      end: '#1E293B'    // Dark slate (instead of white)
    },
    weight: 0.6
  }
};

interface GrowthTrail {
  id: number;
  type: CurveType;
  startY: number;
  progress: number;
  duration: number;
  startTime: number;
  sparkTriggered: boolean;
  sparkData: { x: number; y: number; startTime: number } | null;
  opacity: number;
  isAccelerated: boolean;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 255, g: 255, b: 255 };
}

function lerpColor(color1: string, color2: string, t: number): string {
  const c1 = hexToRgb(color1);
  const c2 = hexToRgb(color2);
  const r = Math.round(c1.r + (c2.r - c1.r) * t);
  const g = Math.round(c1.g + (c2.g - c1.g) * t);
  const b = Math.round(c1.b + (c2.b - c1.b) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

function selectCurveType(curveTypes: Record<string, CurveType>): CurveType {
  const rand = Math.random();
  let cumulative = 0;
  
  for (const type of Object.values(curveTypes)) {
    cumulative += type.weight;
    if (rand < cumulative) {
      return type;
    }
  }
  
  return curveTypes.balanced;
}

// ============================================
// GROWTH TRAJECTORY FUNCTION
// ============================================

function growthTrajectory(x: number, curveType: CurveType): number {
  const L = 0.5;
  const k = curveType.k;
  const x0 = curveType.x0;
  
  const yAtInflection = L / (1 + Math.exp(-k * (0.5 - x0)));
  
  if (x < 0.5) {
    return L / (1 + Math.exp(-k * (x - x0)));
  } else {
    const t = (x - 0.5) / 0.5;
    const growthRate = curveType.growthRate;
    const remaining = 1 - yAtInflection;
    return yAtInflection + remaining * 
           (Math.exp(growthRate * t) - 1) / 
           (Math.exp(growthRate) - 1);
  }
}

function getGradientColor(x: number, curveType: CurveType): string {
  const colors = curveType.color;
  
  if (x < 0.5) {
    return lerpColor(colors.start, colors.mid, x / 0.5);
  } else {
    return lerpColor(colors.mid, colors.end, (x - 0.5) / 0.5);
  }
}

// ============================================
// COMPONENT
// ============================================

const GrowthTrails: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailsRef = useRef<GrowthTrail[]>([]);
  const nextIdRef = useRef(0);
  const lastSpawnRef = useRef(0);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isDark = resolvedTheme === 'dark';
    const CURVE_TYPES = isDark ? DARK_CURVE_TYPES : LIGHT_CURVE_TYPES;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let width = 0;
    let height = 0;

    // Clear existing trails on theme change
    trailsRef.current = [];
    nextIdRef.current = 0;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // ============================================
    // STARBURST SPARK
    // ============================================
    
    const drawStarburst = (
      x: number, 
      y: number, 
      progress: number,
      color: string
    ) => {
      const isMobile = width < 768;
      const rays = isMobile ? 8 : 10;
      const maxSize = isMobile ? 8 : 14;
      const glowSize = isMobile ? 8 : 15;
      const particleBaseDistance = isMobile ? 6 : 10;
      const particleMaxDistance = isMobile ? 15 : 25;
      const particleBaseSize = isMobile ? 1.2 : 2;
      
      let scale: number, opacity: number;
      if (progress < 0.2) {
        scale = progress / 0.2;
        opacity = 1;
      } else if (progress < 0.4) {
        scale = 1;
        opacity = 1;
      } else {
        scale = 1;
        opacity = 1 - ((progress - 0.4) / 0.6);
      }

      const innerRadius = (isMobile ? 2.5 : 4) * scale;
      const outerRadius = maxSize * scale;

      ctx.save();
      ctx.globalAlpha = opacity;

      // Spark color based on theme
      const sparkColor = isDark ? '#F59E0B' : '#EA580C';
      ctx.shadowBlur = glowSize * scale;
      ctx.shadowColor = sparkColor;

      ctx.beginPath();
      for (let i = 0; i < rays * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (Math.PI * 2 * i) / (rays * 2) - Math.PI / 2;
        const rayX = x + Math.cos(angle) * radius;
        const rayY = y + Math.sin(angle) * radius;
        
        if (i === 0) {
          ctx.moveTo(rayX, rayY);
        } else {
          ctx.lineTo(rayX, rayY);
        }
      }
      ctx.closePath();

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, outerRadius);
      gradient.addColorStop(0, isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.9)');
      gradient.addColorStop(0.3, sparkColor);
      gradient.addColorStop(1, color);

      ctx.fillStyle = gradient;
      ctx.fill();

      if (progress > 0.1 && progress < 0.7) {
        const particleProgress = (progress - 0.1) / 0.6;
        const particleCount = isMobile ? 3 : 5;
        
        for (let i = 0; i < particleCount; i++) {
          const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.3;
          const distance = particleBaseDistance + particleProgress * particleMaxDistance;
          const particleX = x + Math.cos(angle) * distance;
          const particleY = y + Math.sin(angle) * distance;
          const particleOpacity = opacity * (1 - particleProgress);
          const particleSize = particleBaseSize * (1 - particleProgress * 0.5);

          ctx.globalAlpha = particleOpacity;
          ctx.fillStyle = sparkColor;
          ctx.beginPath();
          ctx.arc(particleX, particleY, particleSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();
    };

    // ============================================
    // SPAWN TRAJECTORY
    // ============================================

    const spawnTrail = (timestamp: number) => {
      const trail: GrowthTrail = {
        id: nextIdRef.current++,
        type: selectCurveType(CURVE_TYPES),
        startY: 0.3 + Math.random() * 0.4,
        progress: 0,
        duration: 7000 + Math.random() * 2000,
        startTime: timestamp,
        sparkTriggered: false,
        sparkData: null,
        // Light mode: slightly higher opacity for visibility
        opacity: isDark ? (0.3 + Math.random() * 0.3) : (0.4 + Math.random() * 0.35),
        isAccelerated: false,
      };
      trailsRef.current.push(trail);
    };

    const now = performance.now();
    const isMobileInit = window.innerWidth < 768;
    const initialCount = isMobileInit ? 2 : 3;
    for (let i = 0; i < initialCount; i++) {
      spawnTrail(now - Math.random() * 4000);
    }
    lastSpawnRef.current = now;

    // ============================================
    // ANIMATION LOOP
    // ============================================

    let animationId: number;

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, width, height);

      const isMobile = width < 768;
      const spawnInterval = isMobile ? 5000 + Math.random() * 2000 : 4000 + Math.random() * 2000;
      const maxTrails = isMobile ? 3 : 4;
      
      if (timestamp - lastSpawnRef.current > spawnInterval) {
        if (trailsRef.current.length < maxTrails) {
          spawnTrail(timestamp);
        }
        lastSpawnRef.current = timestamp;
      }

      trailsRef.current = trailsRef.current.filter((trail) => {
        const elapsed = timestamp - trail.startTime;
        const duration = trail.isAccelerated ? trail.duration * 0.5 : trail.duration;
        trail.progress = Math.min(elapsed / duration, 1);

        const sparkTriggerPoint = 0.6;
        if (trail.progress >= sparkTriggerPoint && !trail.sparkTriggered) {
          trail.sparkTriggered = true;
          const x = sparkTriggerPoint;
          const y = growthTrajectory(x, trail.type);
          trail.sparkData = {
            x: x * width,
            y: (1 - y) * height * 0.6 + trail.startY * height * 0.4,
            startTime: timestamp
          };
        }

        const fadeStart = 0.75;
        let currentOpacity = trail.opacity;
        if (trail.progress > fadeStart) {
          currentOpacity = trail.opacity * (1 - (trail.progress - fadeStart) / (1 - fadeStart));
        }

        if (currentOpacity <= 0.01 || trail.progress >= 1) {
          return false;
        }

        // ============================================
        // DRAW TRAJECTORY WITH GRADIENT
        // ============================================

        const trailLength = 0.25;
        const segments = 80;

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        let prevX = 0, prevY = 0;

        for (let i = 0; i <= segments; i++) {
          const t = trail.progress - (trailLength * i) / segments;
          if (t < 0) continue;
          if (t > trail.progress) continue;

          const curveY = growthTrajectory(t, trail.type);
          const x = t;
          const y = (1 - curveY) * 0.6 + trail.startY * 0.4;

          const screenX = x * width;
          const screenY = y * height;

          const trailFade = 1 - (i / segments);
          const segmentOpacity = currentOpacity * trailFade;

          if (i === 0) {
            prevX = screenX;
            prevY = screenY;
            continue;
          }

          const color = getGradientColor(t, trail.type);

          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(screenX, screenY);
          ctx.strokeStyle = color;
          ctx.globalAlpha = segmentOpacity;
          // Slightly thicker lines in light mode for visibility
          ctx.lineWidth = isDark ? (2 * trailFade + 0.5) : (2.5 * trailFade + 0.75);
          ctx.stroke();

          prevX = screenX;
          prevY = screenY;
        }

        ctx.globalAlpha = 1;

        // ============================================
        // DRAW SPARK IF ACTIVE
        // ============================================

        if (trail.sparkData) {
          const sparkElapsed = timestamp - trail.sparkData.startTime;
          const sparkDuration = 600;
          const sparkProgress = Math.min(sparkElapsed / sparkDuration, 1);

          if (sparkProgress < 1) {
            const midColor = trail.type.color.mid;
            drawStarburst(
              trail.sparkData.x,
              trail.sparkData.y,
              sparkProgress,
              midColor
            );
          }
        }

        return true;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // ============================================
    // CLICK INTERACTION
    // ============================================

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      trailsRef.current.forEach((trail) => {
        if (trail.isAccelerated || trail.progress >= 0.5) return;

        const t = clickX / width;
        if (t > trail.progress) return;

        const curveY = growthTrajectory(t, trail.type);
        const expectedY = ((1 - curveY) * 0.6 + trail.startY * 0.4) * height;
        const distance = Math.abs(clickY - expectedY);

        if (distance < 30) {
          trail.isAccelerated = true;
          trail.sparkTriggered = true;
          trail.sparkData = {
            x: clickX,
            y: clickY,
            startTime: performance.now()
          };
        }
      });
    };

    canvas.addEventListener('click', handleClick);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let onCurve = false;
      trailsRef.current.forEach((trail) => {
        if (trail.isAccelerated || trail.progress >= 0.5) return;

        const t = mouseX / width;
        if (t > trail.progress) return;

        const curveY = growthTrajectory(t, trail.type);
        const expectedY = ((1 - curveY) * 0.6 + trail.startY * 0.4) * height;
        const distance = Math.abs(mouseY - expectedY);

        if (distance < 30) {
          onCurve = true;
        }
      });

      canvas.style.cursor = onCurve ? 'pointer' : 'default';
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 1 }}
    />
  );
};

export default GrowthTrails;
