"use client";
import { motion } from "framer-motion";
import styles from "../styles/button.module.scss";

export default function Button({ isActive, toggleMenu }) {
  return (
    <button
      className={styles.button}
      onClick={toggleMenu}
      aria-label={isActive ? "Close menu" : "Open menu"}
      aria-expanded={isActive}
    >
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.el}>
          <PerspectiveText label="Menu" />
        </div>

        <div className={styles.el}>
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </button>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
// The PerspectiveText component creates a 3D perspective effect for the text
