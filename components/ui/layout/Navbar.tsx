"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass = (path: string) =>
    `relative pb-1 transition duration-300 ${
      pathname === path ? "text-blue-400" : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0b0f1a]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 flex justify-between items-center">
        {/* LOGO */}
        <h1 className="flex items-center gap-3 cursor-pointer group">
          {/* SVG Logo */}
          <svg
            width="38"
            height="38"
            viewBox="0 0 100 100"
            className="transition duration-300 group-hover:scale-110"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>

            {/* Background Circle */}
            <circle cx="50" cy="50" r="45" fill="url(#grad1)" />
            {/* Code Brackets */}
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              fill="white"
              fontSize="40"
              fontWeight="bold"
              fontFamily="monospace"
            >
              {"</>"}
            </text>
          </svg>
          {/* Name */}
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Prashant
          </span>
        </h1>
        {/* CENTER LINKS */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/" className={linkClass("/")}>
            Home
            {pathname === "/" && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400 rounded-full" />
            )}
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
            {pathname === "/about" && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400 rounded-full" />
            )}
          </Link>

          <Link href="/projects" className={linkClass("/projects")}>
            Projects
            {pathname === "/projects" && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400 rounded-full" />
            )}
          </Link>

          <Link href="/resume" className={linkClass("/resume")}>
            Resume
            {pathname === "/resume" && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400 rounded-full" />
            )}
          </Link>

          <Link href="/contact" className={linkClass("/contact")}>
            Contact
            {pathname === "/contact" && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400 rounded-full" />
            )}
          </Link>
        </div>

        {/* RIGHT ICONS */}
        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 text-xl"
        >
          ☰
        </button>

        <div className="flex items-center gap-5 text-gray-300 text-lg">
          <a
            href="https://github.com/Pccode27"
            target="_blank"
            className="hover:text-white hover:scale-150 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/prashant-chauhan-29b163292/"
            target="_blank"
            className="text-[#0A66C2] hover:scale-150 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=prashantchauhan2704@gmail.com"
            target="_blank"
            className="text-red-500 hover:scale-150 transition"
          >
            <FaEnvelope />
          </a>

          {/* DARK MODE TOGGLE */}
          <button
            onClick={() => setDark(!dark)}
            className="ml-3 p-2 rounded-full bg-white/5 
                border border-white/10 hover:scale-110 
                transition-all duration-300"
          >
            {dark ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-blue-400" />
            )}
          </button>
        </div>
      </div>
      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b0f1a]/95 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col px-6 py-6 gap-6 text-gray-300">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/resume" onClick={() => setMenuOpen(false)}>
              Resume
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            <div className="flex gap-5 pt-4 border-t border-white/10 text-lg">
              <FaGithub />
              <FaLinkedin />
              <FaEnvelope />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
