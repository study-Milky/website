"use client";


import { motion } from "framer-motion";
import { useState } from "react";
import { FormEvent } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phone = "919876543210";
    const text = `Hello 👋\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="contact-page">
      <motion.div
        className="contact-box"
        initial={{ opacity: 0, y: 120, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Drop your message & I’ll reply on WhatsApp
        </motion.p>

        <form onSubmit={handleSubmit}>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="contact-input"
          />

          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="contact-input"
          />

          <motion.textarea
            whileFocus={{ scale: 1.05 }}
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="contact-textarea"
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="contact-button"
          >
            Send Message →
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
