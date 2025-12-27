// src/components/Loader.jsx
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Loader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Simulate Loading Progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    // 2. GSAP Exit Animation
    if (progress === 100) {
      const tl = gsap.timeline({
        onComplete: () => setLoading(false) // Remove loader from DOM
      });

      tl.to(".loader-text", { opacity: 0, y: -20, duration: 0.5 })
        .to(".loader-container", { 
          height: 0, 
          duration: 1.2, 
          ease: "expo.inOut" 
        });
    }

    return () => clearInterval(interval);
  }, [progress, setLoading]);

  return (
    <div className="loader-container fixed inset-0 z-999 flex items-center justify-center bg-alt overflow-hidden">
      <div className="loader-text flex flex-col items-center">
        <h1 className="text-primary text-6xl bbh-bogle-regular tracking-tighter">
          GK PORTFOLIO
        </h1>
        <div className="text-primary nunito mt-4 text-2xl font-bold">
          {progress}%
        </div>
        {/* Subtle Progress Bar */}
        <div className="w-48 h-0.5 bg-primary/20 mt-2 overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-100" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;