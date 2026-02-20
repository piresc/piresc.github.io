"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";
import { socialLinks } from "@/data/about";
import { Mail, Download, Send, Linkedin, Github, FileText, Globe, Instagram } from "lucide-react";

const socialIcons = [
  { name: "LinkedIn", icon: Linkedin, href: socialLinks.linkedin },
  { name: "GitHub", icon: Github, href: socialLinks.github },
  { name: "Medium", icon: FileText, href: socialLinks.medium },
  { name: "Behance", icon: Globe, href: socialLinks.behance },
  { name: "Instagram", icon: Instagram, href: socialLinks.instagram },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-20">
          <span className="mono-text text-[#64ffda] text-xl">05.</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-3 mb-6 text-gray-100">Get In Touch</h2>
          <div className="h-1 w-20 bg-[#64ffda]/50 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 md:p-14 mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="w-20 h-20 bg-[#64ffda]/20 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Mail className="text-[#64ffda]" size={40} />
          </motion.div>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-5">
            Interested in working together?
          </h3>

          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href={socialLinks.email}
              className="group relative px-10 py-4 bg-[#64ffda] text-[#0a0a0b] rounded-lg font-medium hover:bg-[#64ffda]/80 transition-all flex items-center justify-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Send size={20} />
                Say Hello
              </span>
              <motion.div
                className="absolute inset-0 rounded-lg bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </a>

            <a
              href={socialLinks.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-4 bg-transparent border-2 border-[#64ffda] text-[#64ffda] rounded-lg font-medium hover:bg-[#64ffda]/10 transition-all flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <p className="text-gray-500 mb-10">Or connect with me on social media</p>
          <div className="flex justify-center gap-8">
            {socialIcons.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 5, color: "#64ffda" }}
                whileTap={{ scale: 0.9 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="text-gray-400 hover:text-[#64ffda] transition-colors"
              >
                <social.icon size={32} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-20 text-center pt-8 border-t border-white/10">
          <p className="mono-text text-sm text-gray-600">piresc.dev@gmail.com</p>
        </motion.div>
      </div>
    </section>
  );
}
