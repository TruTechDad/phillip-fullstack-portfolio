export default function Journey() {
  const milestones = [
    {
      year: "2021",
      title: "Self-Taught Web Development",
      description:
        "Web development journey began with self-learning HTML, CSS, and JavaScript, building small projects and exploring frontend development.",
    },
    {
      year: "2024",
      title: "UNC Charlotte Full Stack Bootcamp",
      description:
        "Completed full stack web development training focused on modern JavaScript, React, Node.js, databases, and deployment.",
    },
    {
      year: "2025",
      title: "Portfolio & Project Development",
      description:
        "Built personal projects, portfolio applications, and expanded practical software development skills.",
    },
    {
      year: "2025",
      title: "QA Engineering Growth",
      description:
        "Strengthened testing knowledge, quality assurance processes, and automation fundamentals.",
    },
    {
      year: "2025",
      title: "Cloud Learning",
      description:
        "Expanded cloud knowledge with AWS services, deployment concepts, and modern cloud architecture.",
    },
    {
      year: "2026",
      title: "Cybersecurity Training",
      description:
        "Pursuing cybersecurity skills through hands-on labs, security concepts, and practical exercises.",
    },
    {
      year: "Future",
      title: "AI & Cloud Technologies",
      description:
        "Continuing to grow in software engineering, AI-assisted development, cloud computing, and cybersecurity.",
    },
  ];

  return (
    <section id="journey" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
          My Journey
        </p>

        <h2 className="text-4xl font-bold text-[#FAFAFA] md:text-5xl">
          From Experience to Technology
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-[#C8C8C8]">
          A continuous path of learning, building, and growing in software
          development, quality engineering, cloud computing, and cybersecurity.
        </p>
      </div>

      <div className="relative space-y-10">
        <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C8C8C8] to-transparent" />

        {milestones.map((item) => (
          <div
            key={item.title}
            className="relative ml-12 rounded-3xl border border-[#2B2B2B] bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/10"
          >
            <div className="absolute -left-10 top-8 h-5 w-5 rounded-full border-4 border-[#050505] bg-[#D4AF37] shadow-lg shadow-[#D4AF37]/30" />

            <div className="mb-2 text-sm font-semibold text-[#D4AF37]">
              {item.year}
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#FAFAFA]">
              {item.title}
            </h3>

            <p className="text-[#C8C8C8]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
