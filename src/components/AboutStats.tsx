'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'experience', value: '3+ years' },
  { label: 'location', value: 'Indonesia (WIB)' },
  { label: 'status', value: 'Available' },
];

export function AboutStats() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto border-t border-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <p className="text-sm text-neutral-500 lowercase before:content-['.'] mb-3">{stat.label}</p>
            <p className="text-[clamp(1.5rem,4vw,2.5rem)] leading-tight font-light">{stat.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
