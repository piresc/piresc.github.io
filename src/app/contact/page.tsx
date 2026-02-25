"use client";

import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-24"
    >
      <ContactSection />
    </motion.main>
  );
}
