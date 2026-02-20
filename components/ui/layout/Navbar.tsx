"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import Container from "../Container";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";

export default function Navbar() {
  const [blast, setBlast] = useState(false);
  // const [dark, setDark] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   if (dark) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [dark]);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass = (path: string) =>
    `relative pb-1 transition duration-300 ${
      pathname === path ? "text-blue-400 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80
     dark:bg-black/20 border-b border-gray-200 dark:border-white/10 
      transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="relative group">
          <motion.div
            onClick={() => {
              setBlast(true);

              setTimeout(() => {
                router.push("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
                setBlast(false);
              }, 400);
            }}
            whileTap={{ scale: 0.9 }}
            className="relative cursor-pointer select-none"
          >
            {/* Explosion Ring */}
            {blast && (
              <motion.div
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 rounded-full border-2 border-violet-400"
              />
            )}

            {/* Glow Flash */}
            {blast && (
              <motion.div
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-violet-500/30 rounded-xl blur-xl"
              />
            )}

            {/* Logo Text */}
            <h1
              className="relative px-4 py-2 text-xl font-bold 
              bg-gradient-to-r from-blue-400 to-violet-400 
              bg-clip-text text-transparent"
            >
              &lt;/&gt; Prashant
            </h1>
          </motion.div>
        </div>

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
          <Container/>
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
