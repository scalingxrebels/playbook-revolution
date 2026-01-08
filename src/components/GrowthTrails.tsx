import React, { useEffect, useRef } from 'react';

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

const CURVE_TYPES: Record<string, CurveType> = {
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

function selectCurveType(): CurveType {
  const rand = Math.random();
  let cumulative = 0;
  
  for (const type of Object.values(CURVE_TYPES)) {
    cumulative += type.weight;
    if (rand < cumulative) {
      return type;
    }
  }
  
  return CURVE_TYPES.balanced;
}

// ============================================
// GROWTH TRAJECTORY FUNCTION
// ============================================

function growthTrajectory(x: number, curveType: CurveType): number {
  const L = 0.5;
  const k = curveType.k;
  const x0 = curveType.x0;
  
  // Calculate the y-value at inflection point (x=0.5) for continuity
  const yAtInflection = L / (1 + Math.exp(-k * (0.5 - x0)));
  
  if (x < 0.5) {
    // PHASE 1-2: Initial Growth + Plateau (Sigmoid)
    return L / (1 + Math.exp(-k * (x - x0)));
  } else {
    // PHASE 3-4: Hypergrowth (after spark/intervention)
    // Start exactly where the sigmoid left off (no jump!)
    const t = (x - 0.5) / 0.5; // 0 to 1 over second half
    const growthRate = curveType.growthRate;
    
    // Smooth exponential growth from inflection point to top
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let width = 0;
    let height = 0;

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
      progress: number, // 0-1 animation progress
      color: string
    ) => {
      // Smaller on mobile
      const isMobile = width < 768;
      const rays = isMobile ? 8 : 10;
      const maxSize = isMobile ? 8 : 14;
      const glowSize = isMobile ? 8 : 15;
      const particleBaseDistance = isMobile ? 6 : 10;
      const particleMaxDistance = isMobile ? 15 : 25;
      const particleBaseSize = isMobile ? 1.2 : 2;
      
      // Animation phases
      let scale: number, opacity: number;
      if (progress < 0.2) {
        // Scale up
        scale = progress / 0.2;
        opacity = 1;
      } else if (progress < 0.4) {
        // Hold
        scale = 1;
        opacity = 1;
      } else {
        // Fade out
        scale = 1;
        opacity = 1 - ((progress - 0.4) / 0.6);
      }

      const innerRadius = (isMobile ? 2.5 : 4) * scale;
      const outerRadius = maxSize * scale;

      ctx.save();
      ctx.globalAlpha = opacity;

      // Glow effect
      ctx.shadowBlur = glowSize * scale;
      ctx.shadowColor = '#F59E0B';

      // Draw starburst shape
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

      // Gradient fill
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, outerRadius);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(245, 158, 11, 1)');
      gradient.addColorStop(1, color);

      ctx.fillStyle = gradient;
      ctx.fill();

      // Particle burst
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
          ctx.fillStyle = '#F59E0B';
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
        type: selectCurveType(),
        startY: 0.3 + Math.random() * 0.4, // 30-70% height
        progress: 0,
        duration: 7000 + Math.random() * 2000, // 7-9s
        startTime: timestamp,
        sparkTriggered: false,
        sparkData: null,
        opacity: 0.3 + Math.random() * 0.3, // 0.3-0.6 (subtle)
        isAccelerated: false,
      };
      trailsRef.current.push(trail);
    };

    // Initial trails - fewer on mobile
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

      // Spawn new trajectories - less frequent (every 4-6s instead of 2-3.5s)
      const isMobile = width < 768;
      const spawnInterval = isMobile ? 5000 + Math.random() * 2000 : 4000 + Math.random() * 2000;
      const maxTrails = isMobile ? 3 : 4;
      
      if (timestamp - lastSpawnRef.current > spawnInterval) {
        if (trailsRef.current.length < maxTrails) {
          spawnTrail(timestamp);
        }
        lastSpawnRef.current = timestamp;
      }

      // Update and draw trails
      trailsRef.current = trailsRef.current.filter((trail) => {
        const elapsed = timestamp - trail.startTime;
        const duration = trail.isAccelerated ? trail.duration * 0.5 : trail.duration;
        trail.progress = Math.min(elapsed / duration, 1);

        // Trigger spark at 50%
        if (trail.progress >= 0.5 && !trail.sparkTriggered) {
          trail.sparkTriggered = true;
          // Calculate spark position
          const x = 0.5;
          const y = growthTrajectory(x, trail.type);
          trail.sparkData = {
            x: x * width,
            y: (1 - y) * height * 0.6 + trail.startY * height * 0.4,
            startTime: timestamp
          };
        }

        // Calculate fade opacity
        const fadeStart = 0.75;
        let currentOpacity = trail.opacity;
        if (trail.progress > fadeStart) {
          currentOpacity = trail.opacity * (1 - (trail.progress - fadeStart) / (1 - fadeStart));
        }

        // Remove if faded or complete
        if (currentOpacity <= 0.01 || trail.progress >= 1) {
          return false;
        }

        // ============================================
        // DRAW TRAJECTORY WITH GRADIENT
        // ============================================

        const trailLength = 0.25; // 25% chemtrail
        const segments = 80;

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        let prevX = 0, prevY = 0;

        for (let i = 0; i <= segments; i++) {
          const t = trail.progress - (trailLength * i) / segments;
          if (t < 0) continue;
          if (t > trail.progress) continue;

          // Calculate position on curve
          const curveY = growthTrajectory(t, trail.type);
          const x = t;
          const y = (1 - curveY) * 0.6 + trail.startY * 0.4;

          const screenX = x * width;
          const screenY = y * height;

          // Segment opacity (chemtrail fade)
          const trailFade = 1 - (i / segments);
          const segmentOpacity = currentOpacity * trailFade;

          if (i === 0) {
            prevX = screenX;
            prevY = screenY;
            continue;
          }

          // Get gradient color for this position
          const color = getGradientColor(t, trail.type);

          // Draw segment
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(screenX, screenY);
          ctx.strokeStyle = color;
          ctx.globalAlpha = segmentOpacity;
          ctx.lineWidth = 2 * trailFade + 0.5; // 0.5-2.5px
          ctx.stroke();

          prevX = screenX;
          prevY = screenY;
        }

        // Reset alpha
        ctx.globalAlpha = 1;

        // ============================================
        // DRAW SPARK IF ACTIVE
        // ============================================

        if (trail.sparkData) {
          const sparkElapsed = timestamp - trail.sparkData.startTime;
          const sparkDuration = 600; // 600ms
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
    // CLICK INTERACTION (Optional)
    // ============================================

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Check if click is near any trajectory
      trailsRef.current.forEach((trail) => {
        if (trail.isAccelerated || trail.progress >= 0.5) return;

        // Simple hit detection
        const t = clickX / width;
        if (t > trail.progress) return;

        const curveY = growthTrajectory(t, trail.type);
        const expectedY = ((1 - curveY) * 0.6 + trail.startY * 0.4) * height;
        const distance = Math.abs(clickY - expectedY);

        if (distance < 30) {
          // Accelerate this trajectory
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

    // Hover cursor
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 1 }}
    />
  );
};

export default GrowthTrails;
