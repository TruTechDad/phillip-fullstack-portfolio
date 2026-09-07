import Reveal from "./Reveal";
import Image from "next/image";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

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
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
          Case Studies
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-[#FAFAFA] md:text-5xl">
          Featured Work
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-[#C8C8C8]">
          A selection of projects that demonstrate my approach to application
          development, problem-solving, usability, and software quality.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 0.12}
            direction="up"
            distance={50}
          >
            <article className="group flex h-full flex-col rounded-3xl border border-[#2B2B2B] bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/10">
              <div className="relative mb-6 h-48 overflow-hidden rounded-2xl border border-[#2B2B2B]">
                <Image
                  src={`/images/projects/${project.image}`}
                  alt={`${project.title} project screenshot`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-[#FAFAFA]">
                {project.title}
              </h3>

              <p className="mb-6 flex-grow leading-relaxed text-[#C8C8C8]">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href={project.github} variant="gold">
                  GitHub
                </Button>

                <Button href={project.live} variant="silver">
                  Live Demo
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
