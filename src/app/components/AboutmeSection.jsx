"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation";
import "../styles/AboutmeSection.css";

const AboutmeSection = () => {
  useEffect(() => {
    gsap.to(".aboutme-section", {
      scale: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".aboutme-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });
  }, []);

  [
    { text: ".first-paragraph-about-me", type: "lines" },
    { text: ".header-about-me", type: "lines" },
    { text: ".bottom-paragraph-about-me", type: "lines" },
  ].forEach((item) =>
    useSplitTextAnimation({
      ...item,
      section: ".aboutme-section",
      ease: "power2.out",
    })
  );

  return (
    <section id="about" className="aboutme-section" aria-labelledby="about-heading">
      <div className="left-image">
        <Image
          className="my-image-about"
          src="/myself2.jpg"
          height={630}
          width={500}
          alt="Portrait of the developer"
          loading="lazy"
        />
      </div>

      <div className="right-about-me-content">
        <div className="top-about-me-content">
          <h1 id="about-heading" className="header-about-me">
            Designer,
          </h1>
          <h1 className="header-about-me">Developer,</h1>
          <h1 className="header-about-me">Creative </h1>

          <div className="first-paragraph-about-me-container">
            <p className="first-paragraph-about-me">
              I bridge the gap between design and development, blending form
              with function in every decision I make.
            </p>
            <p className="first-paragraph-about-me">
              Each project I build is a chance to deliver something memorable
              and drive lasting digital results.
            </p>
            <p className="first-paragraph-about-me">
              I code with purpose and empathy, ensuring what I create feels
              real, polished, and truly human.
            </p>
          </div>
        </div>
        <div className="bottom-about-me-content">
          <p className="bottom-paragraph-about-me about-me-text">(About Me)</p>
          <p className="bottom-paragraph-about-me">
            I specialize in building user-first digital experiences that leave
            lasting impressions. Whether designing systems or writing frontend
            logic, I bring passion and precision. Outside of work, I share what
            I learn through YouTube, climb indoor walls, jam on instruments, or
            care for my houseplants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutmeSection;
