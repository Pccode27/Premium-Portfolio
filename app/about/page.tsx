"use client";
import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
} from "react-icons/si";

const techIcons: Record<string, JSX.Element> = {
  React: <FaReact className="text-blue-400 text-2xl" />,
  "Next.js": <SiNextdotjs className="text-white text-2xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-2xl" />,
  MongoDB: <SiMongodb className="text-green-400 text-2xl" />,
  Tailwind: <SiTailwindcss className="text-cyan-400 text-2xl" />,
  TypeScript: <SiTypescript className="text-blue-500 text-2xl" />,
  Git: <FaGit className="text-orange-500 text-2xl" />,
  Docker: <SiDocker className="text-blue-400 text-2xl" />,
};

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
}

export default function AboutPage() {
  return (
    <section className="min-h-screen px-6 md:px-20 pt-32 pb-20 relative overflow-x-hidden">
      {/* Background Glow */}
      {/* Premium Background Shift */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute w-150 h-[600px] bg-cyan-600/30 blur-[180px] rounded-full 
           -top-37.5 -left-37.5 animate-pulse"
        ></div>
        <div
          className="absolute w-150 h-[600px] bg-red-600/30 blur-[180px] rounded-full 
            -bottom-37.5 right-[-150px] animate-pulse"
        ></div>
      </div>
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
        About <span className="text-violet-500">Me</span>
      </h1>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-white">
            Passionate Fresher Developer 🚀
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I'm a motivated and detail-oriented MCA graduate, passionate about
            building modern web applications using
            <span className="text-white"> React, Next.js, and Node.js</span>.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            As a fresher, I focus on writing clean code, understanding core
            concepts deeply, and continuously improving my problem-solving
            skills. I enjoy turning ideas into real-world projects and learning
            new technologies along the way.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Currently looking for opportunities where I can contribute, grow as
            a developer, and work with experienced teams.
          </p>

          {/* Highlight Points */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-violet-500">
                <Counter value={5} />+
              </h3>
              <p className="text-sm text-gray-400">Projects Built</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-violet-500">10+</h3>
              <p className="text-sm text-gray-400">Technologies Learned</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-violet-500">100+</h3>
              <p className="text-sm text-gray-400">DSA Problems Solved</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-violet-500">Open</h3>
              <p className="text-sm text-gray-400">To Opportunities</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl blur-xl opacity-20"></div>
            <img
              src="/profile.jpg" // <-- apni image public folder me daal dena
              alt="Profile"
              className="relative rounded-2xl w-[1050px] border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </div>
      {/* Tech Stack */}
      <div className="mt-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Tech <span className="text-violet-500">Stack</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "React",
            "Next.js",
            "Node.js",
            "MongoDB",
            "Tailwind",
            "TypeScript",
            "Git",
            "Docker",
          ].map((tech) => (
            <div
              key={tech}
              className="bg-white/5 border border-white/10 backdrop-blur-md 
           p-6 rounded-xl text-center hover:scale-105 transition"
            >
              <div className="flex flex-col items-center gap-3">
                {techIcons[tech]}
                <p className="font-medium">{tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Achievements */}
      <div className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Achievements 🏆
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Top Performer</h3>
            <p className="text-sm text-gray-400">
              Built multiple full-stack projects during MCA with strong frontend
              focus.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">DSA Practice</h3>
            <p className="text-sm text-gray-400">
              Solved 100+ coding problems to strengthen logic and problem
              solving.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Freelance Exposure</h3>
            <p className="text-sm text-gray-400">
              Worked on real-world UI projects improving responsiveness and UX.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
