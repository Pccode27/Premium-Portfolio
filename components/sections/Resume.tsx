import Reveal from "../ui/Reveal"

export default function Resume() {
  return (
    <section className="py-24 px-5 md:px-20 text-center">

      <Reveal>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          My <span className="text-orange-500">Resume</span>
        </h2>

        <p className="text-gray-400 mb-10">
          Download my resume to learn more about my experience and skills
        </p>

        <a
          href="/resume.pdf"
          className="inline-block bg-orange-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Download Resume
        </a>
      </Reveal>

    </section>
  )
}
