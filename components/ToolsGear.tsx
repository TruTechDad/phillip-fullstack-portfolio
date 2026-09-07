import Image from "next/image";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import SectionHeading from "./ui/SectionHeading";

const gear = [
  {
    name: "Portable Monitor",
    category: "Developer Setup",
    image: "/images/gear/Portable-monitor.jpg",
    description: "My preferred monitor for coding and productivity on the go.",
    link: "#",
  },
  {
    name: "Wireless Mouse",
    category: "Developer Setup",
    image: "/images/gear/Protoarc-mouse.jpg",
    description: "Comfortable and responsive for long coding sessions.",
    link: "#",
  },
  {
    name: "Ultrawide Monitor",
    category: "Developer Setup",
    image: "/images/gear/Dell-monitor.jpg",
    description: "Extra screen space for development and multitasking.",
    link: "#",
  },
  {
    name: "USB Microphone",
    category: "Creator Gear",
    image: "/images/gear/Yeti-Nano.jpg",
    description: "Used for videos, tutorials, and content creation.",
    link: "#",
  },
  {
    name: "Docking Station",
    category: "Creator Gear",
    image: "/images/gear/Docking-Station.jpg",
    description:
      "A multiport adapter designed primarily to expand the connectivity and display capabilities of Apple MacBooks. .",
    link: "#",
  },
  {
    name: "Portable SSD",
    category: "Creator Gear",
    image: "/images/gear/ssd-2tb.jpg",
    description: "Fast storage for projects and video files.",
    link: "#",
  },
];

export default function ToolsGear() {
  return (
    <section
      id="tools"
      className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32"
    >
      <SectionHeading
        eyebrow="Technology Arsenal"
        title="My Developer & Creator Setup"
        description="The tools and technology I use for software development, content creation, productivity, and continuous learning."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {gear.map((item) => (
          <article
            key={item.name}
            className="group flex flex-col rounded-3xl border border-[#2B2B2B] bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/10"
          >
            <div className="relative mb-5 h-48 overflow-hidden rounded-2xl border border-[#2B2B2B]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mb-4">
              <Badge>{item.category}</Badge>
            </div>

            <h3 className="mb-3 text-xl font-semibold text-[#FAFAFA]">
              {item.name}
            </h3>

            <p className="mb-6 flex-grow leading-relaxed text-[#C8C8C8]">
              {item.description}
            </p>

            {item.link !== "#" && (
              <div>
                <Button href={item.link} variant="gold">
                  View Product →
                </Button>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
