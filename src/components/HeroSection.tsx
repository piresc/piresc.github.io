"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";
import { about, socialLinks } from "@/data/about";
import { Download, Linkedin, Github, FileText, Globe, Instagram } from "lucide-react";

const socialIcons = [
  { name: "LinkedIn", icon: Linkedin, href: socialLinks.linkedin },
  { name: "GitHub", icon: Github, href: socialLinks.github },
  { name: "Medium", icon: FileText, href: socialLinks.medium },
  { name: "Behance", icon: Globe, href: socialLinks.behance },
  { name: "Instagram", icon: Instagram, href: socialLinks.instagram },
];

export default function HeroSection() {
  const name = "Pires Cerullo";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div variants={itemVariants} className="mb-6">
          <span className="mono-text text-[#64ffda] text-lg">Hello, I&apos;m</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold mb-8 text-gray-100">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={{
                hidden: { opacity: 0 },
                visible: (i: number) => ({ opacity: 1, transition: { delay: i * 0.03 } }),
              }}
              initial="hidden"
              animate="visible"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <span className="text-[#64ffda]">.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
          {about}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-8 mb-16">
          {socialIcons.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-[#64ffda] transition-colors"
            >
              <social.icon size={28} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
          <button
            onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 bg-transparent border-2 border-[#64ffda] text-[#64ffda] rounded-lg font-medium hover:bg-[#64ffda]/10 transition-colors"
          >
            View Experience
          </button>
          <a
            href={socialLinks.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#64ffda] text-[#0a0a0b] rounded-lg font-medium hover:bg-[#64ffda]/80 transition-colors flex items-center gap-2"
          >
            <Download size={20} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
