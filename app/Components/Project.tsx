"use client";


import { motion } from "framer-motion";

const projects = [
  {
    title: "Metro Management System",
    description:
      "MERN Stack based metro project with routes, phases and live information.",
    image: "/Img/metro.jpg",
    liveLink: "https://metro-system.vercel.app/",
  },
  {
    title: "task Management project",
    description:
      "Full-stack MERN application for task management, admin panel and analytics.",
    image: "/Img/Image.webp",
    liveLink: "https://task-management-pied-one.vercel.app/",
  },
];

export default function ProjectsPage() {
  return (
    <section className="projects-section">
     <motion.h1
  className="title"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  My Projects
</motion.h1>

<motion.p
  className="subtitle"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
>
  Live MERN Stack Projects & Case Studies
</motion.p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            {/* IMAGE */}
            <div className="image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              {/* OVERLAY */}
              <div className="overlay">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-btn"
                >
                  🔗 View Live
                </a>
              </div>
            </div>

            {/* CONTENT */}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
