"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, HardHat, FileCheck2, ArrowUpRight, Check } from "lucide-react";
import { servicesData } from "@/data/services";

export function ServicesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-7 h-7 text-brand-gold-400" />,
    HardHat: <HardHat className="w-7 h-7 text-brand-gold-400" />,
    FileCheck2: <FileCheck2 className="w-7 h-7 text-brand-gold-400" />,
  };

  return (
    <section id="services" className="relative py-24 bg-brand-navy-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-800 border border-brand-gold-500/30 text-xs uppercase font-semibold tracking-widest text-brand-gold-400 mb-4">
            Our Divisions
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Comprehensive Real Estate &amp; Construction Solutions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-gold-500 to-transparent mt-4 mb-6" />
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Three dedicated divisions delivering seamless end-to-end service across Karnataka—from
            property transactions and custom construction to complete legal title clearances.
          </p>
        </div>

        {/* 3 Division Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-brand-navy-950/80 border border-slate-800 hover:border-brand-gold-500/50 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Header row: Number + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-brand-navy-850 border border-brand-gold-500/30 flex items-center justify-center group-hover:scale-105 group-hover:border-brand-gold-500 transition-all">
                    {iconMap[service.iconName]}
                  </div>
                  <span className="font-mono text-3xl font-bold text-slate-700 group-hover:text-brand-gold-500/50 transition-colors">
                    {service.number}
                  </span>
                </div>

                <div className="text-xs uppercase font-mono tracking-widest text-brand-gold-400 mb-1">
                  Division {service.number}
                </div>
                <h3 className="font-serif-heading text-2xl font-bold text-slate-100 mb-3 group-hover:text-brand-gold-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Sectors Badges */}
                <div className="mb-6">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-2">
                    Sectors Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.sectors.map((sec) => (
                      <span
                        key={sec}
                        className="px-2.5 py-1 rounded text-xs bg-brand-navy-800 border border-slate-700 text-slate-200"
                      >
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core Capabilities */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                    Core Capabilities:
                  </span>
                  {service.capabilities.slice(0, 3).map((cap) => (
                    <div key={cap.title} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-brand-gold-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-200">{cap.title}: </span>
                        <span>{cap.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detail Page Link CTA */}
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center justify-between w-full p-4 rounded-xl bg-brand-navy-900 border border-slate-700/80 hover:border-brand-gold-500 hover:bg-brand-gold-500 hover:text-brand-navy-950 text-slate-200 text-xs font-bold uppercase tracking-wider transition-all group/btn"
              >
                <span>View Full Division Details</span>
                <ArrowUpRight className="w-4 h-4 text-brand-gold-400 group-hover/btn:text-brand-navy-950 transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

