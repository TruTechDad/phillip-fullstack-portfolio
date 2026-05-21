export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-32 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
        Contact
      </p>

      <h2 className="mb-6 text-4xl font-bold md:text-5xl">
        Let’s Build Something Amazing
      </h2>

      <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300">
        I’m currently continuing my journey in full stack development, cloud
        technologies, QA testing, cybersecurity, and AI. I’m always excited to
        connect with other developers, recruiters, creators, and tech
        enthusiasts.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:your-TruTechDad@gmail.com"
          className="rounded-2xl bg-blue-500 px-8 py-4 font-semibold transition hover:bg-blue-600"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/phillip-hamilton-brown/"
          target="_blank"
          className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur-md transition hover:bg-white hover:text-black"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
