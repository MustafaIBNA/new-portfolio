"use client";

import { useEffect, useRef } from "react";

export default function NoiseLayer() {
  const noiseRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      if (noiseRef.current) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        noiseRef.current.style.backgroundPosition = `${x}% ${y}%`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate(); // start animation

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return <div ref={noiseRef} className="noise-bg" />;
}
