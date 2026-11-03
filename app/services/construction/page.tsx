import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  HardHat,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Phone,
  Building,
  Home,
  Leaf,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Construction & Development Services Karnataka | Custom Homes & Institutional | Metro Ventures",
  description:
    "End-to-end project management, custom residential builds, college institutional construction, green building practices, and smart home automation in Mysore, Bangalore, Mangalore, and Karnataka.",
  keywords: [
    "construction company in Mysore",
    "construction company Bangalore",
    "house construction Karnataka",
    "institutional college construction Karnataka",
    "smart home builders Bangalore",
    "sustainable green building Karnataka",
    "custom home builders Mysore",
  ],
};

export default function ConstructionServicePage() {
  const service = servicesData.find((s) => s.slug === "construction")!;

  return (
    <div className="min-h-screen bg-brand-navy-950 text-slate-100 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold-400 hover:text-brand-gold-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Divisions</span>
          </Link>
        </div>

        {/* Division Hero Header */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-navy-900 via-brand-navy-850 to-brand-navy-950 border border-brand-gold-500/40 shadow-2xl mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-800 border border-brand-gold-500/30 text-xs uppercase font-mono tracking-widest text-brand-gold-400 mb-4">
              <HardHat className="w-3.5 h-3.5" /> Division {service.number}
            </div>
            <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-slate-100 tracking-tight mb-4">
              {service.title}
            </h1>
            <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed mb-6">
              {service.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {service.sectors.map((sec) => (
                <span
                  key={sec}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-brand-navy-950 border border-brand-gold-500/30 text-brand-gold-300"
                >
                  {sec}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Track Record Highlight Strip */}
        <div className="p-8 rounded-2xl bg-brand-navy-900 border border-brand-gold-500/30 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gold-400">
              Proven Delivery
            </span>
            <div className="font-serif-heading text-xl sm:text-2xl font-bold text-slate-100">
              College Campus &amp; Multiple Residential Homes Across Karnataka
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-light">
              From large-scale institutional safety standards to intimate bespoke residential craftsmanship,
              we bring turnkey excellence to Mysore, Bangalore, Mangalore, and regional Karnataka.
            </p>
          </div>
          <Link
            href="/#projects"
            className="px-6 py-3 rounded-xl bg-brand-gold-500 text-brand-navy-950 text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-400 transition-all shrink-0"
          >
            Inspect Projects
          </Link>
        </div>

        {/* Executive Overview & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-slate-100">
              Architectural Precision &amp; Sustainable Building
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              {service.fullDescription}
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Every build is supervised by experienced site engineers and project managers. We adhere
              to strict structural codes, seismic guidelines, and environmental standards, combining
              traditional local stone and woodwork with modern glass and steel frameworks.
            </p>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-brand-navy-900 border border-slate-800 space-y-4">
            <h3 className="text-xs uppercase font-bold tracking-widest text-brand-gold-400">
              Core Specializations
            </h3>
            <ul className="space-y-3">
              {service.highlights.map((hl) => (
                <li key={hl} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold-400 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Capabilities Breakdown */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gold-400 block mb-1">
              Methodology
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-slate-100">
              End-to-End Construction Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-8 rounded-2xl bg-brand-navy-900/80 border border-slate-800 hover:border-brand-gold-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif-heading text-xl font-bold text-slate-100 mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Contact Strip */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-navy-900 via-brand-navy-850 to-brand-navy-900 border border-brand-gold-500/30 text-center space-y-6">
          <h2 className="font-serif-heading text-3xl font-bold text-slate-100">
            Build Your Vision with Metro Ventures
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light">
            Connect directly with Director Mohammed Shafeem (+91 9008220444) or Co-Director Ibrahim
            Sahil (+91 9008150444) for project planning and cost estimates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl bg-brand-gold-500 text-brand-navy-950 text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-400 transition-all shadow-lg"
            >
              Get Free Construction Consultation
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy-950 border border-slate-700 text-slate-200 text-xs font-semibold hover:border-brand-gold-500 transition-all"
            >
              <Phone className="w-4 h-4 text-brand-gold-400" />
              <span>Call: {siteConfig.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

