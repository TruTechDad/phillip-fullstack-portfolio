import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          Phillip Hamilton Brown
        </h1>

        <h2 className="mb-4 text-xl text-blue-400 md:text-2xl">
          Full Stack Developer • QA Analyst • Cyber Security Learner
        </h2>

        <p className="max-w-2xl text-lg text-gray-300">
          Building modern web applications, creative tech projects, and
          future-focused software solutions.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-xl bg-blue-500 px-6 py-3 font-semibold transition hover:bg-blue-600">
            View Projects
          </button>

          <button className="rounded-xl border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-black">
            Contact Me
          </button>
        </div>
      </section>
    </main>
  );
}
