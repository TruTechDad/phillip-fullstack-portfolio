import { image } from "framer-motion/client";
import Image from "next/image";

const projects = [
  {
    title: "Workout Generator",

    image: "workout-generator.png",
    description:
      "A fitness application that generates workout routines based on user goals and training preferences.",

    tech: ["JavaScript", "CSS"],

    github: "https://github.com/TruTechDad/lets-workout",
    live: "https://trutechdad.github.io/lets-workout/",
  },

  // {
  //   title: "QA Test Dashboard",
  //   description:
  //     "A dashboard for tracking software test cases, test results, and QA workflows with a modern UI.",

  //   tech: ["Next.js", "Tailwind", "TypeScript"],

  //   github: "https://github.com/",
  //   live: "https://example.com",
  // },

  {
    title: "QA Bug Tracker",

    image: "qa-bug-tracker.png",

    description:
      "Built a bug tracking system simulating Jira workflows using HTML, CSS, and JavaScript with full CRUD functionality and persistent storage.",

    tech: ["HTML", "CSS", "JavaScript"],

    github: "https://github.com/TruTechDad/qa-bug-tracker",
    live: "https://trutechdad.github.io/qa-bug-tracker/",
  },

  {
    title: "Application Tracker",

    image: "application-tracker.png",

    description:
      "The Job Application Tracker is a simple web app designed to help users manage and organize their job search.",

    tech: ["HTML", "JavaScript"],

    github: "https://github.com/TruTechDad/application-tracker",
    live: "https://trutechdad.github.io/application-tracker/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32"
    >
      <div className="mb-16 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Projects
        </p>

        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Featured Work
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-400"
          >
            <div className="relative mb-6 h-48 overflow-hidden rounded-2xl">
              <Image
                src={`/images/projects/${project.image}`}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mb-4 text-2xl font-semibold">{project.title}</h3>

            <p className="mb-6 leading-relaxed text-gray-300">
              {project.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-[#111827] px-3 py-1 text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold transition hover:bg-blue-600"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
