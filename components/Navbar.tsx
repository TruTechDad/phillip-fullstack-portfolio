export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0B0F19]/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold tracking-wide text-white">PHB.dev</h1>

        <ul className="hidden gap-8 text-sm font-medium md:flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold">
          Resume
        </button>
      </div>
    </nav>
  );
}
