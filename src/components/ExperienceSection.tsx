"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";
import { workExperience } from "@/data/work-experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="mb-20">
          <span className="mono-text text-[#64ffda] text-xl">01.</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-3 mb-6 text-gray-100">Experience</h2>
          <div className="h-1 w-20 bg-[#64ffda]/50"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#64ffda] to-transparent hidden md:block"></div>

          <div className="space-y-16">
            {workExperience.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative pl-0 md:pl-20">
                <div className="hidden md:flex absolute left-6 top-0 bottom-0 w-4 items-center">
                  <div className="w-4 h-4 bg-[#64ffda] rounded-full border-4 border-[#0a0a0b]"></div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 hover:border-[#64ffda]/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#64ffda] mb-2">{exp.role}</h3>
                      <p className="text-lg text-gray-300">{exp.company} · {exp.location}</p>
                    </div>
                    <span className="mono-text text-sm text-gray-500 md:text-right">{exp.period}</span>
                  </div>

                  <p className="text-gray-400 mb-8 leading-relaxed text-base">{exp.summary}</p>

                  <div className="space-y-6">
                    {exp.projects.map((project, pIndex) => (
                      <div key={pIndex} className="bg-[#0a0a0a]/50 rounded-xl p-6 border border-white/5">
                        <h4 className="text-lg font-semibold text-gray-200 mb-3">{project.title}</h4>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                        {project.impact.length > 0 && (
                          <ul className="space-y-3">
                            {project.impact.map((impact, iIndex) => (
                              <motion.li
                                key={iIndex}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: iIndex * 0.1 }}
                                className="flex items-start gap-3 text-sm text-gray-400"
                              >
                                <span className="text-[#64ffda] mt-0.5">›</span>
                                <span className="leading-relaxed">{impact}</span>
                              </motion.li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
