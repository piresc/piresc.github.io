import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { socialLinks } from '../data/about';

const videoUrl = '/videos/hero.mp4';
const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-center">
      <div className="bg-black/80 backdrop-blur-xl rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
        <ul className="flex items-center" style={{ gap: '1.5rem' }}>
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className="block text-sm transition-colors hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                style={{ color: 'var(--muted)' }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section id="home" className="h-screen p-4 md:p-6">
      <div ref={ref} className="relative h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {shouldReduceMotion ? (
          <div className="absolute inset-0 bg-[var(--surface)]" />
        ) : (
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            disablePictureInPicture
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="noise-overlay" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <Navbar />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-display font-normal leading-[0.85] tracking-[-0.06em] text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                style={{
                  color: 'var(--text)'
                }}
              >
                {['p', 'i', 'r', 'e', 's', 'c', '.'].map((char, i) => (
                  <motion.span
                    key={i}
                    initial={shouldReduceMotion ? false : { y: 20, opacity: 0 }}
                    animate={isInView || shouldReduceMotion ? { y: 0, opacity: 1 } : {}}
                    transition={shouldReduceMotion ? { duration: 0 } : {
                      duration: 0.5,
                      delay: i * 0.08,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    style={{ display: 'inline-block' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <motion.p
                initial={shouldReduceMotion ? false : { y: 20, opacity: 0 }}
                animate={isInView || shouldReduceMotion ? { y: 0, opacity: 1 } : {}}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6 text-sm sm:text-base"
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.45
                }}
              >
                I've worked across product, scale, and modernization — from Tokopedia's fulfillment infra to Telkomsel's in-house service quality standards. I care about systems that are debuggable, testable, and owned clearly.
              </motion.p>

              <motion.a
                href={socialLinks.cv}
                target="_blank"
                rel="noopener noreferrer"
                initial={shouldReduceMotion ? false : { y: 20, opacity: 0 }}
                animate={isInView || shouldReduceMotion ? { y: 0, opacity: 1 } : {}}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group inline-flex items-center gap-2 bg-primary rounded-full px-6 py-3 transition-colors duration-300 hover:bg-[var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                style={{ color: '#000000', fontWeight: 500 }}
              >
                <span className="text-sm sm:text-base">Download CV</span>
                <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight size={18} style={{ color: 'var(--accent)' }} />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
