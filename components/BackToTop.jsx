'use client';

import { useEffect, useState } from 'react';
import Icon from './Icon';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateVisibility = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollableHeight > 0 ? Math.min(window.scrollY / scrollableHeight, 1) : 0;
      setProgress(nextProgress);
      setVisible(window.scrollY > window.innerHeight * 0.45);
    };
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top focus-ring${visible ? ' back-to-top-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <svg className="back-to-top-ring" viewBox="0 0 48 48" aria-hidden="true">
        <circle className="back-to-top-ring-track" cx="24" cy="24" r="22" />
        <circle className="back-to-top-ring-progress" cx="24" cy="24" r="22" style={{ strokeDashoffset: 138.23 * (1 - progress) }} />
      </svg>
      <Icon name="arrow-up" size={18} strokeWidth={1.6} />
    </button>
  );
}
