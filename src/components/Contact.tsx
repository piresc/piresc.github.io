import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { socialLinks, socialProfiles } from '../data/about';
import { getRevealMotion } from '../lib/motion';

export default function Contact() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section id="contact" className="bg-black py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...getRevealMotion(shouldReduceMotion)} className="text-center mb-12">
          <p className="eyebrow mb-4">GET IN TOUCH</p>
          <h2 className="mb-6 section-title tone-text" style={{ textWrap: 'wrap' }}>
            Let&apos;s build backend systems that are clear, reliable, and built to ship.
          </h2>
        </motion.div>

        <motion.div
          {...getRevealMotion(shouldReduceMotion, { delay: 0.1 })}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href={socialLinks.email}
            className="group flex items-center gap-3 bg-primary rounded-full px-6 py-3 text-black font-medium transition-colors duration-300 hover:bg-[var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            <Mail size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            <span>Email Me</span>
          </a>
          <a
            href={socialLinks.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full px-6 py-3 tone-text transition-colors duration-300 hover:border-[var(--border-strong)] border border-[var(--border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            <Download size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            <span>Download CV</span>
          </a>
        </motion.div>

        <motion.div
          {...getRevealMotion(shouldReduceMotion, { delay: 0.2 })}
          className="flex flex-wrap justify-center gap-3"
        >
          {socialProfiles.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm tone-subtle transition-all hover:border-[var(--border-strong)] hover:text-primary"
            >
              {social.name}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </motion.div>

        <motion.div
          {...getRevealMotion(shouldReduceMotion, { delay: 0.3 })}
          className="text-center mt-16 pt-8 border-t border-[var(--border)]"
        >
          <p className="text-sm tone-subtle">
            © {new Date().getFullYear()} piresc.github.io
          </p>
        </motion.div>
      </div>
    </section>
  );
}
