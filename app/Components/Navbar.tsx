"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Load saved theme
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Portfolio</h1>

      {/* Desktop Menu */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li onClick={() => setMenuOpen(false)}><Link href="/">Home</Link></li>
        <li onClick={() => setMenuOpen(false)}><Link href="/User/About">About</Link></li>
        <li onClick={() => setMenuOpen(false)}><Link href="/User/Skill">Skills</Link></li>
        <li onClick={() => setMenuOpen(false)}><Link href="/User/Project">Projects</Link></li>
        <li onClick={() => setMenuOpen(false)}><Link href="/User/Contact">Contact</Link></li>
      </ul>

      <div className="nav-right">
        {/* Theme Toggle */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {dark ? "☀️" : "🌙"}
        </button>

        {/* Mobile Menu Icon */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
