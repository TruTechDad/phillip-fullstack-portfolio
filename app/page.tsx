"use client";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
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
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-[#FAFAFA]">
      {/* Background Glow Effects */}
      <div className="absolute -left-24 -top-24 h-[320px] w-[320px] rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="absolute -bottom-24 -right-24 h-[320px] w-[320px] rounded-full bg-[#C8C8C8]/5 blur-3xl" />

      <Navbar />

      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-6 py-24 lg:flex-row">
        {/* LEFT SIDE */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]"
          >
            Full Stack Developer • QA • Cybersecurity
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-6 inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400"
          >
            ● Open to Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-6 text-5xl font-bold leading-tight text-[#FAFAFA] md:text-7xl"
          >
            Phillip
            <span className="block text-[#D4AF37]">Hamilton Brown</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-[#C8C8C8]"
          >
            Full Stack Developer building modern web applications while
            expanding my expertise in QA Engineering, Cloud Technologies, AI,
            and Cybersecurity.
          </motion.p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button href="#projects" variant="gold">
              Explore Case Studies →
            </Button>

            <Button href="#contact" variant="silver">
              Let&apos;s Build Something
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex-1">
          {/* Glow */}
          <motion.div
            animate={{
              x: [0, 18, -12, 0],
              y: [0, -14, 10, 0],
              scale: [1, 1.08, 0.96, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-3xl"
          />

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.02,
              rotate: 0.5,
            }}
            className="relative mx-auto h-[450px] w-[350px] overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-[#111111] shadow-2xl shadow-[#D4AF37]/10"
          >
            <Image
              src="/images/profile/phillip-profile.PNG"
              alt="Phillip Hamilton Brown"
              fill
              className="object-cover transition duration-700 hover:scale-105"
              priority
            />
          </motion.div>

          {/* Floating Tech Tags */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-1/2 top-0 -translate-x-1/2"
          >
            <Badge>Python</Badge>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-4 top-16"
          >
            <Badge>React</Badge>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute right-0 top-24"
          >
            <Badge>Next.js</Badge>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute bottom-24 left-4"
          >
            <Badge>QA</Badge>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity }}
            className="absolute bottom-10 right-4"
          >
            <Badge>Cybersecurity</Badge>
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
