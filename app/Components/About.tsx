"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section className="about">
      <motion.div
        className="about-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h1 variants={item}>About Me</motion.h1>

        <motion.p variants={item} className="intro">
          Hi 👋, I’m <span>Vaishali</span>, a passionate{" "}
          <strong>MERN Stack Developer</strong> and a fresher who loves
          building clean, modern and user-friendly web applications.
        </motion.p>

        <motion.p variants={item}>
          As a fresher, I focus strongly on writing <b>clean code</b>,
          understanding <b>core concepts</b>, and building real-world
          projects using <b>MongoDB, Express, React and Node.js</b>.
        </motion.p>

        <motion.p variants={item}>
          I enjoy turning ideas into reality through code and continuously
          learning new technologies to improve my skills.
        </motion.p>

        {/* Highlights */}
        <motion.div
          className="about-highlights"
          variants={container}
        >
          {[
            "⚡ MERN Stack Development",
            "🧠 Strong Fundamentals",
            "🚀 Quick Learner",
            "🤝 Team Player",
          ].map((text, i) => (
            <motion.div
              className="highlight"
              variants={item}
              whileHover={{ scale: 1.05, y: -6 }}
              key={i}
            >
              {text}
            </motion.div>
          ))}
        </motion.div>

        <motion.p variants={item} className="closing">
          I’m currently looking for an opportunity where I can grow as a
          developer, contribute to real projects, and learn from experienced
          professionals.
        </motion.p>
      </motion.div>
    </section>
  );
}
