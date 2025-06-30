"use client";

import React from "react";
import "../styles/AboutmeSection.css";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation";
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
    <section className="aboutme-section">
      {/* My image in about section */}
      <div className="left-image">
        <Image
          className="my-image-about"
          src="/myself2.jpg"
          height={630}
          width={500}
          alt="myself"
          loading="lazy"
        />
      </div>

      {/* My content in about section */}
      <div className="right-about-me-content">
        <div className="top-about-me-content">
          <h1 className="header-about-me"> Designer,</h1>
          <h1 className="header-about-me"> Developer,</h1>
          <h1 className="header-about-me">Creator</h1>
          <div className="first-paragraph-about-me-container">
            <p className="first-paragraph-about-me">
              {" "}
              With a passion for design and development,
            </p>
            <p className="first-paragraph-about-me">
              {" "}
              I take projects from ideation to launch,
            </p>
            <p className="first-paragraph-about-me">
              ensuring a seamless journey that leaves a lasting positive impact
              on the digital landscape and your business.
            </p>
          </div>
        </div>

        <div className="bottom-about-me-content">
          <p className="bottom-paragraph-about-me about-me-text">(About Me)</p>
          {/* <div className="bottom-paragraph-about-me-container"> */}
          <p className="bottom-paragraph-about-me">
            Creating great web experiences is my primary focus. I ensure each
            project leaves users with a feel-good sensation through meticulous
            attention to detail and user-centric design principles. When I'm not
            immersed in web development and design, you can find me sharing
            insights about my freelance journey on YouTube, bouldering, playing
            music, or tending to my cherished houseplants.
          </p>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutmeSection;
