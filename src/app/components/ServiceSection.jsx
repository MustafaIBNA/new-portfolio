"use client";
import Image from "next/image";
import "../styles/ServiceSection.css";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
  useSplitTextAnimation({
    text: ".split-serv",
    type: "chars",
    section: ".about-section",
    ease: "power2.out",
  });

  useSplitTextAnimation({
    text: ".serv-desc",
    type: "lines",
    section: ".about-section",
    ease: "power2.out",
  });

  return (
    <section
      id="services"
      className="about-section"
      aria-labelledby="services-heading"
    >
      <div className="split-container">
        <h1 id="services-heading" className="split-serv">
          SERVICES TAILORED TO IMPACT
        </h1>
      </div>

      <div className="serv-1">
        <p className="serv-desc services">(WHAT I DO)</p>
        <br />
        <p className="serv-desc">
          Forget generic templates and boring websites.
        </p>
        <p className="serv-desc">
          I build immersive digital experiences from scratch.
        </p>
        <p className="serv-desc">
          Crafted to captivate, convert, and communicate clearly.
        </p>
        <p className="serv-desc">
          Whether you're a bold brand or a visionary startup,
        </p>
        <p className="serv-desc">
          I turn ideas into pixel-perfect products that stand out.
        </p>
      </div>

      {/* Service 1 */}
      <section
        className="serv-2"
        role="region"
        aria-labelledby="web-dev-heading"
      >
        <h2 id="web-dev-heading" className="serv-number">
          (01)
        </h2>
        <div className="serv-details-container">
          <p className="serv-name">Custom Web Development</p>
          <p className="serv-details-desc">
            No templates. No shortcuts. Just handcrafted code built for speed,
            scalability, and elegance.
          </p>
          <ul className="serv-advance">
            <li>01 - Scalable Frontend Architecture</li>
            <li>02 - Smooth Animations & Interactions</li>
            <li>03 - Fully Responsive Layouts</li>
          </ul>
        </div>
      </section>

      {/* Service 2 */}
      <section
        className="serv-2"
        role="region"
        aria-labelledby="visual-design-heading"
      >
        <h2 id="visual-design-heading" className="serv-number">
          (02)
        </h2>
        <div className="serv-details-container">
          <p className="serv-name">Visual Design Excellence</p>
          <p className="serv-details-desc">
            Beyond just looking good — I design intuitive interfaces that speak
            the brand and guide the user.
          </p>
          <ul className="serv-advance">
            <li>01 - Bold & Original Visual Language</li>
            <li>02 - Functional UX & UI Copy</li>
            <li>03 - Design Systems That Scale</li>
          </ul>
        </div>
      </section>

      {/* Service 3 */}
      <section className="serv-2" role="region" aria-labelledby="seo-heading">
        <h2 id="seo-heading" className="serv-number">
          (03)
        </h2>
        <div className="serv-details-container">
          <p className="serv-name">Performance-Driven SEO</p>
          <p className="serv-details-desc">
            Visibility is power. I ensure your site is search-friendly,
            lightning fast, and technically optimized.
          </p>
          <ul className="serv-advance">
            <li>01 - SEO-Focused Semantic Markup</li>
            <li>02 - Clean, Maintainable Codebase</li>
            <li>03 - Structured Metadata & Schema</li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default ServiceSection;
