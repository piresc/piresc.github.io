"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import { projects } from "@/data/projects";
import { workExperience } from "@/data/work-experience";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <HeroSection />

      {/* Projects Preview */}
      <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto border-t border-neutral-800">
        <p className="text-sm text-neutral-500 lowercase before:content-['.']">
          selected projects
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-neutral-800 p-6 hover:border-neutral-700 transition-colors"
            >
              <p className="text-xs text-neutral-600 mb-2">{project.period}</p>
              <h3 className="text-2xl font-light mb-2">{project.title}</h3>
              <p className="text-sm text-neutral-500 mb-4 line-clamp-2">{project.overview}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="text-xs text-neutral-600 px-2 py-1 border border-neutral-800 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            view all projects
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto border-t border-neutral-800">
        <p className="text-sm text-neutral-500 lowercase before:content-['.']">
          about
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl"
        >
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-light leading-tight mb-8">
            building scalable systems and meaningful experiences
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed mb-6">
            software engineer with {workExperience.length}+ years of experience in backend development, 
            system architecture, and mobile applications. focused on creating reliable, maintainable solutions 
            that solve real problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            more about me
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* Contact Preview */}
      <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto border-t border-neutral-800">
        <p className="text-sm text-neutral-500 lowercase before:content-['.']">
          let's work together
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl"
        >
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-light leading-tight mb-8">
            open for opportunities and collaborations
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed mb-6">
            interested in backend engineering, system design, or building impactful products. 
            let's connect and create something great together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            get in touch
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </motion.main>
  );
}
