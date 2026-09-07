import SectionHeading from "./ui/SectionHeading";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Card from "./ui/Card";

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
      "jQuery",
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
      <SectionHeading eyebrow="Skills" title="Technologies & Expertise" />

      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <Card key={category.title}>
            <h3 className="mb-6 text-2xl font-semibold text-[#D4AF37]">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
