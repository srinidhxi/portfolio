"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 z-50 w-full px-6 py-4">
      <div className="mx-auto max-w-6xl rounded-full border border-black/10 bg-white/80 px-6 py-4 shadow-lg backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-black/40">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-lg font-semibold tracking-wide text-black dark:text-white">
            Sri Nidhi
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden gap-8 md:flex">

            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                {item}
              </a>
            ))}

          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Mobile Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full border border-black/10 bg-white/70 p-2 backdrop-blur-xl transition hover:scale-105 dark:border-white/10 dark:bg-white/5 md:hidden"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="rounded-full border border-black/10 bg-white/70 p-2 backdrop-blur-xl transition hover:scale-105 dark:border-white/10 dark:bg-white/5"
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-black dark:text-white" />
              ) : (
                <Moon size={18} className="text-black dark:text-white" />
              )}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 top-24 w-full px-6 md:hidden">
            <div className="rounded-3xl border border-black/10 bg-white/90 p-6 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-black/80">

              <div className="flex flex-col gap-5">

                {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
                  >
                    {item}
                  </a>
                ))}

              </div>

            </div>
          </div>
        )}

      </div>
    </header>
  );
}