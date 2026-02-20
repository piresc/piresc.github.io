"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";
import { skills } from "@/data/skills";
import { Code, Database, Cloud, Activity, Brain, BarChart3, Languages } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const categoryIcons: Record<string, LucideIcon> = {
  "Programming Languages": Code,
  "Backend & Data": Database,
  "Infrastructure & Cloud": Cloud,
  "Observability & Quality": Activity,
  "Analytics & Intelligence": BarChart3,
  "Core Competencies": Brain,
  "Languages": Languages,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="mb-20">
          <span className="mono-text text-[#64ffda] text-xl">03.</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-3 mb-6 text-gray-100">Skills & Tools</h2>
          <div className="h-1 w-20 bg-[#64ffda]/50"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillCategory, index) => {
            const Icon = categoryIcons[skillCategory.category] || Code;
            const skillTags = skillCategory.skills.split(", ");

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(100, 255, 218, 0.15)" }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.2 }}
                />

                <div className="relative z-10">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-[#64ffda]/20 rounded-xl flex items-center justify-center mb-6"
                  >
                    <Icon className="text-[#64ffda]" size={28} />
                  </motion.div>

                  <h3 className="mono-text text-lg text-[#64ffda] mb-6">{skillCategory.category}</h3>

                  <div className="flex flex-wrap gap-3">
                    {skillTags.map((skill, sIndex) => (
                      <motion.span
                        key={sIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: sIndex * 0.05 }}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(100, 255, 218, 0.2)", borderColor: "#64ffda" }}
                        className="px-4 py-2 bg-[#0a0a0a]/50 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white cursor-default transition-all"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#64ffda]/10 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
