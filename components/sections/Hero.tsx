"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20 pt-24 relative overflow-x-hidden">
      {/* Glow Background */}
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-600/20 blur-[160px] rounded-full -z-10" />
      <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-violet-600/20 blur-[160px] rounded-full -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 w-full">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/character.png" // put your image in public folder
            alt="Developer"
            width={800}
            height={800}
            className="drop-shadow-[0_0_80px_rgba(59,130,246,0.3)]"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Building dreams<br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              One Commit At A Time
            </span>
          </h1>

          <p className="text-gray-400 mb-10 max-w-lg">
            Driven By Curiosity And Continuous Learning, I Craft Modern, Responsive,
             And Performance-Optimized Web Experiences Using Clean And Scalable Code.
          </p>

          <div className="flex gap-6">
            <Link
              href="/projects"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition shadow-lg shadow-blue-600/30 inline-block"
            >
              View My Work →
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition inline-block"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
