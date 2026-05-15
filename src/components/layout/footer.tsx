"use client";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white px-6 py-10 text-gray-900 transition-colors duration-300 dark:border-white/10 dark:bg-[#030712] dark:text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">

        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-black dark:text-white">
            M. Sri Nidhi
          </h3>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Frontend Developer • Data Analyst
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">

          <a
            href="https://github.com/srinidhxi"
            target="_blank"
            className="text-sm text-gray-700 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/m-sri-nidhi-45b000278/"
            target="_blank"
            className="text-sm text-gray-700 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </footer>
  );
}