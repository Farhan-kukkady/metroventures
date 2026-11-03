"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, HardHat, FileCheck2, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { companyData } from "@/data/company";

export function AboutOverview() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-gold-400" />,
    Hammer: <HardHat className="w-6 h-6 text-brand-gold-400" />,
    FileCheck2: <FileCheck2 className="w-6 h-6 text-brand-gold-400" />,
  };

  return (
    <section id="overview" className="relative py-24 bg-brand-navy-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-900 border border-brand-gold-500/30 text-xs uppercase font-semibold tracking-widest text-brand-gold-400 mb-4">
            Executive Overview
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Built on Integrity. Driven by Excellence.
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-gold-500 to-transparent mt-4 mb-6" />
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            {companyData.executiveOverview}
          </p>
        </div>

        {/* Proven Experience Banner */}
        <div className="relative mb-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-brand-navy-900 via-brand-navy-850 to-brand-navy-900 border border-brand-gold-500/30 shadow-2xl overflow-hidden">
          {/* Subtle gold emblem backdrop watermark */}
          <div className="absolute right-4 -bottom-10 w-64 h-64 opacity-5 pointer-events-none">
            <Image src="/logo-icon.svg" alt="Watermark" fill className="object-contain" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gold-400">
                Karnataka Track Record
              </span>
              <p className="font-serif-heading text-xl sm:text-2xl text-slate-100 font-semibold max-w-3xl leading-snug">
                &ldquo;{companyData.experienceStatement}&rdquo;
              </p>
            </div>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-gold-500 text-brand-navy-950 text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-400 transition-all shrink-0 shadow-lg shadow-brand-gold-500/20"
            >
              <span>Explore Portfolio</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companyData.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative p-8 rounded-2xl bg-brand-navy-900/60 border border-slate-800 hover:border-brand-gold-500/50 hover:bg-brand-navy-900 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-brand-navy-800 border border-brand-gold-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-gold-500 transition-all">
                  {iconMap[pillar.iconName]}
                </div>
                <div className="text-xs uppercase font-mono tracking-widest text-brand-gold-400 mb-1">
                  {pillar.subtitle}
                </div>
                <h3 className="font-serif-heading text-2xl font-bold text-slate-100 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-400" />
                <span>Standard on every Metro Ventures project</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

