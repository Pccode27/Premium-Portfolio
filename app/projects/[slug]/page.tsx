import { projects } from "@/lib/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiCss3,
  SiPython,
  SiBootstrap,
  SiSqlite,
  SiDjango,
  SiHtml5,
  SiJavascript,
  SiRedux,
  SiVite,
} from "react-icons/si";
import { JSX } from "react";

const techConfig: Record<
  string,
  {
    icon: JSX.Element;
    style: string;
  }
> = {
  React: {
    icon: <FaReact className="text-blue-400 text-lg" />,
    style: "bg-blue-500/10 border-blue-500 shadow-blue-500/30",
  },
  "Next.js": {
    icon: <SiNextdotjs className="text-shadow-zinc-300 text-lg" />,
    style: "bg-white/10 border-white/30 shadow-white/20",
  },
  Tailwind: {
    icon: <SiTailwindcss className="text-cyan-400 text-lg" />,
    style: "bg-cyan-500/10 border-cyan-500 shadow-cyan-500/30",
  },
  TypeScript: {
    icon: <SiTypescript className="text-lime-500 text-lg" />,
    style: "bg-blue-600/10 border-blue-600 shadow-blue-600/30",
  },
  Firebase: {
    icon: <SiFirebase className="text-orange-400 text-lg" />,
    style: "bg-orange-500/10 border-orange-500 shadow-orange-500/30",
  },
  Python: {
    icon: <SiPython className="text-purple-400 text-lg" />,
    style: "bg-orange-500/10 border-orange-500 shadow-orange-500/30",
  },
  Django: {
    icon: <SiDjango className="text-indigo-400 text-lg" />,
    style: "bg-orange-500/10 border-orange-500 shadow-orange-500/30",
  },
  ORM: {
    icon: <SiFirebase className="text-emerald-400 text-lg" />,
    style: "bg-orange-500/10 border-orange-500 shadow-orange-500/30",
  },
  CSS3: {
    icon: <SiCss3 className="text-rose-400 text-lg" />,
    style: "bg-orange-500/10 border-orange-500 shadow-orange-500/30",
  },
  Bootstrap: {
    icon: <SiBootstrap className="text-violet-400 text-lg" />,
    style: "bg-orange-500/10 border-orange-500 shadow-orange-500/30",
  },
  SQLite: {
    icon: <SiSqlite className="text-slate-400 text-lg" />,
    style: "bg-orange-500/10 border-orange-500 shadow-orange-500/30",
  },
  HTML: {
    icon: <SiHtml5 className="text-orange-400 text-lg" />,
    style: "bg-orange-500/10 border-orange-500 shadow-orange-500/30",
  },
  Javascript: {
    icon: <SiJavascript className="text-yellow-400 text-lg" />,
    style: "bg-orange-500/10 border-orange-500 shadow-orange-500/30",
  },
  Redux: {
    icon: <SiRedux className="text-red-500 text-lg" />,
    style: "bg-orange-500/10 border-orange-500 shadow-orange-500/30",
  },
  Vite: {
    icon: <SiVite className="text-emerald-600 text-lg" />,
    style: "bg-orange-500/10 border-orange-500 shadow-orange-500/30",
  },
};

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase(),
  );
  const currentIndex = projects.findIndex(
    (p) => p.slug.toLowerCase() === slug.toLowerCase(),
  );
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;

  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) return notFound();

  return (
    <section className=" px-6 md:px-20 pt-30 pb-16 relative overflow-x-hidden">
      <h1
        className=" text-3xl md:text-6xl 
                      font-extrabold 
                      bg-gradient-to-r 
                      from-white 
                      via-blue-400 
                      to-violet-500 
                      bg-clip-text 
                      text-transparent 
                      tracking-tight
                          mb-10"
      >
        {project.h1}
      </h1>
      {/* Glow */}
      <div
        className="absolute top-[-300px] right-[-300px] w-[800px] 
      h-[800px] bg-blue-600/20 blur-[200px] rounded-full -z-10"
      />
      <div
        className="absolute bottom-[-300px] left-[-300px] w-[800px] h-[800px]
       bg-violet-600/20 blur-[200px] rounded-full -z-10"
      />

      {/* main grid */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-800 to-violet-500 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

          <Image
            src={project.image}
            alt={project.title}
            width={900}
            height={600}
            className="relative rounded-xl shadow-2xl"
          />
          {/* tech badges part */}
          <div className="flex flex-wrap gap-4 mt-8">
            {project.tech.map((tech) => {
              const config = techConfig[tech];

              return (
                <div
                  key={tech}
                  className={`
                  flex items-center gap-3
                   w-[150px] h-[44px]
                  justify-center
                  rounded-full
                  border border-white/20
                  backdrop-blur-md
                  transition-all duration-300
                  hover:scale-105
                  ${config?.style}
                `}
                >
                  {/* ICON FIXED BOX */}
                  <div className="w-5 h-5 flex items-center justify-center">
                    <span className={`${config?.icon}`}>{config?.icon}</span>
                  </div>

                  <span className="text-sm font-medium whitespace-nowrap">
                    {tech}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

          <p className="text-gray-400 mb-6">{project.overview}</p>

          <h3 className="text-xl font-semibold mb-3">Features</h3>

          <ul className="space-y-2 text-gray-400 mb-8">
            {project.features.map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>

          <div className="flex gap-6 mt-10">
            <a
              href={project.demo}
              target="_blank"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600
               hover:scale-105 transition shadow-lg shadow-blue-600/30"
            >
              Live Demo →
            </a>

            <a
              href={project.github}
              target="_blank"
              className="px-8 py-3 rounded-xl border border-white/20
               hover:bg-white/10 transition"
            >
              Source Code
            </a>
          </div>
        </div>
        {/* Project Navigation */}
        <div className="flex justify-between items-center mt-16 border-t border-white/10 pt-8">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="px-6 py-3 rounded-xl border border-white/20 
      hover:bg-white/10 transition"
            >
              ← {prevProject.title}
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="px-6 py-3 rounded-xl bg-gradient-to-r 
      from-slate-600 to-cyan-600 hover:scale-105 
      transition shadow-lg shadow-blue-600/30"
            >
              {nextProject.title} →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
