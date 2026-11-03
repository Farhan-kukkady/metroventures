"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Scale,
  Leaf,
  Cpu,
  Eye,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { companyData } from "@/data/company";

export function WhyChooseUs() {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-6 h-6 text-brand-gold-400" />,
    Scale: <Scale className="w-6 h-6 text-brand-gold-400" />,
    Leaf: <Leaf className="w-6 h-6 text-brand-gold-400" />,
    Cpu: <Cpu className="w-6 h-6 text-brand-gold-400" />,
    Eye: <Eye className="w-6 h-6 text-brand-gold-400" />,
    MapPin: <MapPin className="w-6 h-6 text-brand-gold-400" />,
  };

  return (
    <section id="why-us" className="relative py-24 bg-brand-navy-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-900 border border-brand-gold-500/30 text-xs uppercase font-semibold tracking-widest text-brand-gold-400 mb-4">
            The Metro Advantage
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Why Choose Metro Ventures
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-gold-500 to-transparent mt-4 mb-6" />
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            We eliminate the friction of fragmented contractors, ambiguous property papers, and
            unpredictable builds by delivering unified, architect-led solutions across Karnataka.
          </p>
        </div>

        {/* 6-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyData.whyChooseUs.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="group p-8 rounded-2xl bg-brand-navy-900/50 border border-slate-800 hover:border-brand-gold-500/40 hover:bg-brand-navy-900 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-navy-800 border border-brand-gold-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-gold-500 transition-all">
                  {iconMap[item.iconName]}
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-slate-100 mb-2.5 group-hover:text-brand-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <CheckCircle className="w-3.5 h-3.5 text-brand-gold-400" />
                <span>Verified Metro Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

