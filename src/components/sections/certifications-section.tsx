"use client";

import { motion } from "framer-motion";

const certifications = [
  "Internship Completion Certificate — Credencer Technologies",
  "Certified Generative AI Professional — Oracle Cloud Infrastructure 2025",
  "Python Basics — HackerRank",
  "SQL (Advanced) — HackerRank",
  "Java Basics — HackerRank",
  "JavaScript (Intermediate) — HackerRank",
  "CSS — HackerRank",
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
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
            Certifications
          </p>

          <h2 className="text-4xl font-bold text-black dark:text-white md:text-5xl">
            Continuous learning and professional growth.
          </h2>
        </motion.div>

        {/* Certification Grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {certifications.map((certification, index) => (
            <motion.div
              key={certification}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
            >
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                {certification}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}