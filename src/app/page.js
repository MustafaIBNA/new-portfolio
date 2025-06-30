"use client";
// import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import Lenis from "lenis";
import { useEffect } from "react";
import LightsCube from "./utils/LightsCube";
import ProjectSection from "./components/ProjectSection";
import AboutmeSection from "./components/AboutmeSection";
import Footer from "./components/Footer";
export default function Home() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className={`App ${styles.page}`}>
      <LightsCube />
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      <AboutmeSection />
      <Footer />
    </main>
  );
}
