"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/about";
import { Linkedin, Github, FileText, Globe, Instagram } from "lucide-react";

const socialIcons = [
  { name: "linkedin", icon: Linkedin, href: socialLinks.linkedin },
  { name: "github", icon: Github, href: socialLinks.github },
  { name: "medium", icon: FileText, href: socialLinks.medium },
  { name: "behance", icon: Globe, href: socialLinks.behance },
  { name: "instagram", icon: Instagram, href: socialLinks.instagram },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 max-w-6xl mx-auto border-t border-neutral-800">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm text-neutral-500 lowercase before:content-['.']"
      >
        say hello
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-16 max-w-3xl"
      >
        <h2 className="text-[clamp(2rem,6vw,3.5rem)] leading-tight font-extralight mb-12">
          interested in working together? feel free to reach out and let's collaborate
        </h2>

        <a
          href={socialLinks.email}
          className="inline-block px-8 py-4 border border-white lowercase text-sm hover:bg-white hover:text-black transition-all duration-300"
        >
          contact me
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-24 pt-12 border-t border-neutral-800 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      >
        <p className="text-sm text-neutral-600 font-extralight lowercase">.piresc</p>
        <div className="flex flex-wrap gap-6">
          {socialIcons.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-neutral-600 hover:text-white transition-colors duration-200"
            >
              <social.icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
