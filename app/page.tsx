"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ToolsGear from "@/components/ToolsGear";
import Image from "next/image";
import Journey from "@/components/Journey";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0F19] text-white">
      {/* Background Glow Effects */}
      <div className="absolute left-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl" />

      <Navbar />

      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-6 py-24 lg:flex-row">
        {/* LEFT SIDE */}
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Full Stack Developer • QA • Cybersecurity
          </p>

          <div className="mb-6 inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            ● Open to Opportunities
          </div>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
            Phillip
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Hamilton Brown
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Full Stack Developer building modern web applications while
            expanding my expertise in QA Engineering, Cloud Technologies, AI,
            and Cybersecurity.
          </p>

          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="rounded-2xl bg-blue-500 px-8 py-4 font-semibold transition hover:bg-blue-600"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex-1">
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

          {/* Photo */}
          <div className="relative mx-auto h-[450px] w-[350px] overflow-hidden rounded-3xl border border-blue-500/20 bg-white/5 shadow-2xl shadow-blue-500/20">
            <Image
              src="/images/profile/phillip-profile.jpg"
              alt="Phillip Hamilton Brown"
              fill
              className="object-cover transition duration-500 hover:scale-105"
              priority
            />
          </div>

          {/* Floating Tech Tags */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full border border-blue-400/20 bg-[#111827]/80 px-4 py-2 text-sm backdrop-blur-md"
          >
            Python
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-4 top-16 rounded-full border border-blue-400/20 bg-[#111827]/80 px-4 py-2 text-sm backdrop-blur-md"
          >
            React
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute right-0 top-24 rounded-full border border-blue-400/20 bg-[#111827]/80 px-4 py-2 text-sm backdrop-blur-md"
          >
            Next.js
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute left-4 bottom-24 rounded-full border border-blue-400/20 bg-[#111827]/80 px-4 py-2 text-sm backdrop-blur-md"
          >
            QA
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity }}
            className="absolute right-4 bottom-10 rounded-full border border-blue-400/20 bg-[#111827]/80 px-4 py-2 text-sm backdrop-blur-md"
          >
            Cybersecurity
          </motion.div>
        </div>
      </div>

      <About />
      <Journey />
      <Skills />
      <Projects />
      <ToolsGear />
      <Contact />
      <Footer />
    </main>
  );
}
