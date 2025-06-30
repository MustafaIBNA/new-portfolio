"use client"; // ✅ 1. install gsap if you haven’t
// npm install gsap

import { useEffect } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

// Register ScrollTrigger
if (
  typeof window !== "undefined" &&
  gsap &&
  !gsap.core.globals().ScrollTrigger
) {
  gsap.registerPlugin(SplitText);
  // gsap.registerPlugin(ScrollTrigger);/
}

// ✅ 2. Reusable Hook
export const useSplitTextAnimation = ({
  text,
  section,
  type = "chars",
  ease = "power2.out",
}) => {
  useEffect(() => {
    const split = new SplitText(text, { type });
    let targets = split.chars;
    if (type === "chars") targets = split.chars;
    if (type === "words") targets = split.words;
    if (type === "lines") targets = split.lines;

    gsap.from(targets, {
      duration: 1,
      y: 300,
      ease: ease, // use the ease argument
      stagger: 0.03,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      split.revert();
    };
  }, [text, section, type]);
};
