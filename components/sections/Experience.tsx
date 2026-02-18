"use client"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Associate Software Consultant",
    company: "Pantabyte",
    date: "November-2025 - Present",
  },
  {
    title: "Web Developer Intern",
    company: "Kodbud",
    date: "June-2025 - August-2025",
  },
  {
    title: "Python Automation Intern",
    company: "OWL AI",
    date: "August-2025 - October-2025",
  },
]

export default function Experience() {
  return (
    <section className="py-24 px-5 md:px-20 relative">

      <h2 className="text-5xl font-bold text-center mb-20">
        <span className="text-purple-400">Experience</span>
      </h2>

      <div className="relative border-l border-purple-500/30 ml-6">

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="mb-16 ml-8"
          >
            <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 mt-2" />

            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-400">{exp.company}</p>
            <span className="text-sm text-purple-300">{exp.date}</span>
          </motion.div>
        ))}

      </div>

    </section>
  )
}
