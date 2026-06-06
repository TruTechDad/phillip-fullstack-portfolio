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

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0F19] text-white">
      {/* Background Glow Effects */}
      <div className="absolute left-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl" />

      <Navbar />

      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl"
        >
          Phillip Hamilton Brown
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-xl font-semibold text-transparent md:text-2xl"
        >
          Full Stack Developer • QA Analyst • Cyber Security Enthusiast
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl px-2 text-base leading-relaxed text-gray-300 sm:text-lg"
        >
          Building modern web applications, creative tech projects, and
          future-focused software solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 flex gap-6 text-3xl"
        >
          <a
            href="https://github.com/TruTechDad/"
            target="_blank"
            className="transition hover:scale-110 hover:text-blue-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/phillip-hamilton-brown/"
            target="_blank"
            className="transition hover:scale-110 hover:text-blue-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.youtube.com/@TruTechDad/"
            target="_blank"
            className="transition hover:scale-110 hover:text-blue-400"
          >
            <FaYoutube />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center text-sm text-gray-400"
        >
          <span>Scroll</span>

          <div className="mt-2 h-10 w-[2px] bg-gradient-to-b from-blue-400 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:justify-center"
        >
          <button className="rounded-2xl bg-blue-500 px-8 py-4 font-semibold shadow-lg shadow-blue-500/30 transition hover:scale-105 hover:bg-blue-600">
            View Projects
          </button>

          <button className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur-md transition hover:scale-105 hover:bg-white hover:text-black">
            Contact Me
          </button>
        </motion.div>
      </section>

      <About />
      <Skills />
      <Projects />
      <ToolsGear />
      <Contact />
      <Footer />
    </main>
  );
}
