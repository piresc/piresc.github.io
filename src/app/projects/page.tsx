"use client";

import { motion } from "framer-motion";
import ProjectsSection from "@/components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-24"
    >
      <ProjectsSection />
    </motion.main>
  );
}
