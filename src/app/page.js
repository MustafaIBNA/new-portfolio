"use client";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import Lenis from "lenis";
import { useEffect } from "react";
import ProjectSection from "./components/ProjectSection";
import AboutmeSection from "./components/AboutmeSection";
import Footer from "./components/Footer";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className={styles.page}>
      <div className="light"></div>
      <div className="light2"></div>
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      <AboutmeSection />
      <Footer />
    </main>
  );
}
