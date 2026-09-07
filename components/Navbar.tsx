export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#2B2B2B] bg-[#050505]/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <a
          href="#"
          className="text-xl font-bold tracking-[0.2em] text-[#D4AF37] transition hover:text-[#F4D03F]"
        >
          PHB.dev
        </a>

        <ul className="hidden gap-8 text-sm font-medium text-[#C8C8C8] md:flex">
          <li>
            <a href="#about" className="transition hover:text-[#D4AF37]">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="transition hover:text-[#D4AF37]">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="transition hover:text-[#D4AF37]">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="transition hover:text-[#D4AF37]">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="/resume/Phillip-Hamilton-Brown-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
        >
          View Resume
        </a>
      </div>
    </nav>
  );
}
