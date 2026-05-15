"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_s9gh20u",
        "template_wxyd19n",
        form.current,
        "b_R-8ASaaFEtJVeXR"
      )
      .then((result) => {
        console.log("SUCCESS:", result.text);
        alert("Message sent successfully 🚀");
        form.current?.reset();
      })
      .catch((error) => {
        console.error("FAILED EMAILJS:", error);
        alert("Failed to send message ❌ (check console)");
      });
  };

  return (
    <section
      id="contact"
      className="relative bg-gray-50 px-6 py-32 transition-colors duration-500 dark:bg-[#030712]"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-500 dark:text-blue-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold text-black dark:text-white md:text-5xl">
            Let’s build something amazing together.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-700 dark:text-gray-300">
            I’m open to frontend development, data analytics, UI/UX opportunities,
            internships, and collaborative projects.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-black/10 bg-white/70 p-10 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >

          <div className="grid gap-12 md:grid-cols-2">

            {/* Left Side */}
            <div className="space-y-8">

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400">
                  Email
                </p>
                <p className="text-lg text-black dark:text-gray-300">
                  mangalarappusrinidhi@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400">
                  Location
                </p>
                <p className="text-lg text-black dark:text-gray-300">
                  Hyderabad, India
                </p>
              </div>

            </div>

            {/* Right Form */}
            <form ref={form} onSubmit={sendEmail} className="space-y-5">

              <input
                name="from_name"
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 text-black outline-none focus:border-blue-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                required
              />

              <input
                name="from_email"
                type="email"
                placeholder="Your Email"
                className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 text-black outline-none focus:border-blue-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 text-black outline-none focus:border-blue-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                required
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-blue-600 px-6 py-4 font-medium text-white transition hover:bg-blue-500"
              >
                Send Message
              </button>

            </form>

          </div>

        </motion.div>

      </div>
    </section>
  );
}