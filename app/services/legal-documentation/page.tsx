import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  FileCheck2,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Phone,
  Scale,
  ShieldCheck,
  AlertTriangle,
  FileText,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Legal & Documentation Support Karnataka | 9/11 Documents & Title Clearance | Metro Ventures",
  description:
    "Full assistance in identifying, rectifying and standardizing improper property documents, land title clearance, and emergency 9/11 regulatory approvals across Karnataka headed by Legal Advisor Jaysheel.",
  keywords: [
    "property documentation Karnataka",
    "9/11 documents Karnataka",
    "Form 9 Form 11 property Bangalore",
    "property title clearance Mysore",
    "rectify property papers Karnataka",
    "legal advisor real estate Mangalore",
    "gramatana property legal assistance",
  ],
};

export default function LegalDocumentationPage() {
  const service = servicesData.find((s) => s.slug === "legal-documentation")!;
  const legalAdvisor = companyData.leadership.find((l) => l.role === "Legal Advisor")!;

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
              <FileCheck2 className="w-3.5 h-3.5" /> Division {service.number}
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

        {/* Legal Advisor Lead Strip */}
        <div className="p-8 rounded-2xl bg-brand-navy-900 border border-brand-gold-500/30 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-brand-navy-850 border border-brand-gold-500/40 flex items-center justify-center text-xl font-serif-heading font-bold gold-gradient-text shrink-0">
              {legalAdvisor.initials}
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gold-400">
                Division Lead
              </span>
              <div className="font-serif-heading text-xl font-bold text-slate-100">
                {legalAdvisor.name} · Legal Advisor
              </div>
              <p className="text-xs text-slate-300">
                Direct Contact: {legalAdvisor.phoneDisplay}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${legalAdvisor.phone}`}
              className="px-5 py-2.5 rounded-xl bg-brand-gold-500 text-brand-navy-950 text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-400 transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" /> Call Legal Advisor
            </a>
            <a
              href={`https://wa.me/${legalAdvisor.whatsapp}?text=${encodeURIComponent(
                "Hello Jaysheel sir, I require legal documentation / title assistance for property in Karnataka."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/30 transition-all flex items-center gap-1.5"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Executive Overview & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-slate-100">
              Rectifying Complex Titles &amp; 9/11 Regulatory Approvals
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              {service.fullDescription}
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              In Karnataka, property transactions frequently stall due to outdated village maps,
              unregistered partitions, missing parent deeds, or ambiguous Gramatana boundaries.
              Our dedicated legal cell conducts forensic chain-of-title checks, rectifies title breaks,
              and coordinates official municipal Form 9 and Form 11 (9/11) document issuance.
            </p>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-brand-navy-900 border border-slate-800 space-y-4">
            <h3 className="text-xs uppercase font-bold tracking-widest text-brand-gold-400">
              Legal Assurances
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

        {/* Core Capabilities */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gold-400 block mb-1">
              Legal Services
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-slate-100">
              Documentation &amp; Compliance Capabilities
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

        {/* CTA Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-navy-900 via-brand-navy-850 to-brand-navy-900 border border-brand-gold-500/30 text-center space-y-6">
          <h2 className="font-serif-heading text-3xl font-bold text-slate-100">
            Have Document Discrepancies or Need 9/11 Clearances?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light">
            Do not let paperwork errors risk your hard-earned capital. Consult our legal advisor
            Jaysheel directly or submit your document queries below.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl bg-brand-gold-500 text-brand-navy-950 text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-400 transition-all shadow-lg"
            >
              Request Document Vetting
            </Link>
            <a
              href={`tel:${legalAdvisor.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy-950 border border-slate-700 text-slate-200 text-xs font-semibold hover:border-brand-gold-500 transition-all"
            >
              <Phone className="w-4 h-4 text-brand-gold-400" />
              <span>Call Legal Advisor: {legalAdvisor.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

