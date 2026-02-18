"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-400px] right-[-400px] w-[1200px] h-[1200px] bg-blue-500/20 blur-[260px] rounded-full -z-10" />

      <div className="absolute bottom-[-400px] left-[-400px] w-[1200px] h-[1200px] bg-purple-500/20 blur-[260px] rounded-full -z-10" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Get in{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <p className="text-gray-400 text-xl">
         Whether you have a bold idea or need a reliable developer to bring your vision to life, I’m here to build something exceptional with you.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {/* LEFT SIDE */}
        <div className="space-y-6 mt-8">
          <a
            href="https://github.com/Pccode27"
            target="_blank"
            className="flex items-center gap-4 group"
          >
            <FaGithub className="text-6xl text-gray-400 group-hover:text-white transition" />
            <span className="text-gray-400 group-hover:text-white transition">
              GitHub
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/prashant-chauhan-29b163292/"
            target="_blank"
            className="flex items-center gap-4 group"
          >
            <FaLinkedin className="text-6xl text-blue-500 group-hover:scale-110 transition" />
            <span className="text-gray-400 group-hover:text-white transition">
              LinkedIn
            </span>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=prashantchauhan2704@gmail.com"
            target="_blank"
            className="flex items-center gap-4 group"
          >
            <MdEmail className="text-6xl text-red-500 group-hover:scale-110 transition" />
            <span className="text-gray-400 group-hover:text-white transition">
              Gmail
            </span>
          </a>

          <a
            href="https://www.instagram.com/its.prashant_chauhan/"
            target="_blank"
            className="flex items-center gap-4 group"
          >
            <FaInstagram className="text-6xl text-pink-500 group-hover:scale-110 transition" />
            <span className="text-gray-400 group-hover:text-white transition">
              Instagram
            </span>
          </a>
        </div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md focus:outline-none focus:border-blue-500 transition"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md focus:outline-none focus:border-blue-500 transition"
          />

          <textarea
            rows={5}
            placeholder="Message"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md focus:outline-none focus:border-blue-500 transition"
          />

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition shadow-lg shadow-blue-500/30"
          >
            Send Message
            <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
