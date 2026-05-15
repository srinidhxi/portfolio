"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white px-6 pt-32 text-black transition-colors duration-500 dark:from-[#030712] dark:via-[#071122] dark:to-[#030712] dark:text-white"
    >

      {/* Animated Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-500/20"
        />

        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/20"
        />

        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-0 h-[250px] w-[250px] rounded-full bg-purple-400/20 blur-3xl dark:bg-purple-500/20"
        />

      </div>

      {/* Grid */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl text-center"
      >

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-500 dark:text-blue-400"
        >
          Frontend Developer • Data Analyst
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Building clean,
          <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-emerald-400">
            {" "}modern digital experiences
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-700 dark:text-gray-300 md:text-xl"
        >
          Self-taught Frontend Developer and Data Analyst
          passionate about crafting responsive interfaces,
          smart analytics solutions, and modern user experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >

          <a
            href="#projects"
            className="rounded-full bg-blue-600 px-8 py-4 font-medium text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-blue-500/40"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-black/10 bg-white/70 px-8 py-4 font-medium text-black backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Contact Me
          </a>

        </motion.div>

      </motion.div>
    </section>
  );
}