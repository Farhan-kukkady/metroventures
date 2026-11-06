import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  HardHat,
  FileCheck2,
} from "lucide-react";
import { siteConfig } from "@/data/config";
import { companyData } from "@/data/company";

export function Footer() {
  return (
    <footer className="relative bg-brand-navy-950 border-t border-brand-gold-500/20 text-slate-300 pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-brand-gold-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          {/* Col 1 & 2: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="shrink-0">
                <Image
                  src="/logo-icon-white.png"
                  alt="Metro Ventures Seal"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif-heading text-xl font-bold tracking-wider text-white">
                    METRO
                  </span>
                  <span className="font-serif-heading text-xl font-medium tracking-wider text-slate-100">
                    VENTURES
                  </span>
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-slate-400">
                  Karnataka, India
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              Metro Ventures is a full-service real estate and construction firm dedicated to
              transforming spaces, developing sustainable properties, and delivering end-to-end
              client satisfaction across Karnataka.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-300 tracking-wider uppercase">
              Building dreams creating landmarks
            </div>

            {/* Value Pillars Badges */}
            <div className="pt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium bg-brand-navy-900 border border-slate-700/80 text-slate-300">
                <ShieldCheck className="w-3 h-3 text-brand-gold-400" /> Transparency
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium bg-brand-navy-900 border border-slate-700/80 text-slate-300">
                <HardHat className="w-3 h-3 text-brand-gold-400" /> Quality Craftsmanship
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium bg-brand-navy-900 border border-slate-700/80 text-slate-300">
                <FileCheck2 className="w-3 h-3 text-brand-gold-400" /> Legal Integrity
              </span>
            </div>
          </div>

          {/* Col 3: Service Divisions */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-brand-gold-400">
              Service Divisions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/real-estate"
                  className="hover:text-brand-gold-300 transition-colors flex items-center justify-between group"
                >
                  <span>Real Estate Services</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-gold-500" />
                </Link>
                <p className="text-[11px] text-slate-400">Buying, Selling, Leasing &amp; Advisory</p>
              </li>
              <li>
                <Link
                  href="/services/construction"
                  className="hover:text-brand-gold-300 transition-colors flex items-center justify-between group"
                >
                  <span>Construction &amp; Development</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-gold-500" />
                </Link>
                <p className="text-[11px] text-slate-400">Custom Builds, College &amp; Smart Homes</p>
              </li>
              <li>
                <Link
                  href="/services/legal-documentation"
                  className="hover:text-brand-gold-300 transition-colors flex items-center justify-between group"
                >
                  <span>Legal &amp; Documentation</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-gold-500" />
                </Link>
                <p className="text-[11px] text-slate-400">Title Due Diligence &amp; 9/11 Approvals</p>
              </li>
            </ul>
          </div>

          {/* Col 4: Regions & Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-brand-gold-400">
              Areas We Serve
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-gold-500 shrink-0" />
                <span>Mysore (Mysuru)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-gold-500 shrink-0" />
                <span>Bangalore (Bengaluru)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-gold-500 shrink-0" />
                <span>Mangalore (Mangaluru)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-gold-500 shrink-0" />
                <span>Across Karnataka</span>
              </li>
            </ul>

            <h4 className="text-xs uppercase font-bold tracking-widest text-brand-gold-400 pt-2">
              Quick Links
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
              <Link href="/#overview" className="hover:text-brand-gold-300">
                Overview
              </Link>
              <Link href="/#projects" className="hover:text-brand-gold-300">
                Projects
              </Link>
              <Link href="/#process" className="hover:text-brand-gold-300">
                Process
              </Link>
              <Link href="/#leadership" className="hover:text-brand-gold-300">
                Leadership
              </Link>
              <Link href="/#contact" className="hover:text-brand-gold-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Col 5: Leadership & Contacts */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-brand-gold-400">
              Leadership &amp; Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Director</span>
                <span className="font-semibold text-slate-200">Mohammed Shafeem</span>
                <a
                  href="tel:+919008220444"
                  className="block text-brand-gold-400 hover:underline"
                >
                  +91 9008220444
                </a>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Co-Director</span>
                <span className="font-semibold text-slate-200">Ibrahim Sahil</span>
                <a
                  href="tel:+919008150444"
                  className="block text-brand-gold-400 hover:underline"
                >
                  +91 9008150444
                </a>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Legal Advisor</span>
                <span className="font-semibold text-slate-200">Jaysheel</span>
                <a
                  href="tel:+919448225876"
                  className="block text-brand-gold-400 hover:underline"
                >
                  +91 9448225876
                </a>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <span className="text-slate-400 block text-[11px]">General Enquiries</span>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-semibold text-brand-gold-300 hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-gold-500" />
                  <span>{siteConfig.phoneFormatted}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-slate-300 hover:text-brand-gold-300 hover:underline flex items-center gap-1.5 mt-1"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-gold-500" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Metro Ventures. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Comprehensive Real Estate &amp; Construction Solutions · Karnataka, India
          </p>
        </div>
      </div>
    </footer>
  );
}

