import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, CalendarDays, Download } from 'lucide-react';
import { skills, workExperience, education } from '../data/portfolio';
import { socialLinks } from '../data/about';
import { getRevealMotion, getScaleInMotion } from '../lib/motion';

const timelineContext = [
  {
    company: 'Telkomsel',
    phase: 'Modernization',
    summary:
      'Service ownership, software quality standards, and modernization across the MyTelkomsel web ecosystem.',
    proof: ['27 services', 'GitLab CI/CD', 'Quality gates'],
  },
  {
    company: 'Tokopedia',
    phase: 'Scale',
    summary:
      'Backend ownership for digital fulfillment, supplier integrations, reliability, and operational efficiency.',
    proof: ['4,000+ SKUs', '100+ suppliers', '>300 RPS'],
  },
  {
    company: 'Apple Academy',
    phase: 'Product',
    summary:
      'iOS product work, user research, and interface decisions before specializing deeper in backend systems.',
    proof: ['7 iOS apps', 'Usability testing', 'Swift'],
  },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section id="about" className="relative min-h-screen bg-black">
      <div className="bg-noise absolute inset-0 opacity-[0.15]" />

      <div className="relative z-10 px-4 py-20 md:px-6 md:py-32">
        <div className="mx-auto mb-12 max-w-7xl md:mb-16">
          <p className="eyebrow">About</p>
          <h2 className="mt-4 mb-4 max-w-4xl text-primary section-title">
            Work timeline.
          </h2>
          <p className="max-w-2xl section-lead tone-subtle">
            Projects show outcomes. This section shows how scope and ownership grew.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              {...getScaleInMotion(shouldReduceMotion)}
              className="flex flex-col justify-between surface p-6 card-ratio"
            >
              <div>
                <p className="text-sm tone-subtle">00</p>
                <h3 className="mt-8 text-primary hero-card-title">
                  Career
                </h3>
              </div>

              <div>
                <p className="text-sm leading-6 tone-muted">
                  From iOS product delivery to high-scale backend ownership and modernization
                  standards across larger systems.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href={socialLinks.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-black transition-colors duration-300 hover:bg-[var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  >
                    <Download size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    CV
                  </a>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm text-primary transition-colors duration-300 hover:border-[var(--border-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  >
                    Contact
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </motion.div>

            {workExperience.map((exp, index) => {
              const context = timelineContext.find((item) => item.company === exp.company);

              return (
                <motion.article
                  key={exp.company}
                  {...getScaleInMotion(shouldReduceMotion, { delay: (index + 1) * 0.1 })}
                  className="flex flex-col surface-strong p-6 card-ratio"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm tone-subtle">{String(index + 1).padStart(2, '0')}</span>
                    <span className="meta-label tone-subtle">{context?.phase}</span>
                  </div>

                  <h3 className="text-primary metric-title">
                    {exp.company}
                  </h3>
                  <p className="mt-3 meta-label tone-subtle">{exp.role}</p>

                  <div className="mt-6 space-y-3 meta-label tone-subtle">
                    <p className="inline-flex items-center gap-2">
                      <CalendarDays size={14} />
                      {exp.period}
                    </p>
                  </div>

                  <p className="mt-6 flex-grow text-sm leading-6 tone-muted">
                    {context?.summary ?? exp.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {(context?.proof ?? []).map((item) => (
                      <span key={item} className="pill meta-label">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            {...getRevealMotion(shouldReduceMotion, { margin: '-100px' })}
            className="mt-12 grid gap-2 border-t border-[var(--border)] pt-12 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]"
          >
            <div>
              <p className="eyebrow">Stack</p>
              <h3 className="mt-4 max-w-xl text-primary section-subtitle">
                Stack</h3>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill.category} className="surface p-5">
                  <p className="text-primary stack-label">
                    {skill.category}
                  </p>
                  <p className="mt-4 text-sm leading-6 tone-muted">{skill.skills}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...getRevealMotion(shouldReduceMotion, { margin: '-100px' })}
            className="mt-12 border-t border-[var(--border)] pt-12"
          >
            <p className="eyebrow">Education</p>
            <div className="mt-6 grid gap-2 md:grid-cols-2">
              {education.map((edu) => (
                <div key={edu.degree} className="surface p-6">
                  <p className="text-sm tone-subtle">{edu.period}</p>
                  <h3 className="mt-3 text-primary degree-title">
                    {edu.degree}
                  </h3>
                  <p className="mt-2 text-sm tone-muted">
                    {edu.institution} · {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
