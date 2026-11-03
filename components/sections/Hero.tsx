"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, HardHat, FileCheck2, MapPin, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/config";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden architectural-grid">
      {/* Cinematic ambient background glow and vignettes */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-950 via-brand-navy-900/90 to-brand-navy-950 pointer-events-none" />
      
      {/* Luxury gold architectural light rays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Subtle Brand Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-navy-800/80 border border-brand-gold-500/30 backdrop-blur-md mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-brand-gold-400 animate-pulse" />
          <span className="text-xs uppercase font-medium tracking-[0.25em] text-brand-gold-300">
            Karnataka’s Premier Real Estate &amp; Construction Firm
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-100 max-w-5xl mx-auto leading-[1.1] sm:leading-[1.08]"
        >
          Building Spaces.{" "}
          <span className="block mt-1 sm:mt-2 gold-gradient-text">
            Creating Value.
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl md:text-2xl font-light text-slate-300 max-w-2xl mx-auto tracking-wide"
        >
          Comprehensive Real Estate &amp; Construction Solutions
        </motion.p>

        {/* Experience Proofline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto"
        >
          Having delivered an institutional college and residential houses across{" "}
          <span className="text-slate-200 font-medium">Mysore</span>,{" "}
          <span className="text-slate-200 font-medium">Bangalore</span>,{" "}
          <span className="text-slate-200 font-medium">Mangalore</span>, and Karnataka.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <Link
            href="/#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest text-brand-navy-950 bg-gradient-to-r from-brand-gold-400 via-brand-gold-500 to-brand-gold-600 rounded-xl shadow-xl shadow-brand-gold-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Get a Free Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider text-slate-200 bg-brand-navy-900/80 border border-slate-700/80 hover:border-brand-gold-500/50 hover:bg-brand-navy-800 rounded-xl transition-all"
          >
            <span>Our Services</span>
          </Link>
        </motion.div>

        {/* Key Pillars Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 text-left">
            <div className="w-10 h-10 rounded-lg bg-brand-navy-800 border border-brand-gold-500/30 flex items-center justify-center text-brand-gold-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-100">Transparency</div>
              <div className="text-xs text-slate-400">Clear dealings &amp; open communication</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-left">
            <div className="w-10 h-10 rounded-lg bg-brand-navy-800 border border-brand-gold-500/30 flex items-center justify-center text-brand-gold-400 shrink-0">
              <HardHat className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-100">Quality Craftsmanship</div>
              <div className="text-xs text-slate-400">Architectural rigor &amp; longevity</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-left">
            <div className="w-10 h-10 rounded-lg bg-brand-navy-800 border border-brand-gold-500/30 flex items-center justify-center text-brand-gold-400 shrink-0">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-100">Legal Integrity</div>
              <div className="text-xs text-slate-400">In-house title &amp; 9/11 clearance</div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-14 inline-block text-slate-500 hover:text-brand-gold-400 transition-colors"
        >
          <Link href="/#overview" aria-label="Scroll to Executive Overview">
            <ChevronDown className="w-6 h-6 mx-auto opacity-70" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

