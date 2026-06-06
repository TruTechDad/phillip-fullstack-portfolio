import Image from "next/image";

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
      "a multiport adapter designed primarily to expand the connectivity and display capabilities of Apple MacBooks. .",
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
      <div className="mb-16 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Tools & Gear
        </p>

        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          My Developer & Creator Setup
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          The tools, equipment, and technology I use for development, content
          creation, productivity, and learning.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {gear.map((item) => (
          <div
            key={item.name}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-blue-400"
          >
            <div className="relative mb-4 h-48 overflow-hidden rounded-2xl">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <p className="mb-2 text-sm text-blue-400">{item.category}</p>

            <h3 className="mb-3 text-xl font-semibold">{item.name}</h3>

            <p className="mb-6 text-gray-300">{item.description}</p>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold transition hover:bg-blue-600"
            >
              View Product
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
