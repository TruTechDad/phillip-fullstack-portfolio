import Button from "./ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-4 py-24 text-center md:px-6 md:py-32"
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
        Let&apos;s Connect
      </p>

      <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#FAFAFA] md:text-5xl">
        Let&apos;s Build Something Amazing
      </h2>

      <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#C8C8C8]">
        I&apos;m continuing to grow across full stack development, software
        quality, cloud technologies, cybersecurity, and AI. I&apos;m always open
        to connecting with recruiters, developers, creators, and teams building
        meaningful technology.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Button href="mailto:TruTechDad@gmail.com" variant="gold">
          Email Me
        </Button>

        <Button
          href="https://www.linkedin.com/in/phillip-hamilton-brown/"
          variant="silver"
        >
          LinkedIn
        </Button>
      </div>
    </section>
  );
}
