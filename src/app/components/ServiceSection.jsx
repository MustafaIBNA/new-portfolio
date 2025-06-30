"use client";
import Image from "next/image";
import "../styles/ServiceSection.css"; // Adjust the path as necessary
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray(".serv-2");
    // Animate details
    gsap.to(".hero", {
      y: 400,
      opacity: 0,
      scale: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero",
        start: "50% 50%",
        scrub: true,
        // y: 0,
      },
    });
  }, []);
  [
    { text: ".split-serv", type: "chars" },
    { text: ".serv-desc", type: "lines" },
  ].forEach((item) =>
    useSplitTextAnimation({
      ...item,
      section: ".about-section",
      ease: "power2.out",
    })
  );

  return (
    <section className="about-section">
      {/* Start Service Section */}
      <div className="split-container">
        <h1 className="split-serv">HOW I MAKE YOUR LIFE EASIER</h1>
      </div>
      <div className="serv-1">
        <p className="serv-desc">(SERVICES)</p>
        <br />
        <p className="serv-desc">
          Tired of websites that look like they were coded during a power cut ?
          I craft smooth,
        </p>
        <p className="serv-desc">
          bold, and interactive web experiences that actually feel good to use.
        </p>
        <p className="serv-desc">
          Whether you’re a startup, a brand, or just someone with a dream and a
          domain name
        </p>
        <p className="serv-desc">
          I’m here to make sure your users stay,scroll, and smile.
        </p>
        <p className="serv-desc"></p>
      </div>
      {/* Service 1  */}
      <div className="serv-2">
        <h1 className="serv-number">(01)</h1>

        <div className="serv-details-container">
          {" "}
          <p className="serv-name">Web Development</p>
          <p className="serv-details-desc">
            I don't use page builders — I build pages. Pixel by pixel, line by
            line. Tailored code to make your site fast, fresh, and
            unforgettable.
          </p>
          <div className="serv-advance">
            <p>01 - Interactive Layouts </p>
            <p>02 - Motion & Micro-interactions </p>
            <p>03 - Responsive & Clean Code</p>
          </div>
        </div>
      </div>
      {/* Service 2  */}
      <div className="serv-2">
        <h1 className="serv-number">(02)</h1>

        <div className="serv-details-container">
          {" "}
          <p className="serv-name">Visual Design</p>
          <p className="serv-details-desc">
            Not just pretty colors. I mix usability with a unique design touch,
            creating UIs that guide the eye and spark curiosity.
          </p>
          <div className="serv-advance">
            <p>01 - Unique Aesthetics </p>
            <p>02 - UX Writing That Feels Human </p>
            <p>03 - Adaptive Design Systems</p>
          </div>
        </div>
      </div>{" "}
      {/* Service 3  */}
      <div className="serv-2">
        <h1 className="serv-number">(03)</h1>

        <div className="serv-details-container">
          {" "}
          <p className="serv-name">Smart SEO</p>
          <p className="serv-details-desc">
            If your site doesn’t show up on Google, did it even exist? I make
            sure it does — the smart way. curiosity.
          </p>
          <div className="serv-advance">
            <p>01 - Semantic HTML </p>
            <p>02 - Fast Load, Clean Code </p>
            <p>03 - Custom Meta & Structured Data</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
