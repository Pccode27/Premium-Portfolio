"use client"
import { motion } from "framer-motion"

export default function MagneticButton({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 transition font-semibold"
    >
      {children}
    </motion.button>
  )
}
