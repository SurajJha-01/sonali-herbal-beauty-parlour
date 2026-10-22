/**
 * useScrollReveal.js
 * Custom hook that adds a "visible" class to elements when they enter the viewport.
 * Usage: const ref = useScrollReveal();  →  <div ref={ref} className="reveal">
 */
import { useEffect, useRef } from 'react';

export default function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const {
    root = null,
    rootMargin = '0px 0px -40px 0px',
    threshold = 0.12,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = [...el.querySelectorAll('.reveal')];
    if (el.classList.contains('reveal')) targets.push(el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { root, rootMargin, threshold }
    );

    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [root, rootMargin, threshold]);

  return ref;
}
