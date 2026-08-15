import { useEffect, useRef, useState } from 'react';

export function useCountUp(target, start, duration = 1200) {
  const [value, setValue] = useState(0);
  const ran = useRef(false);

  useEffect(() => {
    if (!start || ran.current) return;
    ran.current = true;
    const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    if (reduced) { setValue(target); return; }
    const t0 = performance.now();
    const tick = now => {
      const p = Math.min((now - t0) / duration, 1);
      setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [start, target, duration]);

  return value;
}
