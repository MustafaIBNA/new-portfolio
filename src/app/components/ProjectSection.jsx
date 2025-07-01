"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/ProjectSection.css"; // Adjust the path as necessary
import Image from "next/image";
import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const ProjectSection = () => {
  useEffect(() => {
    const numberSpan = document.querySelector(".project-number-change");
    const projects = document.querySelectorAll(".project");
    const wrapper = document.querySelector(".projects-videos");

    if (!numberSpan || !wrapper || projects.length === 0) return;

    const numberHeight = 250;
    let split;
    let currentValue = null; // 👈 لحفظ آخر رقم متعرض

    // Pin the whole number
    const pinTrigger = ScrollTrigger.create({
      trigger: wrapper,
      start: "top 10%",
      end: () => `+=${wrapper.scrollHeight - numberHeight}`,
      pin: numberSpan.parentElement,
      pinSpacing: false,
      markers: false,
    });

    // Function to update number + animate it
    const animateNumber = (value) => {
      if (currentValue === value) return; // ✅ تجنب التكرار
      currentValue = value;

      if (split) split.revert();

      numberSpan.textContent = value;

      split = new SplitText(numberSpan, { type: "chars" });

      gsap.from(split.chars, {
        y: 150,
        opacity: 0,
        ease: "back.out(1.7)",
        duration: 0.7,
        stagger: 0.05,
      });
    };

    // ScrollTrigger per project
    // ScrollTrigger per project
    const triggers = Array.from(projects).map((project, index) =>
      ScrollTrigger.create({
        trigger: project,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          if (index === 0) return; // ⛔ تجاهل أول مشروع
          animateNumber(String(index + 1));
        },
        onEnterBack: () => {
          if (index === 0) return; // ⛔ تجاهل أول مشروع
          animateNumber(String(index + 1));
        },
        onLeaveBack: () => {
          if (index === 1) {
            // ✅ لو رجعت من الثاني للأول، رجع الرقم 1
            animateNumber("1");
          }
        },
      })
    );

    return () => {
      pinTrigger.kill();
      triggers.forEach((t) => t.kill());
      if (split) split.revert();
    };
  }, []);

  // Split text animation for project heading
  [
    { text: ".project-heading", type: "chars" },
    { text: ".project-description-text", type: "lines" },
  ].forEach((item) =>
    useSplitTextAnimation({
      ...item,
      section: ".project-section",
      ease: "power2.out",
    })
  );

  return (
    <section
      className="project-section"
      id="works"
      aria-labelledby="project-heading"
    >
      {/* Project Heading and Description */}
      <div aria-hidden="true" role="presentation" className="split-container">
        <h1 className="project-heading">SELECTED WORKS</h1>
      </div>
      <div className="project-description">
        <div className="split-container">
          <div className="split-container">
            <span className="project-description-text">(PROJECTS)</span>
          </div>
          <p className="project-description-text">
            <br />
            Featured projects that have been meticulously crafted with passion
            to drive results and impact.
          </p>
        </div>
      </div>
      {/* Projects list goes here */}
      <div className="projects-videos">
        <div className="split-container-project-number">
          <h1 className="project-number">
            0<span className="project-number-change">1</span>
          </h1>
        </div>

        {/* First Project */}
        <article aria-labelledby="project-X" className="project">
          <div className="project-video">
            {/* <h1>image</h1> */}
            {/* <video
              src="/videos/project1.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video> */}
            <div className="project-image-container">
              <Image
                className="project-image"
                src="/project.jpeg"
                fill
                alt="E-commerce Dashboard for XYZ brand"
                loading="lazy"
              />
            </div>
          </div>
        </article>

        {/* Second Project */}
        <article aria-labelledby="project-X" className="project">
          <div className="project-video">
            {/* <h1>image</h1> */}
            {/* <video
              src="/videos/project1.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video> */}
            <div className="project-image-container">
              <Image
                className="project-image"
                src="/project.jpeg"
                fill
                alt="E-commerce Dashboard for XYZ brand"
                loading="lazy"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProjectSection;
