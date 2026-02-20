'use client';

import { motion } from 'framer-motion';
import { workExperience } from '@/data/work-experience';

export function WorkTimeline() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto border-t border-neutral-800">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm text-neutral-500 lowercase before:content-['.']"
      >
        work experience
      </motion.p>

      <div className="mt-16 space-y-0 divide-y divide-neutral-800">
        {workExperience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="py-10 first:pt-0"
          >
            <p className="text-sm text-neutral-600 mb-3">{exp.period}</p>
            <h3 className="text-[clamp(1.5rem,4vw,2.5rem)] leading-tight font-light mb-2">{exp.company}</h3>
            <p className="text-base md:text-lg text-neutral-400">{exp.role}</p>
            <p className="text-sm text-neutral-500 mt-3 leading-relaxed">{exp.summary}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
