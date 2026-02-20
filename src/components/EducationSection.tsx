"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";
import { education } from "@/data/education";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="mb-20">
          <span className="mono-text text-[#64ffda] text-xl">02.</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-3 mb-6 text-gray-100">Education</h2>
          <div className="h-1 w-20 bg-[#64ffda]/50"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(100, 255, 218, 0.1)" }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.2 }}
              />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.2, type: "spring" }}
                  className="w-16 h-16 bg-[#64ffda]/20 rounded-xl flex items-center justify-center mb-8"
                >
                  <GraduationCap className="text-[#64ffda]" size={32} />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-100 mb-3">{edu.degree}</h3>

                <div className="flex items-center gap-2 text-gray-400 mb-3">
                  <MapPin size={16} />
                  <span>{edu.institution} · {edu.location}</span>
                </div>

                <div className="flex items-center gap-2 mono-text text-sm text-gray-500 mb-8">
                  <Calendar size={16} />
                  <span>{edu.period}</span>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#0a0a0a]/50 rounded-lg p-4 border border-white/5">
                    <p className="mono-text text-sm text-[#64ffda]">{edu.gpa}</p>
                  </div>
                  {edu.thesis && (
                    <div className="bg-[#0a0a0b]/50 rounded-lg p-4 border border-white/5">
                      <p className="text-sm text-gray-400 leading-relaxed">
                        <span className="text-gray-500">Thesis:</span> {edu.thesis}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <motion.div
                className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#64ffda]/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
