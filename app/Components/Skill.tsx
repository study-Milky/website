"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "MongoDB", level: "Educate", percent: 75 },
  { name: "Express.js", level: "Educate", percent: 70 },
  { name: "React.js", level: "Educate", percent: 85 },
  { name: "Node.js", level: "Educate", percent: 80 },
  { name: "HTML", level: "Proficient", percent: 95 },
  { name: "CSS", level: "Proficient", percent: 90 },
  { name: "JavaScript", level: "Educate", percent: 85 },
  { name: "Git & GitHub", level: "Educate", percent: 75 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function SkillsPage() {
  return (
    <motion.section
      className="skills-section"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h1>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        MERN Stack & Web Development
      </motion.p>

      <motion.div className="skills-grid" variants={container}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            variants={card}
            whileHover={{ scale: 1.05 }}
          >
            <div className="skill-header">
              <h3>{skill.name}</h3>
              <span className={`level ${skill.level.toLowerCase()}`}>
                {skill.level}
              </span>
            </div>

            <div className="progress-bar">
              <motion.div
                className="progress"
                initial={{ width: 0 }}
                animate={{ width: `${skill.percent}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>

            <small>{skill.percent}%</small>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
