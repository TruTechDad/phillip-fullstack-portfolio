const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "JQuery",
    ],
  },

  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },

  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Git", "GitHub", "Vercel"],
  },

  {
    title: "Other Skills",
    skills: ["Python", "QA Testing", "Cybersecurity", "AI/Automation"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32"
    >
      <div className="mb-16 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Skills
        </p>

        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Technologies & Expertise
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
          >
            <h3 className="mb-6 text-2xl font-semibold text-blue-400">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-[#111827] px-4 py-2 text-sm text-gray-300 transition hover:border-blue-400 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
