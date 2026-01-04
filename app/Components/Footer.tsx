"use client";


import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer({ theme = "dark" }) {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/study-Milky" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/jambukiyavaishali" },
    { icon: <FaTwitter />, url: "https://twitter.com/JambukiyaV90890" },
    { icon: <FaWhatsapp />, url: "https://wa.me/919316105516" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-container">

        {/* About */}
        <motion.div className="footer-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h3>About Me</h3>
          <p>
            Hi, I'm Vaishali Jambukiya. A passionate developer creating modern,
            responsive websites and interactive user interfaces.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div className="footer-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/User/About">About</a></li>
            <li><a href="/User/Skills">Skills</a></li>
            <li><a href="/User/Project">Project</a></li>
            <li><a href="/User/Contact">Contact</a></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div className="footer-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h3>Contact</h3>
          <p className="contact-item"><FaPhoneAlt /> +91 9316105516</p>
          <p className="contact-item"><FaEnvelope /> jambukiyavaishvi@gmail.com</p>
          <p className="contact-item"><FaMapMarkerAlt /> Vastral, Ahmedabad, India</p>
        </motion.div>

        {/* Social */}
        <motion.div className="footer-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h3>Follow Me</h3>
          <div className="social-icons">
            {socialLinks.map((link, i) => (
              <motion.a key={i} href={link.url} target="_blank" whileHover={{ scale: 1.3 }}>
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>

      <div className="footer-bottom">
        © {currentYear} Vaishali Jambukiya. All Rights Reserved.
      </div>
    </footer>
  );
}
