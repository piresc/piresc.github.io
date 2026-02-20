"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { AboutHero } from "@/components/AboutHero";
import { AboutStats } from "@/components/AboutStats";
import { WorkTimeline } from "@/components/WorkTimeline";
import { TechStack } from "@/components/TechStack";
import { AboutCTA } from "@/components/AboutCTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <AboutHero />
        <AboutStats />
        <WorkTimeline />
        <TechStack />
        <AboutCTA />
      </motion.main>
    </div>
  );
}
