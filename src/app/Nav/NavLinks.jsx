"use client";
import styles from "./NavLinks.module.scss";
import { motion } from "framer-motion";
import { links, footerLinks } from "./data.js";
import { perspective, slideIn } from "./anim.js";

export default function NavLinks() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a href={href} className={styles.link}>
                  {title}
                </a>
              </motion.div>
            </div>
          );
        })}

        <motion.div className={styles.footer}>
          {footerLinks.map((link, i) => {
            const { title, href } = link;

            return (
              <motion.a
                href={href}
                variants={slideIn}
                custom={i}
                initial="initial"
                animate="enter"
                exit="exit"
                key={`f_${i}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
