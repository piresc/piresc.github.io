"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm text-neutral-500 lowercase before:content-['.']"
      >
        selected projects
      </motion.p>

      <div className="mt-16 space-y-0 divide-y divide-neutral-800">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="py-16 first:pt-0"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-sm text-neutral-600">{project.period}</p>
                <p className="text-xs text-neutral-700 mt-1">{project.role}</p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-white transition-colors"
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink size={18} strokeWidth={1.5} />
                </a>
              )}
            </div>

            <h3 className="text-[clamp(2rem,5vw,3rem)] leading-tight font-normal mb-6">
              {project.title}
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm text-neutral-500 uppercase tracking-wider mb-3">Overview</h4>
                <p className="text-base text-neutral-400 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div>
                <h4 className="text-sm text-neutral-500 uppercase tracking-wider mb-3">Impact</h4>
                <ul className="space-y-2">
                  {project.impact.map((item, i) => (
                    <li key={i} className="text-sm text-neutral-400 leading-relaxed flex gap-3">
                      <span className="text-neutral-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm text-neutral-500 uppercase tracking-wider mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs text-neutral-400 px-3 py-1.5 border border-neutral-800 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
