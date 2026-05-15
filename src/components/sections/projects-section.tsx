"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Globopersona Frontend Redesign",
    description:
      "Modern SaaS-style frontend redesign built using Next.js, TypeScript, and Tailwind CSS with responsive dashboards, analytics, authentication flows, and dark/light mode support.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://globopersona-redesign-six.vercel.app/settings",
    github: "https://github.com/srinidhxi/Globopersona-Redesign",
  },
  {
    title: "Brain Tumor Detection Using ML",
    description:
      "Developed a CNN-based machine learning model for MRI image classification with 88% accuracy using Python and deep learning workflows.",
    tech: ["Python", "CNN", "Machine Learning", "Data Processing"],
    live: "#",
    github: "#",
  },
  {
    title: "Weather Data Analysis",
    description:
      "Performed exploratory data analysis on weather datasets using Pandas and Python to extract insights on temperature, humidity, and weather conditions.",
    tech: ["Python", "Pandas", "Matplotlib", "EDA"],
    live: "#",
    github:
      "https://github.com/srinidhxi/Data-Analysis-Project-With-Pandas",
  },
  {
    title: "Library Management System",
    description:
      "Full-stack web application with role-based access, issue/return tracking, and database optimization developed during internship experience.",
    tech: ["Python", "MySQL", "JavaScript", "Bootstrap"],
    live: "#",
    github: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
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
            Projects
          </p>

          <h2 className="text-4xl font-bold text-black dark:text-white md:text-5xl">
            Featured work and technical projects.
          </h2>
        </motion.div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-black/10 bg-white/70 p-8 shadow-md backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-500/30"
            >
              <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                {project.title}
              </h3>

              <p className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm transition hover:bg-blue-50 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-4">

                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-gray-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  GitHub
                </a>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}