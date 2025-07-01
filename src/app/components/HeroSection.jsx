"use client";
import { useEffect, useRef } from "react";
import styles from "../styles/HeroSection.module.css";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef(null);
  useEffect(() => {
    if (document.fonts) {
      document.fonts.load('1em "MangoGrotesque"').then(() => {
        document.body.classList.add("mango-loaded");
      });
    }
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        y: 400,
        opacity: 0,
        scale: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "50% 50%",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section id="home" className={styles.heroSection} role="banner">
      <div className={styles.hero} ref={heroRef}>
        <div className={styles.bigTextHero}>
          <h1 className={styles.perfect}>
            A PERFECT{" "}
            <span className={styles.cap}>or at least I pretend to be</span>
          </h1>
          <h2 className={`${styles.line} ${styles.tiltR} ${styles.frontend}`}>
            FRONTEND DEVELOPER
          </h2>
        </div>
        <div className={styles.status}>
          <p className={styles.aboutMeHeroSection}>
            I help growing brands and startups gain an unfair advantage through
            premium, results driven websites.
          </p>
          <p className={styles.statusText} aria-live="polite">
            STATUS: ✦ Open for Freelance LOCATION: Cairo, Remote Worldwide
          </p>
        </div>
        <nav className={styles.heroBottom} aria-label="Hero section navigation">
          <p className={styles.sideText}>[SCROLL TO EXPLORE]</p>
          <p className={styles.rightSideText}>
            based in Cairo, making magic in code
          </p>
        </nav>
      </div>
    </section>
  );
}
