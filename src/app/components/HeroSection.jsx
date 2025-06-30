"use client";
import "../styles/HeroSection.css";
import Image from "next/image";
// gsap.registerPlugin(ScrollTrigger);
export default function HeroSection() {
  // useEffect(() => {
  //   gsap.to(".cover-reveal", {
  //     y: "-100%",
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".hero-section",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   });
  // }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero">
          {/* Main big text */}
          <div className="big-text-hero">
            {" "}
            <h1 className="perfect">
              A PERFECT <span className="cap">or at least I pretend to be</span>
            </h1>
            <h1 className="line tilt-r frontend">FRONTEND DEVELOPER</h1>
          </div>
          {/* Status */}
          <div className="status">
            <h2 className="about-me-hero-section">
              I help growing brands and startups gain an unfair advantage
              through premium, results driven websites.
            </h2>
            <h3 className="status-text">
              STATUS: ✦ Open for Freelance LOCATION: Cairo, Remote Worldwide
            </h3>
          </div>
          {/* My image myself container */}
          <div className="myself-image-container">
            <Image
              className="myself2"
              src="/myself2.jpg"
              fill
              alt="myself"
              priority
            />
          </div>
          {/* Bottom of the hero Section */}
          <div className="hero-bottom">
            <p className="side-text">[SCROLL TO EXPLORE]</p>
            {/* <p className="side-text center-text-hbottom">TO EXPERIENCE CRAFT</p> */}
            <p className="right-side-text">
              based in Cairo, making magic in code
            </p>
          </div>
        </div>

        {/* الغطاء اللي هيطلع تدريجياً */}
        {/* <div className="cover-reveal"></div> */}
      </section>
    </>
  );
}
