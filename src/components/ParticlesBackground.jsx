import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let animationId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const PARTICLE_COUNT = window.innerWidth < 768 ? 34 : 70;
    const CONNECTION_DISTANCE = 145;
    const MOUSE_DISTANCE = 180;

    const colors = [
      [79, 125, 255],   // blue
      [168, 85, 247],   // purple
      [34, 211, 238],   // cyan
    ];

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    let particles = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticle = () => {
      const [r, g, b] =
        colors[Math.floor(Math.random() * colors.length)];

      return {
        x: Math.random() * width,
        y: Math.random() * height,

        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,

        radius: Math.random() * 1.6 + 0.7,

        r,
        g,
        b,

        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      };
    };

    const init = () => {
      particles = Array.from(
        { length: PARTICLE_COUNT },
        createParticle
      );
    };

    const update = () => {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        p.pulse += p.pulseSpeed;

        // Soft floating movement
        p.x += Math.cos(p.pulse) * 0.015;
        p.y += Math.sin(p.pulse) * 0.015;

        // Screen wrapping
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Gentle mouse interaction
        if (!reducedMotion && mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MOUSE_DISTANCE && distance > 0) {
            const force =
              (1 - distance / MOUSE_DISTANCE) * 0.45;

            p.x += (dx / distance) * force;
            p.y += (dy / distance) * force;
          }
        }
      }
    };

    const drawGlow = (x, y, r, g, b, radius) => {
      const gradient = ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        radius * 5
      );

      gradient.addColorStop(
        0,
        `rgba(${r},${g},${b},0.18)`
      );

      gradient.addColorStop(
        0.35,
        `rgba(${r},${g},${b},0.06)`
      );

      gradient.addColorStop(
        1,
        `rgba(${r},${g},${b},0)`
      );

      ctx.fillStyle = gradient;

      ctx.beginPath();
      ctx.arc(x, y, radius * 5, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      update();

      // Draw connections first
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];

          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            const opacity =
              0.11 *
              (1 - distance / CONNECTION_DISTANCE);

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);

            ctx.strokeStyle =
              `rgba(140,150,200,${opacity})`;

            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        const pulse =
          1 + Math.sin(p.pulse) * 0.15;

        const radius = p.radius * pulse;

        drawGlow(
          p.x,
          p.y,
          p.r,
          p.g,
          p.b,
          radius
        );

        ctx.beginPath();
        ctx.arc(
          p.x,
          p.y,
          radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          `rgba(${p.r},${p.g},${p.b},0.85)`;

        ctx.fill();
      }

      // Mouse glow
      if (!reducedMotion && mouse.active) {
        const mouseGradient =
          ctx.createRadialGradient(
            mouse.x,
            mouse.y,
            0,
            mouse.x,
            mouse.y,
            190
          );

        mouseGradient.addColorStop(
          0,
          'rgba(79,125,255,0.055)'
        );

        mouseGradient.addColorStop(
          0.45,
          'rgba(168,85,247,0.025)'
        );

        mouseGradient.addColorStop(
          1,
          'rgba(168,85,247,0)'
        );

        ctx.fillStyle = mouseGradient;

        ctx.beginPath();
        ctx.arc(
          mouse.x,
          mouse.y,
          190,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      if (!reducedMotion) {
        animationId =
          requestAnimationFrame(draw);
      }
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    resize();
    init();
    draw();

    window.addEventListener(
      'resize',
      resize,
      { passive: true }
    );

    window.addEventListener(
      'mousemove',
      handleMouseMove,
      { passive: true }
    );

    window.addEventListener(
      'mouseleave',
      handleMouseLeave
    );

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener(
        'resize',
        resize
      );

      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );

      window.removeEventListener(
        'mouseleave',
        handleMouseLeave
      );
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-60"
    />
  );
}