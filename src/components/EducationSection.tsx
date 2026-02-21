"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32 px-6 max-w-6xl mx-auto border-t border-neutral-800">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm text-neutral-500 lowercase before:content-['.']"
      >
        education
      </motion.p>

      <div className="mt-16 space-y-12">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <p className="text-sm text-neutral-600 mb-3">{edu.period}</p>
            <h3 className="text-[clamp(1.5rem,4vw,2.5rem)] leading-tight font-light mb-2">{edu.degree}</h3>
            <p className="text-base md:text-lg text-neutral-400">{edu.institution} · {edu.location}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
