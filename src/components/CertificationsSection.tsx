"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";
import { certifications } from "@/data/certifications";
import { Award } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="mb-20">
          <span className="mono-text text-[#64ffda] text-xl">04.</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-3 mb-6 text-gray-100">Certifications</h2>
          <div className="h-1 w-20 bg-[#64ffda]/50"></div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(100, 255, 218, 0.1)" }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#64ffda]/20 rounded-xl flex items-center justify-center mb-6">
                  <Award className="text-[#64ffda]" size={24} />
                </div>
                <h3 className="text-base font-semibold text-gray-200 mb-2">{cert.name}</h3>
                <p className="mono-text text-sm text-gray-500">{cert.issuer}</p>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
