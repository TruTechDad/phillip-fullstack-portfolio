export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-32">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Left Side */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Building Skills For The Future Of Tech
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-gray-300">
            I’m a Full Stack Developer passionate about building modern
            applications, learning cloud technologies, exploring cybersecurity,
            and creating projects that combine creativity with problem-solving.
          </p>

          <p className="text-lg leading-relaxed text-gray-400">
            My journey includes full stack development, QA testing, AWS, Python,
            AI/automation, and content creation. I enjoy continuously learning
            new technologies and building projects that challenge me to grow as
            a developer.
          </p>
        </div>

        {/* Right Side Cards */}
        <div className="grid gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="mb-2 text-2xl font-semibold text-blue-400">
              Full Stack Development
            </h3>

            <p className="text-gray-300">
              Building responsive and modern applications using React, Next.js,
              JavaScript, and backend technologies.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="mb-2 text-2xl font-semibold text-purple-400">
              Cloud & AWS
            </h3>

            <p className="text-gray-300">
              Expanding my cloud knowledge through AWS learning, deployment
              workflows, and scalable application concepts.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="mb-2 text-2xl font-semibold text-cyan-400">
              Cybersecurity & QA
            </h3>

            <p className="text-gray-300">
              Exploring cybersecurity, ethical hacking concepts, testing
              methodologies, and software quality assurance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
