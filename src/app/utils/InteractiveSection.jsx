// "use client";
// import { useEffect, useRef } from "react";
// import styles from "./InteractiveSection.module.css";
// import { gsap } from "gsap";
// import { motion } from "framer-motion";
// import RubikCube from "./RubikCube";
// import LightsCube from "./LightsCube";

// export default function InteractiveSection() {
//   const contentRef = useRef(null);
//   const linkRef = useRef(null);
//   const iconRef = useRef(null);
//   const hiddenContentRef = useRef(null);

//   useEffect(() => {
//     const content = contentRef.current;
//     const link = linkRef.current;
//     const linkIcon = iconRef.current;
//     const hiddenContent = hiddenContentRef.current;

//     if (!content || !link || !linkIcon || !hiddenContent) return;

//     let linkAnimated = false;

//     const xTo = gsap.quickTo(hiddenContent, "--x", {
//       duration: 0.8, // أطول شوية = smoother
//       ease: "expo.out", // سمووث جدًا
//     });
//     const yTo = gsap.quickTo(hiddenContent, "--y", {
//       duration: 0.8,
//       ease: "expo.out",
//     });

//     const tl = gsap.timeline({ paused: true });
//     tl.to(hiddenContent, {
//       "--size": 150,
//       duration: 0.75,
//       ease: "back.out(1.7)",
//     });
//     const paragraphs = content.querySelectorAll("[data-interactive]");
//     paragraphs.forEach((el) => {
//       el.addEventListener("mouseenter", () => tl.restart());
//       el.addEventListener("mouseleave", () => tl.reverse());
//     });

//     const btnTl = gsap.timeline({ paused: true });
//     btnTl.to(hiddenContent, {
//       "--size": 10,
//       duration: 0.75,
//       ease: "back.out(1.7)",
//     });

//     const onFirstMove = (e) => {
//       window.removeEventListener("mousemove", onFirstMove);
//       gsap.set(hiddenContent, {
//         autoAlpha: 1,
//         "--x": e.pageX,
//         "--y": e.pageY,
//       });

//       window.addEventListener("mousemove", (e) => {
//         if (!linkAnimated) {
//           yTo(e.pageY);
//           xTo(e.pageX);
//         }
//       });
//     };

//     window.addEventListener("mousemove", onFirstMove);

//     gsap.set(hiddenContent, {
//       autoAlpha: 1,
//       "--x": window.innerWidth / 3,
//       "--y": window.innerHeight / 2,
//       "--size": 5, // ⬅️ هنا بدأنا بصغير
//     });

//     // tl.progress(0.2); ❌ لا نحتاجها الآن
//   }, []);

//   return (
//     // Main Container
//     <main className={styles.page} ref={contentRef}>
//       {/*  Section */}
//       {/* <section className={styles.section}> */}
//       <section className={styles.section}>
//         {" "}
//         <LightsCube />
//         <p className={styles.heading} data-interactive>
//           Do not share this information with anyone
//         </p>
//       </section>
//       {/* Custom Cursor */}
//       <div className={styles.linkWrapper}>
//         <a
//           ref={linkRef}
//           className={styles.link}
//           href="https://greensock.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <i ref={iconRef} className={` ${styles.icon}`}></i>
//         </a>
//       </div>
//       {/* Hero section */}
//       {/* <div className="hero">
    
//         <div className="poem">
//           <div className="title-container"></div>
//           <h1 className="line tilt-l perfect">A PERFECT</h1>{" "}
//           <span className="line tilt-l cap"> or at least I pretend to be</span>
//           <h1 className="line tilt-r frontend">FRONTEND DEVELOPER</h1>
//         </div>

//         <div className="hero-bottom">
//           <p className="side-text">crafting playful web interfaces </p>
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//             className="scroll-indicator"
//           >
//             ↓
//           </motion.div>
//           <p className="side-text">based in Cairo, making magic in code</p>
//         </div>
//       </div> */}

//       {/* Hidden Content */}
//       <div className={styles.hiddenContent} ref={hiddenContentRef}>
//         <div className={styles.container}>
//           <div className={styles.section}>
//             <p className={styles.heading} data-interactive>
//               or at least I pretend to be
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
