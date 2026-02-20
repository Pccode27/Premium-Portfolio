"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20 pt-10 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 w-full">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/character.png"
            alt="Developer"
            width={800}
            height={850}
            className="
              drop-shadow-xl rounded-xl
              dark:drop-shadow-[0_0_80px_rgba(59,130,246,0.4)]
              dark:brightness-100 brightness-110
            "
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="
            text-4xl md:text-6xl lg:text-7xl
            font-bold leading-tight mb-6
          
          ">
            Building dreams <br />

            <span className="
              bg-linear-to-r
             from-blue-400 via-cyan-400 to-violet-400
              bg-clip-text text-transparent
            ">
              One Commit At A Time
            </span>
          </h1>
          <p className="
            mb-10 max-w-lg 
            text-base md:text-lg
          ">
            Driven by curiosity and continuous learning, I craft modern,
            responsive, and performance-optimized web experiences using
            clean and scalable code.
          </p>

          <div className="flex gap-20 flex-wrap">

            {/* Primary Button */}
            <Link
              href="/projects"
              className="
                px-8 py-4 rounded-xl
                bg-black text-white
                hover:bg-gray-800
                transition-all duration-300
                shadow-lg hover:-translate-2.5
                dark:bg-cyan-600 dark:hover:bg-blue-500
              "
            >
              View My Work →
            </Link>

            {/* Secondary Button */}
            <Link
              href="/contact"
              className="
                px-8 py-4 rounded-xl
                border border-slate-300
                text-slate-800
                hover:bg-slate-200
                transition-all duration-300 font-bold
                dark:border-indigo/20 dark:text-rose-300 dark:hover:bg-fuchsia-400/10
              "
            >
              Contact Me
            </Link>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
