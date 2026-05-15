"use client";

import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative bg-gray-50 px-6 py-32 transition-colors duration-500 dark:bg-[#030712]"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-500 dark:text-blue-400">
            Education
          </p>

          <h2 className="text-4xl font-bold text-black dark:text-white md:text-5xl">
            Academic background and specialization.
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-black/10 bg-white/70 p-8 shadow-md backdrop-blur-xl transition hover:shadow-xl dark:border-white/10 dark:bg-white/5"
        >

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

            <div>
              <h3 className="text-2xl font-semibold text-black dark:text-white">
                B.Tech — CSE (Data Science)
              </h3>

              <p className="text-blue-500 dark:text-blue-400">
                Sphoorthy Engineering College
              </p>
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-400">
              2026 Pass Out
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}