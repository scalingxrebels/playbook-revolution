import React, { useEffect, useRef } from 'react';

interface GrowthTrail {
  id: number;
  startX: number;
  startY: number;
  progress: number;
  speed: number;
  opacity: number;
  hue: number;
  thickness: number;
  inflectionPoint: number;
  sparkTriggered: boolean;
  sparkOpacity: number;
}

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

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Hockey-stick curve: slow start, plateau, then superlinear growth
    const hockeyStick = (t: number, inflectionPoint: number = 0.5) => {
      const phase1End = inflectionPoint * 0.8;
      const phase2End = inflectionPoint * 1.2;
      
      if (t < phase1End) {
        // Phase 1: Slow linear growth
        return t * 0.3;
      } else if (t < phase2End) {
        // Phase 2: Plateau / flattening
        const phase1Value = phase1End * 0.3;
        return phase1Value + (t - phase1End) * 0.08;
      } else {
        // Phase 3: Superlinear growth (exponential)
        const phase1Value = phase1End * 0.3;
        const phase2Value = phase1Value + (phase2End - phase1End) * 0.08;
        const superlinearT = t - phase2End;
        return phase2Value + Math.pow(superlinearT * 2.5, 1.8);
      }
    };

    // Draw spark effect at inflection point
    const drawSpark = (x: number, y: number, opacity: number) => {
      const sparkSize = 6 + Math.random() * 4;
      
      // Outer glow
      const glow = ctx.createRadialGradient(x, y, 0, x, y, sparkSize * 3);
      glow.addColorStop(0, `hsla(45, 100%, 95%, ${opacity})`);
      glow.addColorStop(0.2, `hsla(40, 100%, 75%, ${opacity * 0.7})`);
      glow.addColorStop(0.5, `hsla(35, 100%, 60%, ${opacity * 0.3})`);
      glow.addColorStop(1, `hsla(35, 100%, 50%, 0)`);
      
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, sparkSize * 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Inner bright core
      const core = ctx.createRadialGradient(x, y, 0, x, y, sparkSize);
      core.addColorStop(0, `hsla(50, 100%, 100%, ${opacity})`);
      core.addColorStop(0.5, `hsla(45, 100%, 85%, ${opacity * 0.8})`);
      core.addColorStop(1, `hsla(40, 100%, 70%, 0)`);
      
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(x, y, sparkSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Small rays
      ctx.strokeStyle = `hsla(45, 100%, 80%, ${opacity * 0.6})`;
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2 + Math.random() * 0.2;
        const rayLength = sparkSize * (1.5 + Math.random() * 1.5);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(
          x + Math.cos(angle) * rayLength,
          y + Math.sin(angle) * rayLength
        );
        ctx.stroke();
      }
    };

    // Spawn a new trail
    const spawnTrail = () => {
      const trail: GrowthTrail = {
        id: nextIdRef.current++,
        startX: Math.random() * 0.2 - 0.05, // -5% to 15% (left third)
        startY: 0.75 + Math.random() * 0.25, // 75% to 100% (bottom area)
        progress: 0,
        speed: 0.0006 + Math.random() * 0.0008,
        opacity: 0.7 + Math.random() * 0.3,
        hue: Math.random() > 0.6 ? 280 : 35, // Purple or Gold
        thickness: 2 + Math.random() * 3, // 2-5px
        inflectionPoint: 0.4 + Math.random() * 0.15, // 40-55%
        sparkTriggered: false,
        sparkOpacity: 0,
      };
      trailsRef.current.push(trail);
    };

    // Initial trails
    for (let i = 0; i < 4; i++) {
      spawnTrail();
      trailsRef.current[i].progress = Math.random() * 0.3;
    }

    let animationId: number;

    const animate = (timestamp: number) => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Spawn new trails periodically
      if (timestamp - lastSpawnRef.current > 3000 + Math.random() * 2000) {
        if (trailsRef.current.length < 6) {
          spawnTrail();
        }
        lastSpawnRef.current = timestamp;
      }

      // Update and draw trails
      trailsRef.current = trailsRef.current.filter((trail) => {
        trail.progress += trail.speed;

        // Check if we should trigger spark
        const sparkTriggerPoint = trail.inflectionPoint * 1.1;
        if (!trail.sparkTriggered && trail.progress >= sparkTriggerPoint) {
          trail.sparkTriggered = true;
          trail.sparkOpacity = 1;
        }

        // Fade out spark
        if (trail.sparkTriggered && trail.sparkOpacity > 0) {
          trail.sparkOpacity -= 0.015;
        }

        // Calculate opacity fade based on progress
        const fadeStart = 0.8;
        const currentOpacity =
          trail.progress > fadeStart
            ? trail.opacity * (1 - (trail.progress - fadeStart) / (1 - fadeStart))
            : trail.opacity;

        if (currentOpacity <= 0.02 || trail.progress > 1.3) {
          return false; // Remove trail
        }

        // Draw the hockey-stick curve trail
        const trailLength = 0.2;
        const segments = 50;

        ctx.beginPath();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        let lastX = 0, lastY = 0;
        let sparkX = 0, sparkY = 0;

        for (let i = 0; i <= segments; i++) {
          const t = trail.progress - (trailLength * i) / segments;
          if (t < 0) continue;

          // Hockey-stick curve: right and up
          const curveY = hockeyStick(t, trail.inflectionPoint);
          const x = trail.startX + t * 0.9; // Move right
          const y = trail.startY - curveY * 0.8; // Move up with hockey-stick curve

          const screenX = x * rect.width;
          const screenY = y * rect.height;

          // Track spark position
          if (Math.abs(t - trail.inflectionPoint * 1.1) < 0.02) {
            sparkX = screenX;
            sparkY = screenY;
          }

          // Gradient opacity along trail (head bright, tail fades)
          const segmentOpacity = currentOpacity * (1 - i / segments) * 0.7;

          if (i === 0) {
            ctx.moveTo(screenX, screenY);
            lastX = screenX;
            lastY = screenY;
          } else {
            // Draw segment with gradient
            const gradient = ctx.createLinearGradient(
              lastX, lastY, screenX, screenY
            );

            if (trail.hue === 35) {
              // Gold gradient
              gradient.addColorStop(0, `hsla(35, 100%, 65%, ${segmentOpacity})`);
              gradient.addColorStop(1, `hsla(45, 100%, 55%, ${segmentOpacity * 0.8})`);
            } else {
              // Purple gradient
              gradient.addColorStop(0, `hsla(280, 80%, 65%, ${segmentOpacity})`);
              gradient.addColorStop(1, `hsla(300, 80%, 55%, ${segmentOpacity * 0.8})`);
            }

            ctx.strokeStyle = gradient;
            ctx.lineWidth = trail.thickness * (1 - i / segments / 1.5);
            ctx.lineTo(screenX, screenY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(screenX, screenY);
            
            lastX = screenX;
            lastY = screenY;
          }
        }

        // Draw spark if active
        if (trail.sparkTriggered && trail.sparkOpacity > 0 && sparkX > 0) {
          drawSpark(sparkX, sparkY, trail.sparkOpacity);
        }

        return true;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
};

export default GrowthTrails;
