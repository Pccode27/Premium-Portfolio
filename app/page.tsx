import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import Skills from "@/components/sections/Skills"
import Resume from "@/components/sections/Resume"
import Experience from "@/components/sections/Experience"
import Education from "@/components/sections/Education"
import About from "@/components/sections/About"

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Services />
      <Skills />
      <Resume />
      <Experience />
      <Education />
    </>
  )
}
