import React, { useEffect, useRef } from 'react';

interface GrowthTrail {
  id: number;
  startX: number;
  startY: number;
  progress: number;
  speed: number;
  opacity: number;
  hue: number;
  steepness: number;
  thickness: number;
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

    // Sigmoid function for S-curve shape
    const sigmoid = (x: number, steepness: number = 6) => {
      return 1 / (1 + Math.exp(-steepness * (x - 0.5)));
    };

    // Spawn a new trail
    const spawnTrail = () => {
      const trail: GrowthTrail = {
        id: nextIdRef.current++,
        startX: Math.random() * 1.0 - 0.2, // -20% to 80% (full width coverage)
        startY: 0.6 + Math.random() * 0.5, // 60% to 110%
        progress: 0,
        speed: 0.0006 + Math.random() * 0.001, // Slightly slower for visibility
        opacity: 0.7 + Math.random() * 0.3,
        hue: Math.random() > 0.7 ? 280 : 35, // Purple or Gold
        steepness: 4 + Math.random() * 4, // How steep the S-curve is
        thickness: 8 + Math.random() * 12, // 10x thicker (8-20px)
      };
      trailsRef.current.push(trail);
    };

    // Initial trails - more for immediate visibility
    for (let i = 0; i < 6; i++) {
      spawnTrail();
      trailsRef.current[i].progress = Math.random() * 0.6;
    }

    let animationId: number;

    const animate = (timestamp: number) => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Spawn new trails periodically
      if (timestamp - lastSpawnRef.current > 2000 + Math.random() * 1500) {
        if (trailsRef.current.length < 12) {
          spawnTrail();
        }
        lastSpawnRef.current = timestamp;
      }

      // Update and draw trails
      trailsRef.current = trailsRef.current.filter((trail) => {
        trail.progress += trail.speed;

        // Calculate opacity fade based on progress
        const fadeStart = 0.7;
        const currentOpacity =
          trail.progress > fadeStart
            ? trail.opacity * (1 - (trail.progress - fadeStart) / (1 - fadeStart))
            : trail.opacity;

        if (currentOpacity <= 0.02 || trail.progress > 1.2) {
          return false; // Remove trail
        }

        // Draw the S-curve trail
        const trailLength = 0.25; // How long the trail appears
        const segments = 40;

        ctx.beginPath();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 0; i <= segments; i++) {
          const t = trail.progress - (trailLength * i) / segments;
          if (t < 0) continue;

          const x = trail.startX + t * 1.5; // Move right (wider coverage)
          const y = trail.startY - sigmoid(t, trail.steepness) * 1.0; // Move up with S-curve

          const screenX = x * rect.width;
          const screenY = y * rect.height;

          // Gradient opacity along trail (head bright, tail fades)
          const segmentOpacity = currentOpacity * (1 - i / segments) * 0.85;

          if (i === 0) {
            ctx.moveTo(screenX, screenY);
          } else {
            // Draw segment with gradient
            const gradient = ctx.createLinearGradient(
              screenX - 20,
              screenY,
              screenX + 20,
              screenY
            );

            if (trail.hue === 35) {
              // Gold gradient
              gradient.addColorStop(0, `hsla(35, 100%, 60%, 0)`);
              gradient.addColorStop(0.5, `hsla(35, 100%, 60%, ${segmentOpacity})`);
              gradient.addColorStop(1, `hsla(45, 100%, 70%, 0)`);
            } else {
              // Purple gradient
              gradient.addColorStop(0, `hsla(280, 80%, 60%, 0)`);
              gradient.addColorStop(0.5, `hsla(280, 80%, 60%, ${segmentOpacity})`);
              gradient.addColorStop(1, `hsla(300, 80%, 70%, 0)`);
            }

            ctx.strokeStyle = gradient;
            ctx.lineWidth = trail.thickness * (1 - i / segments / 2);
            ctx.lineTo(screenX, screenY);
          }
        }

        ctx.stroke();
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
