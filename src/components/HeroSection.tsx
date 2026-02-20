"use client";

import { motion } from "framer-motion";
import { about, socialLinks } from "@/data/about";
import { Linkedin, Github, FileText, Globe, Instagram } from "lucide-react";

const socialIcons = [
  { name: "linkedin", icon: Linkedin, href: socialLinks.linkedin },
  { name: "github", icon: Github, href: socialLinks.github },
  { name: "medium", icon: FileText, href: socialLinks.medium },
  { name: "behance", icon: Globe, href: socialLinks.behance },
  { name: "instagram", icon: Instagram, href: socialLinks.instagram },
];

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 max-w-6xl mx-auto pt-32">
      <div className="w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm text-neutral-500 lowercase before:content-['.']"
        >
          software engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[clamp(3rem,10vw,8rem)] leading-none font-extralight tracking-tight mt-8 mb-6"
        >
          pires cerullo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-base md:text-lg text-neutral-400 max-w-3xl leading-relaxed mt-8"
        >
          {about}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap gap-6 mt-12"
        >
          {socialIcons.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-neutral-600 hover:text-white transition-colors duration-200"
            >
              <social.icon size={20} strokeWidth={1.5} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
