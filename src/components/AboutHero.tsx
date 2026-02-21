'use client';

import { motion } from 'framer-motion';

export function AboutHero() {
  return (
    <section className="pt-40 pb-24 md:pb-32 px-6 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-[clamp(3rem,10vw,8rem)] leading-none font-extralight tracking-tight mb-12"
      >
        about
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-[clamp(1.25rem,3vw,2rem)] leading-relaxed font-extralight text-neutral-400 max-w-3xl"
      >
      </motion.h2>
    </section>
  );
}
