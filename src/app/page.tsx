"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import { containerVariants } from "@/lib/animations";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      <Navbar />
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <motion.main initial="hidden" animate="visible" variants={containerVariants}>
          <HeroSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <CertificationsSection />
          <ContactSection />
        </motion.main>
      </div>
    </div>
  );
}
