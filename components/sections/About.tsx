"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
    
  return (
    <section className="min-h-screen pt-28 pb-20 px-5 md:px-20 transition-colors duration-500">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-6xl font-bold mb-16"
      >
        Passion Fuels <span className="text-blue-500">Purpose</span>
      </motion.h1>

      {/* Content Grid */}
      <div className="grid md:grid-cols-3 gap-12 items-center">

        {/* Left Bio */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-blue-400">BIOGRAPHY</h3>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Hi, I'm <span className="font-semibold text-blue-500">Prashant</span>, 
            a passionate Full Stack Developer specializing in building modern, 
            scalable and high-performance web applications.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I work with React, Next.js, Node.js and modern UI systems.
            I love creating smooth animations, premium UI designs,
            and performance-optimized applications.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Focused on clean architecture, scalability and user experience,
            I continuously explore new technologies to stay ahead.
          </p>
        </motion.div>

        {/* Center Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/avatar.jpg"   // 👈 put your image inside public folder
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10 text-center md:text-left"
        >
          <div>
            <h2 className="text-5xl font-bold text-blue-500">10+</h2>
            <p className="text-gray-500">Deployed Projects</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-purple-500">40+</h2>
            <p className="text-gray-500">Projects Completed</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-green-500">1+</h2>
            <p className="text-gray-500">Years Experience</p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
