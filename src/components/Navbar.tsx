"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "projects", href: "/projects" },
  { name: "about", href: "/about" },
  { name: "contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/80 border-b border-neutral-800">
      <div className="px-6 max-w-6xl mx-auto py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-extralight lowercase tracking-tight hover:opacity-70 transition-opacity">
            .piresc
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm lowercase transition-colors duration-200 relative ${
                  pathname === link.href ? "text-white" : "text-neutral-500 hover:text-white"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                  />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left py-3 px-4 lowercase transition-colors ${
                  pathname === link.href ? "text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
