import Reveal from "./Reveal";
import Card from "./ui/Card";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32"
    >
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Left Side */}
        <Reveal>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              About Me
            </p>

            <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#FAFAFA] md:text-5xl">
              Building Skills For The Future Of Tech
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-[#C8C8C8]">
              I’m a Full Stack Developer passionate about building modern
              applications, learning cloud technologies, exploring
              cybersecurity, and creating projects that combine creativity with
              problem-solving.
            </p>

            <p className="text-lg leading-relaxed text-[#9F9F9F]">
              My journey includes full stack development, QA testing, AWS,
              Python, AI/automation, and content creation. I enjoy continuously
              learning new technologies and building projects that challenge me
              to grow as a developer.
            </p>
          </div>
        </Reveal>

        {/* Right Side Cards */}
        <Reveal>
          <div className="grid gap-6">
            <Card>
              <h3 className="mb-2 text-2xl font-semibold text-[#D4AF37]">
                Full Stack Development
              </h3>

              <p className="text-[#C8C8C8]">
                Building responsive and modern applications using React,
                Next.js, JavaScript, and backend technologies.
              </p>
            </Card>

            <Card>
              <h3 className="mb-2 text-2xl font-semibold text-[#D4AF37]">
                Cloud & AWS
              </h3>

              <p className="text-[#C8C8C8]">
                Expanding my cloud knowledge through AWS learning, deployment
                workflows, and scalable application concepts.
              </p>
            </Card>

            <Card>
              <h3 className="mb-2 text-2xl font-semibold text-[#D4AF37]">
                Cybersecurity & QA
              </h3>

              <p className="text-[#C8C8C8]">
                Exploring cybersecurity, ethical hacking concepts, testing
                methodologies, and software quality assurance.
              </p>
            </Card>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
