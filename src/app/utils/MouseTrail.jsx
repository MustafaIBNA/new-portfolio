"use client";
import React, { useEffect, useRef } from "react";

const TAIL_LENGTH = 15; // Longer for smoother fade

// Linear interpolation
function lerp(a, b, n) {
  return a + (b - a) * n;
}

function MouseTrail() {
  const canvasRef = useRef(null);
  const trail = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation loop
  useEffect(() => {
    let animationFrameId;

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new point, interpolate for smoothness
      if (trail.current.length === 0) {
        trail.current.push({ ...mouse.current });
      } else {
        const prev = trail.current[trail.current.length - 1];
        const x = lerp(prev.x, mouse.current.x, 0.35);
        const y = lerp(prev.y, mouse.current.y, 0.35);
        trail.current.push({ x, y });
        if (trail.current.length > TAIL_LENGTH) {
          trail.current.shift();
        }
      }

      // Draw trail with fading opacity
      for (let i = 1; i < trail.current.length; i++) {
        const p1 = trail.current[i - 1];
        const p2 = trail.current[i];
        // t = 1 at head (cursor), 0 at tail
        const t = i / (trail.current.length - 1);
        // Opacity fades from 1 (head) to 0 (tail)
        const alpha = t;
        ctx.strokeStyle = `rgba(215, 202, 183,${alpha * 0.88})`;
        // ctx.lineWidth = 2 * t + 1;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Resize canvas
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
      }}
    />
  );
}

export default MouseTrail;
