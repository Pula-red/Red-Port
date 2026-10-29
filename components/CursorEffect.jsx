'use client';

import { useEffect } from 'react';

export default function CursorEffect() {
  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine)');
    if (!pointerQuery.matches) return undefined;

    const cursor = document.createElement('div');
    cursor.className = 'cursor-ambient';
    cursor.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cursor);

    const handlePointerMove = (event) => {
      cursor.style.setProperty('--cursor-x', `${event.clientX}px`);
      cursor.style.setProperty('--cursor-y', `${event.clientY}px`);
    };
    document.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      cursor.remove();
    };
  }, []);

  return null;
}
