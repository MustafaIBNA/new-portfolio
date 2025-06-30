"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styles from "../styles/Header.module.scss";
import Button from "./Button";
import NavLinks from "../Nav/NavLinks";
const menu = {
  open: {
    width: "480px",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <a href="/">MOSTAFA</a>
      </h1>

      <nav className={styles.nav}>
        <motion.div
          className={styles.menu}
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>{isActive && <NavLinks />}</AnimatePresence>
        </motion.div>
        <Button
          isActive={isActive}
          toggleMenu={() => {
            setIsActive(!isActive);
          }}
        />
      </nav>
    </header>
  );
}
