"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <section className="home">
      {/* LEFT CONTENT */}
      <motion.div
        className="home-content"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1>
          Hi, I'm{" "}
          <span className="gradient-text">Vaishali</span>{" "}
          <span className="wave">👋</span>
        </h1>

        <TypeAnimation
          sequence={[
            "MERN Stack Developer",
            2000,
            "Full Stack Developer",
            2000,
            "Backend Focused Engineer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />

        <p>
          I build fast, scalable & modern web applications using
          MongoDB, Express, React & Node.js.
        </p>

        <div className="home-buttons">
          <Link href="/User/Project">
          <button className="primary-btn">View Projects</button>
          </Link>
          <Link href="/User/Contact">
          <button className="secondary-btn">Contact Me</button>
          </Link>
        </div>
      </motion.div>

      {/* RIGHT SIDE ANIMATION */}
      <motion.div
        className="home-image"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
       <div className="home-image">
  <div className="blob">
    <img src="/Img/v1.jpg" alt="Vaishali" />
  </div>
</div>
      </motion.div>
    </section>
  );
}
