"use client"
import { useEffect, useState } from 'react';

const Dependency = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const radius = 48;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {

    // Dynamically import Bootstrap JS to avoid SSR issues
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
      console.log('Project loaded successfully.');
    }).catch((err) => {
      console.error('Project loading ...:', err);
    });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = documentHeight > 0 ? Math.min(scrollTop / documentHeight, 1) : 0;

      setIsVisible(scrollTop > 220);
      setProgress(nextProgress);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          type="button"
          className="to-top-progress"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            right: '30px',
            width: '52px',
            height: '52px',
            border: 0,
            borderRadius: '50%',
            padding: 0,
            background: 'transparent',
            cursor: 'pointer'
          }}
        >
          <svg width="52" height="52" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r={radius} />
            <circle
              cx="50"
              cy="50"
              r={radius}
              transform="rotate(-90 50 50)"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: circumference * (1 - progress),
                transition: 'stroke-dashoffset 0.15s linear'
              }}
            />
          </svg>
          <i
            className="fal fa-long-arrow-up"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </button>
      )}
    </>
  );
};

export default Dependency;
