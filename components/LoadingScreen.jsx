'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const startTime = performance.now();
    let frameId;
    let removeTimer;

    const updateProgress = (timestamp) => {
      const nextProgress = Math.min(Math.round(((timestamp - startTime) / duration) * 100), 100);
      setProgress(nextProgress);

      if (nextProgress < 100) {
        frameId = window.requestAnimationFrame(updateProgress);
        return;
      }

      setIsLeaving(true);
      removeTimer = window.setTimeout(() => setIsVisible(false), 400);
    };

    frameId = window.requestAnimationFrame(updateProgress);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen${isLeaving ? ' loading-screen-leaving' : ''}`} role="status" aria-label={`Loading portfolio: ${progress}%`}>
      <div className="loading-screen-grid" aria-hidden="true" />
      <div className="loading-screen-content">
        <div className="loading-mark" aria-hidden="true">J</div>
        <p className="loading-label">John Jared Bueta</p>
        <div className="loading-line" aria-hidden="true"><span style={{ transform: `scaleX(${progress / 100})` }} /></div>
        <p className="loading-status"><span className="loading-percentage">{progress}%</span> Loading portfolio <span>•</span></p>
      </div>
    </div>
  );
}
