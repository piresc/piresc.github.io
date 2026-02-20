'use client';

import { motion } from 'framer-motion';
import { socialLinks } from '@/data/about';

export function AboutCTA() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto border-t border-neutral-800">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm text-neutral-500 lowercase before:content-['.']"
      >
        say hello
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-16"
      >
        <h2 className="text-[clamp(2rem,6vw,3.5rem)] leading-tight font-extralight max-w-3xl mb-12">
          interested in working together? feel free to reach out and let's collaborate
        </h2>
        <a
          href={socialLinks.email}
          className="inline-block px-8 py-4 border border-white lowercase text-sm hover:bg-white hover:text-black transition-all duration-300"
        >
          contact me
        </a>
      </motion.div>
    </section>
  );
}
