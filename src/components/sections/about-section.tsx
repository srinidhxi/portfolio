"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-gray-50 px-6 py-32 transition-colors duration-500 dark:bg-[#030712]"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-500 dark:text-blue-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-black dark:text-white md:text-5xl">
            Passionate about building clean and impactful digital products.
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-black/10 bg-white/70 p-8 shadow-md backdrop-blur-xl transition hover:shadow-xl dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
              Who I Am
            </h3>

            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              CSE-Data Science student graduating in 2026 with strong interest in
              data analytics, frontend development, and UI/UX design. I enjoy
              building modern, responsive web applications and turning ideas into
              real-world digital products.
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-black/10 bg-white/70 p-8 shadow-md backdrop-blur-xl transition hover:shadow-xl dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
              My Journey
            </h3>

            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              I have worked on full-stack internship projects, frontend redesigns,
              and data analytics dashboards using Python and modern web technologies.
              I continuously improve my skills through real-world projects and hands-on learning.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}