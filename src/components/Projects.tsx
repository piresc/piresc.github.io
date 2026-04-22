import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects, workExperience, type Project } from '../data/portfolio';
import { useRef } from 'react';
import { getScaleInMotion, motionEase } from '../lib/motion';

const videoUrl = '/videos/projects.mp4';

function ProjectCard({
  number,
  project,
  index,
  shouldReduceMotion,
}: {
  number: string;
  project: Project;
  index: number;
  shouldReduceMotion: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target={project.link ? '_blank' : undefined}
      rel={project.link ? 'noopener noreferrer' : undefined}
      aria-label={`Open ${project.title}`}
      initial={shouldReduceMotion ? false : { scale: 0.95, opacity: 0 }}
      animate={isInView || shouldReduceMotion ? { scale: 1, opacity: 1 } : {}}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.5, delay: index * 0.1, ease: motionEase }
      }
      className="group surface-strong p-6 card-ratio flex flex-col transition-colors duration-300 hover:border-[var(--border-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="meta-label tone-subtle">{number}</span>
        <span className="meta-label text-right tone-subtle">{project.period}</span>
      </div>

      <h3 className="text-primary text-xl sm:text-2xl mb-1 font-medium">{project.title}</h3>
      <p className="meta-label mb-4 tone-subtle">{project.role}</p>
      <p className="text-sm leading-5 mb-5 tone-muted">{project.overview}</p>

      <ul className="space-y-2 flex-grow">
        {project.impact.slice(0, 3).map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-primary mt-2">—</span>
            <span className="text-sm tone-muted">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="pill meta-label">
            {tag}
          </span>
        ))}
      </div>

      <span className="mt-5 inline-flex items-center gap-2 text-sm text-primary">
        Open project
        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </motion.a>
  );
}

export default function Projects() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section id="projects" className="min-h-screen bg-black relative">
      <div className="bg-noise absolute inset-0 opacity-[0.15]" />

      <div className="relative z-10 px-4 md:px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto mb-12 md:mb-16">
          <h2 className="text-primary mb-4 section-title">
            Building Resilient & Scalable Distributed Systems.
          </h2>
          <p className="section-lead tone-subtle max-w-none w-full md:whitespace-nowrap">
            Specializing in high-throughput fulfillment and transforming legacy enterprise architectures at scale.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            <motion.div
              {...getScaleInMotion(shouldReduceMotion)}
              className="relative overflow-hidden surface card-ratio"
            >
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="meta-label mb-2 tone-subtle">Current Role</p>
                <p className="tone-text text-lg">
                  {workExperience[0].role}
                </p>
                <p className="mt-1 text-primary text-sm">
                  {workExperience[0].company}
                </p>
              </div>
            </motion.div>

            {projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                number={String(i + 1).padStart(2, '0')}
                project={project}
                index={i + 1}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
