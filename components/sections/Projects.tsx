"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Projects() {
  const [open, setOpen] = useState(false)

  return (
    <section className="py-24 px-5 md:px-20">

      <h2 className="text-5xl font-bold text-center mb-16 text-blue-400">
        Projects
      </h2>

      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 px-6 py-3 rounded-xl"
      >
        Open Project
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              className="bg-[#111827] p-10 rounded-2xl max-w-lg"
            >
              <h3 className="text-xl font-bold mb-4">Project Title</h3>
              <p className="text-gray-400">
                Detailed project description goes here.
              </p>

              <button
                onClick={() => setOpen(false)}
                className="mt-6 bg-red-500 px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
