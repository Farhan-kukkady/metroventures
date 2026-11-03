"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { companyData } from "@/data/company";

export function AreasSection() {
  return (
    <section id="locations" className="relative py-20 bg-brand-navy-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-900 border border-brand-gold-500/30 text-xs uppercase font-semibold tracking-widest text-brand-gold-400 mb-4">
            Coverage
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Areas We Serve Across Karnataka
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-brand-gold-500 to-transparent mt-3 mb-4" />
          <p className="text-sm sm:text-base text-slate-300 font-light">
            Providing tailored real estate transactions, turnkey construction, and statutory legal
            documentation in key districts across Karnataka.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.areasServed.map((area, idx) => (
            <motion.div
              key={area.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-brand-navy-900/60 border border-slate-800 hover:border-brand-gold-500/40 hover:bg-brand-navy-900 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-navy-800 border border-brand-gold-500/20 flex items-center justify-center text-brand-gold-400 mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-slate-100 mb-1">
                  {area.title}
                </h3>
                <div className="text-[11px] font-mono uppercase text-brand-gold-400 mb-3">
                  {area.highlight}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Active Regional Hub</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-gold-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

