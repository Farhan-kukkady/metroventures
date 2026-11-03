"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Compass, Sparkles } from "lucide-react";
import { companyData } from "@/data/company";

export function VisionMission() {
  return (
    <section className="relative py-24 bg-brand-navy-950 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-900 border border-brand-gold-500/30 text-xs uppercase font-semibold tracking-widest text-brand-gold-400 mb-4">
            Guiding Principles
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Our Purpose &amp; Aspiration
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-gold-500 to-transparent mt-4" />
        </div>

        {/* Dual Panel Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-navy-900 to-brand-navy-950 border border-brand-gold-500/30 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold-500/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-navy-800 border border-brand-gold-500/40 flex items-center justify-center text-brand-gold-400 mb-8 shadow-lg">
                <Target className="w-7 h-7" />
              </div>

              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold-400 block mb-2 font-semibold">
                Our Commitment
              </span>
              <h3 className="font-serif-heading text-3xl sm:text-4xl font-bold text-slate-100 mb-6">
                Our Mission
              </h3>

              <blockquote className="font-display-heading text-lg sm:text-xl text-slate-200 leading-relaxed font-light italic">
                &ldquo;{companyData.mission}&rdquo;
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-gold-400/80">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Excellence In Every Project</span>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-navy-900 to-brand-navy-950 border border-brand-gold-500/30 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient blue/gold glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-navy-800 border border-brand-gold-500/40 flex items-center justify-center text-brand-gold-400 mb-8 shadow-lg">
                <Compass className="w-7 h-7" />
              </div>

              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold-400 block mb-2 font-semibold">
                Our Future
              </span>
              <h3 className="font-serif-heading text-3xl sm:text-4xl font-bold text-slate-100 mb-6">
                Our Vision
              </h3>

              <blockquote className="font-display-heading text-lg sm:text-xl text-slate-200 leading-relaxed font-light italic">
                &ldquo;{companyData.vision}&rdquo;
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-gold-400/80">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transforming Spaces &amp; Creating Value</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

