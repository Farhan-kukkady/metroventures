"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight, ShieldCheck, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/config";

const navLinks = [
  { name: "Overview", href: "/#overview" },
  { name: "Services", href: "/#services" },
  { name: "Why Us", href: "/#why-us" },
  { name: "Projects", href: "/#projects" },
  { name: "Where We Build", href: "/#karnataka-map" },
  { name: "Process", href: "/#process" },
  { name: "Leadership", href: "/#leadership" },
  { name: "Contact", href: "/#contact" },
];

const serviceSubLinks = [
  { name: "Real Estate Services", href: "/services/real-estate", division: "01" },
  { name: "Construction & Development", href: "/services/construction", division: "02" },
  { name: "Legal & Documentation Support", href: "/services/legal-documentation", division: "03" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-2xl shadow-black/50"
          : "bg-brand-navy-950/80 backdrop-blur-md py-4 sm:py-5 border-b border-brand-gold-500/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo-icon.svg"
                alt="Metro Ventures Seal"
                width={44}
                height={44}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif-heading text-lg sm:text-xl font-bold tracking-wider gold-gradient-text">
                  METRO
                </span>
                <span className="font-serif-heading text-lg sm:text-xl font-medium tracking-wider text-slate-100">
                  VENTURES
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-medium text-slate-400">
                Karnataka, India
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
            <Link
              href="/#overview"
              className="text-slate-300 hover:text-brand-gold-400 transition-colors py-1"
            >
              Overview
            </Link>

            {/* Services with Hover Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center gap-1 text-slate-300 group-hover:text-brand-gold-400 transition-colors py-1 focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-brand-gold-500/70" />
              </button>

              <div
                className={`absolute top-full left-0 w-72 pt-3 transition-all duration-200 ${
                  servicesDropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-brand-navy-900/95 border border-brand-gold-500/30 rounded-xl p-2 shadow-2xl backdrop-blur-xl">
                  {serviceSubLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-brand-navy-800 transition-colors group/item"
                    >
                      <span className="text-xs font-mono font-bold text-brand-gold-500 mt-0.5">
                        {s.division}
                      </span>
                      <div>
                        <div className="text-sm font-medium text-slate-200 group-hover/item:text-brand-gold-300">
                          {s.name}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Detailed division breakdown
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="mt-1 pt-2 border-t border-slate-800 px-2">
                    <Link
                      href="/#services"
                      className="text-xs text-brand-gold-400 hover:underline flex items-center justify-between"
                    >
                      <span>View All Services on Home</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/#why-us"
              className="text-slate-300 hover:text-brand-gold-400 transition-colors py-1"
            >
              Why Us
            </Link>

            <Link
              href="/#projects"
              className="text-slate-300 hover:text-brand-gold-400 transition-colors py-1"
            >
              Projects
            </Link>

            <Link
              href="/#karnataka-map"
              className="text-slate-300 hover:text-brand-gold-400 transition-colors py-1"
            >
              Where We Build
            </Link>

            <Link
              href="/#leadership"
              className="text-slate-300 hover:text-brand-gold-400 transition-colors py-1"
            >
              Leadership
            </Link>

            <Link
              href="/#contact"
              className="text-slate-300 hover:text-brand-gold-400 transition-colors py-1"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-brand-gold-400 px-3 py-2 rounded-lg border border-slate-700/60 hover:border-brand-gold-500/40 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold-500" />
              <span>{siteConfig.phoneFormatted}</span>
            </a>

            <Link
              href="/#contact"
              className="relative inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-navy-950 bg-gradient-to-r from-brand-gold-400 via-brand-gold-500 to-brand-gold-600 rounded-lg hover:shadow-lg hover:shadow-brand-gold-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${siteConfig.phone}`}
              aria-label="Call Metro Ventures"
              className="p-2 rounded-lg text-brand-gold-400 border border-brand-gold-500/30"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-slate-300 hover:text-brand-gold-400 hover:bg-brand-navy-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-[65px] bg-brand-navy-950/98 backdrop-blur-2xl border-b border-brand-gold-500/20 px-6 py-6 transition-all duration-300 sm:hidden ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4 text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-brand-gold-400 py-1.5 border-b border-slate-800/80"
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Service Links */}
          <div className="py-2">
            <span className="text-xs uppercase tracking-wider text-brand-gold-400 font-semibold block mb-2">
              Dedicated Service Divisions:
            </span>
            <div className="grid gap-2 pl-2">
              {serviceSubLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-300 hover:text-brand-gold-300 flex items-center justify-between"
                >
                  <span>{s.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-gold-500/70" />
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-xs uppercase font-bold tracking-widest text-brand-navy-950 bg-gradient-to-r from-brand-gold-400 to-brand-gold-600 rounded-lg shadow-md"
            >
              Get a Free Consultation
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                siteConfig.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 text-xs uppercase font-bold tracking-widest text-slate-200 border border-brand-gold-500/40 rounded-lg bg-brand-navy-900"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

