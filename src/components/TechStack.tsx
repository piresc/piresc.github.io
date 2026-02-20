'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

export function TechStack() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto border-t border-neutral-800">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm text-neutral-500 lowercase before:content-['.']"
      >
        stack
      </motion.p>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <p className="text-base md:text-lg font-light">{item.category}</p>
            <p className="text-sm text-neutral-500 mt-1">{item.skills}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
