import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa"

import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si"

import GlassCard from "../ui/GlassCard"

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-3xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-3xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
  { name: "ReactJS", icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: "NodeJS", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-gray-300 text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600 text-3xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-white text-3xl" /> },
]

export default function Skills() {
  return (
    <section className="py-24 px-5 md:px-20">

      <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
        Technical <span className="text-orange-500">Skills</span>
      </h2>

      <p className="text-center text-gray-400 mb-16">
        Technologies and tools I'm proficient with
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {skills.map((skill, index) => (
          <GlassCard key={index}>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                {skill.icon}
              </div>
              <p className="font-semibold text-sm">{skill.name}</p>
            </div>
          </GlassCard>
        ))}

      </div>
    </section>
  )
}
