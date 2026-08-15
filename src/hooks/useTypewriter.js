import { useEffect, useState } from 'react';

export function useTypewriter(words, { typeSpeed = 75, deleteSpeed = 40, pause = 1400 } = {}) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  useEffect(() => {
    if (reduced) { setText(words[0] ?? ''); return; }
    const current = words[index % words.length];
    let t;
    if (!deleting && text.length < current.length)       t = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
    else if (!deleting && text.length === current.length) t = setTimeout(() => setDeleting(true), pause);
    else if (deleting && text.length > 0)                t = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
    else { setDeleting(false); setIndex(i => (i + 1) % words.length); }
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, deleting, index]);

  return text;
}
