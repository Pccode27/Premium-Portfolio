"use client"
import { useEffect } from "react"

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement("div")
    glow.className =
      "fixed w-40 h-40 bg-violet-500/20 blur-3xl rounded-full pointer-events-none"
    document.body.appendChild(glow)

    window.addEventListener("mousemove", (e) => {
      glow.style.left = e.clientX - 80 + "px"
      glow.style.top = e.clientY - 80 + "px"
    })
  }, [])

  return null
}
