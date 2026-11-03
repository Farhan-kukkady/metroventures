"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileText, Hammer, Key, Check } from "lucide-react";
import { companyData } from "@/data/company";

export function ProcessSection() {
  const stepIcons = [
    <MessageSquare key="1" className="w-6 h-6 text-brand-gold-400" />,
    <FileText key="2" className="w-6 h-6 text-brand-gold-400" />,
    <Hammer key="3" className="w-6 h-6 text-brand-gold-400" />,
    <Key key="4" className="w-6 h-6 text-brand-gold-400" />,
  ];

  return (
    <section id="process" className="relative py-24 bg-brand-navy-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-800 border border-brand-gold-500/30 text-xs uppercase font-semibold tracking-widest text-brand-gold-400 mb-4">
            Structured Execution
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Our 4-Stage Process
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-gold-500 to-transparent mt-4 mb-6" />
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            From preliminary land appraisal to key handover, our systematic roadmap delivers
            absolute clarity, uncompromised quality, and punctuality at every milestone.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Subtle horizontal connecting bar for desktop */}
          <div className="hidden lg:block absolute top-1/4 left-16 right-16 h-0.5 bg-gradient-to-r from-brand-gold-500/10 via-brand-gold-500/30 to-brand-gold-500/10 -z-0" />

          {companyData.process.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative z-10 flex flex-col justify-between p-8 rounded-2xl bg-brand-navy-950 border border-slate-800 hover:border-brand-gold-500/50 hover:bg-brand-navy-950/90 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Step Circle & Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-navy-900 border border-brand-gold-500/40 flex items-center justify-center group-hover:scale-110 group-hover:border-brand-gold-500 transition-all shadow-md">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-mono text-3xl font-extrabold text-slate-700 group-hover:text-brand-gold-500/40 transition-colors">
                    {step.step}
                  </span>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-widest text-brand-gold-400 mb-1">
                  Stage {step.step}
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-slate-100 mb-3 group-hover:text-brand-gold-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables checklist */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                  Milestone Deliverables:
                </span>
                {step.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-brand-gold-400 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

