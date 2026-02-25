"use client";

import { motion } from "framer-motion";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-24"
    >
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
    </motion.main>
  );
}
