"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Shield, Award, Scale, ArrowUpRight } from "lucide-react";
import { companyData } from "@/data/company";

export function LeadershipSection() {
  const roleBadges: Record<string, React.ReactNode> = {
    Director: <Award className="w-3.5 h-3.5 text-brand-gold-400" />,
    "Co-Director": <Shield className="w-3.5 h-3.5 text-brand-gold-400" />,
    "Legal Advisor": <Scale className="w-3.5 h-3.5 text-brand-gold-400" />,
  };

  return (
    <section id="leadership" className="relative py-24 bg-brand-navy-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-800 border border-brand-gold-500/30 text-xs uppercase font-semibold tracking-widest text-brand-gold-400 mb-4">
            Executive Leadership
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Leadership &amp; Key Contacts
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-gold-500 to-transparent mt-4 mb-6" />
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Direct access to decision-makers. Connect directly with our directors and legal counsel
            for real estate acquisition, construction partnerships, and title due diligence.
          </p>
        </div>

        {/* 3 Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companyData.leadership.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group p-8 rounded-2xl bg-brand-navy-950 border border-slate-800 hover:border-brand-gold-500/50 hover:bg-brand-navy-950/90 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Monogram Initials Avatar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-navy-850 to-brand-navy-900 border-2 border-brand-gold-500/40 flex items-center justify-center text-2xl font-serif-heading font-bold gold-gradient-text shadow-xl group-hover:scale-105 group-hover:border-brand-gold-400 transition-all">
                    {leader.initials}
                    {/* Corner accent */}
                    <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-brand-gold-400 rounded-full" />
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-navy-850 border border-brand-gold-500/30 text-brand-gold-300">
                    {roleBadges[leader.role]}
                    {leader.role}
                  </span>
                </div>

                <h3 className="font-serif-heading text-2xl font-bold text-slate-100 mb-1 group-hover:text-brand-gold-300 transition-colors">
                  {leader.name}
                </h3>
                <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
                  {leader.role} · Metro Ventures
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {leader.bio}
                </p>
              </div>

              {/* Action Buttons: Direct Call & WhatsApp */}
              <div className="pt-6 border-t border-slate-800/80 space-y-3">
                <a
                  href={`tel:${leader.phone}`}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-brand-navy-900 hover:bg-brand-navy-800 border border-slate-700/80 hover:border-brand-gold-500/50 text-slate-200 text-xs font-semibold transition-all group/call"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-brand-gold-400" />
                    <span>Call: {leader.phoneDisplay}</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover/call:text-brand-gold-400 transition-colors" />
                </a>

                <a
                  href={`https://wa.me/${leader.whatsapp}?text=${encodeURIComponent(
                    `Hello ${leader.name}, I would like to consult with you regarding Metro Ventures services in Karnataka.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] hover:text-white text-xs font-semibold transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

