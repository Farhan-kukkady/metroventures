import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Building2,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  TrendingUp,
  ShieldCheck,
  Search,
  FileCheck,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Real Estate Services in Karnataka | Buying, Selling & Leasing | Metro Ventures",
  description:
    "Metro Ventures provides trusted real estate buying, selling, leasing, and investment advisory across residential, commercial, and agricultural properties in Mysore, Bangalore, Mangalore, and Karnataka.",
  keywords: [
    "real estate services Karnataka",
    "buy property Mysore",
    "commercial real estate Bangalore",
    "agricultural land Karnataka",
    "property leasing Mangalore",
    "real estate advisory Karnataka",
  ],
};

export default function RealEstateServicePage() {
  const service = servicesData.find((s) => s.slug === "real-estate")!;

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
              <Building2 className="w-3.5 h-3.5" /> Division {service.number}
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

        {/* Executive Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-slate-100">
              Strategic Real Estate Advisory Across Karnataka
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              {service.fullDescription}
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Our market insights bridge institutional due diligence with grassroots ground
              intelligence in Mysore, Bangalore, and Mangalore. We ensure every parcel of land,
              residential home, or commercial structure has clear title lineage and optimum investment
              appreciation potential.
            </p>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-brand-navy-900 border border-slate-800 space-y-4">
            <h3 className="text-xs uppercase font-bold tracking-widest text-brand-gold-400">
              Division Highlights
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

        {/* Core Capabilities Detailed Grid */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gold-400 block mb-1">
              Capabilities
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-slate-100">
              Services We Deliver
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-8 rounded-2xl bg-brand-navy-900/80 border border-slate-800 hover:border-brand-gold-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif-heading text-xl font-bold text-slate-100 mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Consultation Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-navy-900 via-brand-navy-850 to-brand-navy-900 border border-brand-gold-500/30 text-center space-y-6">
          <h2 className="font-serif-heading text-3xl font-bold text-slate-100">
            Consult on Real Estate Acquisitions &amp; Sales
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light">
            Contact our leadership team directly to discuss verified property purchases, commercial
            leasing, or land acquisition across Karnataka.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl bg-brand-gold-500 text-brand-navy-950 text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-400 transition-all shadow-lg"
            >
              Request Free Property Consultation
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

