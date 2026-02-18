"use client";

import { projects } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiRedux,
  SiVite,
  SiTypescript,
  SiDjango,
  SiCss3,
  SiSqlite,
  SiPython,
  SiDacia
} from "react-icons/si";

const techConfig: any = {
  "Next.js": {
    icon: <SiNextdotjs />,
    color: "text-white",
    glow: "shadow-[0_0_15px_rgba(255,255,255,0.4)]",
  },
  React: {
    icon: <SiReact />,
    color: "text-cyan-400",
    glow: "shadow-[0_0_15px_rgba(34,211,238,0.6)]",
  },
  Tailwind: {
    icon: <SiTailwindcss />,
    color: "text-sky-400",
    glow: "shadow-[0_0_15px_rgba(56,189,248,0.6)]",
  },
  Bootstrap: {
    icon: <SiBootstrap />,
    color: "text-red-500",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.6)]",
  },
  Javascript: {
    icon: <SiJavascript />,
    color: "text-yellow-500",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.6)]",
  },
  Redux: {
    icon: <SiRedux />,
    color: "text-violet-500",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.6)]",
  },
  Typescript: {
    icon: <SiTypescript />,
    color: "text-orange-500",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.6)]",
  },
  Vite: {
    icon: <SiVite />,
    color: "text-pink-500",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.6)]",
  },
  Django: {
    icon: <SiDjango />,
    color: "text-green-500",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.6)]",
  },
  SQLite: {
    icon: <SiSqlite />,
    color: "text-indigo-500",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.6)]",
  },
  Python: {
    icon: <SiPython/>,
    color: "text-teal-400",
    glow: "shadow-[0_0_25px_rgba(232,121,249,0.7)]",
  },
  CSS3: {
    icon: <SiCss3 />,
    color: "text-teal-500",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.6)]",
  },
  ORM: {
    icon: <SiDacia/>,
    color: "text-fuchsia-400",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.6)]",
  },
};

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-6 md:px-20 pt-28 relative">
      {/* Glow */}
      <div className="absolute top-[-300px] right-[-300px] w-[800px] h-[800px] bg-blue-600/20 blur-[200px] rounded-full -z-10" />
      <div className="absolute bottom-[-300px] left-[-300px] w-[800px] h-[800px] bg-violet-600/20 blur-[200px] rounded-full -z-10" />

      <h1 className="text-4xl font-bold mb-12">Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:scale-[1.02] transition cursor-pointer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-[200px] object-cover"
                />

                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex gap-3 flex-wrap">
                    {project.tech.map((tech) => {
                      const config = techConfig[tech];

                      return (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.15, y: -4 }}
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={`flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md ${config?.color} ${config?.glow}`}
                        >
                          <span className="text-base">{config?.icon}</span>
                          {tech}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
