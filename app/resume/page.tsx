export default function ResumePage() {
  return (
    <section className="min-h-screen px-6 md:px-20 pt-32 pb-20 relative">
      {/* Background Glow */}
      <div className="absolute top-[-250px] right-[-250px] w-[700px] h-[700px] bg-blue-600/20 blur-[180px] rounded-full -z-10" />
      <div className="absolute bottom-[-250px] left-[-250px] w-[700px] h-[700px] bg-violet-600/20 blur-[180px] rounded-full -z-10" />

      {/* HERO */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Prashant{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
            Chauhan
          </span>
        </h1>

        <p className="text-gray-400 text-lg">
          Full Stack Developer • React • Next.js • Automations
        </p>

        <div className="flex justify-center gap-6 mt-6 text-sm text-gray-400">
          <span>📍Bengaluru, India</span>
          <span>
            {" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=prashantchauhan2704@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition"
            >
              📧 prashantchauhan270@gmail.com
            </a>
          </span>
          <span>📱 +91-9045638738</span>
        </div>
      </div>
      <h1 className="text-5xl font-bold mb-12 text-center">
        My <span className="text-violet-500">Resume</span>
      </h1>
      <div className="flex justify-center mb-16">
        <a
          href="/resume.pdf"
          download
          target="_blank"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 
              hover:scale-105 transition-all duration-300 shadow-lg shadow-violet-600/30"
        >
          ⬇ Download Resume
        </a>
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
        <div className="space-y-12">
          {/* EXPERIENCE */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-violet-500/40 transition">
            <h2 className="text-2xl font-semibold mb-6 text-violet-400">
              Experience
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">
                  Frontend Developer (Freelancer)
                </h3>
                <p className="text-gray-400 text-sm mb-2">
                  Kodbud-(Internship) – (June 2025 – August 2025)
                </p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Built scalable React & Next.js apps.</li>
                  <li>• Improved performance & SEO optimization.</li>
                  <li>• Integrated APIs & backend systems.</li>
                </ul>{" "}
                <br></br>
                <h3 className="font-semibold">
                  Python Automation Intern- 2025
                </h3>
                <p className="text-gray-400 text-sm mb-2">
                  OWL AI-(Internship) – (August 2025 – October 2025)
                </p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>
                    • Designed and deployed RPA workflows using UiPath Studio to
                    automate business processes.
                  </li>
                  <li>
                    • Built voice-controlled automation utilities and
                    logic-based applications during internship.
                  </li>
                  <li>
                    • Combined Python scripting with UiPath automation to
                    enhance process efficiency.
                  </li>
                </ul>{" "}
                <br></br>
                <h3 className="font-semibold">
                  Associate Software Consultant (Pantabyte)
                </h3>
                <p className="text-gray-400 text-sm mb-2">
                  November 2025 – Present
                </p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>
                    • Developed responsive and user-friendly web interfaces
                    using React.js / Next.js.
                  </li>
                  <li>
                    • Improved UI performance and reduced load time through
                    optimization techniques.
                  </li>
                  <li>
                    • Ensured cross-browser compatibility and mobile
                    responsiveness.
                  </li>
                </ul>{" "}
                <br></br>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-blue-500/40 transition">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">
              Education
            </h2>

            <div>
              <h3 className="font-semibold">MCA – Computer Science</h3>
              <p className="text-gray-400 text-sm">
                Institute of Engineering & Technology, Lucknow
              </p>
              <br></br>
              <h3 className="font-semibold">
                Bachelor of science – Physics Honours
              </h3>
              <p className="text-gray-400 text-sm">
                Dyal Singh College , Delhi University
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-12">
          {/* SKILLS */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
              Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Node.js",
                "MongoDB",
                "Python",
                "Django",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-600/20 to-violet-600/20 border border-white/10 hover:scale-105 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          

          {/* PROJECTS */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-cyan-500/40 transition">
            <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
              Projects
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">Career Friendly – Job Portal</h3>
                <p className="text-gray-400 text-sm">
                  Next.js • Tailwind • Framer Motion • JavaScript • Nodejs •
                  Express • MongoDB
                </p>
                <div className="flex gap-4 mt-2 text-sm">
                   <a
                        href="https://career-friendly.onrender.com/"
                        target="_blank"
                        className="text-violet-400 hover:underline"
                      >
                        Live Demo →
                      </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold">QuickKart – E-commerce</h3>
                <p className="text-gray-400 text-sm">
                  React • CSS • Search • Framer Motion
                </p>
                <div className="flex gap-4 mt-2 text-sm">
                   <a
                        href="/projects/quick-kart"
                        className="text-violet-400 hover:underline"
                      >
                        Live Demo →
                      </a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">FitZone – Gym Website</h3>
                <p className="text-gray-400 text-sm">
                  Modern UI • Responsive Design
                </p>
                <div className="flex gap-4 mt-2 text-sm">
                   <a
                        href="/projects/fitzone"
                        className="text-violet-400 hover:underline"
                      >
                        Live Demo →
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
