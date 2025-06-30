"use client";

import "../styles/Footer.css"; // Adjust the path as necessary
import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation";

const Footer = () => {
  useSplitTextAnimation({
    text: ".split",
    section: ".footer-content-top",
  });
  return (
    <section className="footer">
      <div className="footer-content-top">
        <div className="split-container">
          <h1 className="split">LET'S MAKE</h1>
        </div>
        <div className="split-container">
          <h1 className="split">SOMETHING</h1>
        </div>
        <div className="split-container">
          <h1 className="split">COOL</h1>
        </div>
        {/* <h1>LET'S MAKE SOMETHING COOL</h1> */}
        <span>(OR AT LEAST FUN)</span>
      </div>

      <div className="footer-links">
        <div>
          <p>Menu</p>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <p>Socials</p>
          <a href="https://www.linkedin.com/in/mostafaIBNA/" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/MustafaIBNA" target="_blank">
            GitHub
          </a>

          <a href="https://www.youtube.com/@TheProfessorMA" target="_blank">
            YouTube
          </a>
        </div>

        <div>
          <p>Contact</p>
          <a href="mailto:mustafaashrafk@gmail.com">mustafaashrafk@gmail.com</a>
          <p className="availability" title="unless aliens invade 👽">
            Open to work — available now
          </p>
        </div>

        <div>
          <p>Tiny Disclaimer™</p>
          <p>
            This site is a result of too much coffee and bad life decisions.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Mostafa Ashraf — All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
