"use client";

import {
  Globe,
  Database,
  BarChart3,
  Wrench,
} from "lucide-react";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },

  {
    title: "Programming & Data Analytics",
    icon: BarChart3,
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Data Analysis",
      "Data Visualization",
    ],
  },

  {
    title: "Database & Backend Concepts",
    icon: Database,
    skills: [
      "MySQL",
      "REST APIs",
      "OOPS",
      "DBMS",
      "SDLC",
    ],
  },

  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "GitHub",
      "VS Code",
      "Vercel",
      "Anaconda",
      "Power BI",
      "Canva",
      "ChatGPT",
      "Claude AI",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
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
            Skills
          </p>

          <h2 className="text-4xl font-bold text-black dark:text-white md:text-5xl">
            Technologies and tools I work with.
          </h2>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-blue-200 dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-500/30"
            >

              {/* Title + Icon */}
              <div className="mb-6 flex items-center gap-3">
                <category.icon className="h-5 w-5 text-blue-500 dark:text-blue-400" />

                <h3 className="text-2xl font-bold text-black dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-gray-100 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}