"use client";

import React, { useState, useEffect } from "react";
import { Phone, ArrowUp } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/data/config";

export function FloatingActions() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-brand-gold-400 via-brand-gold-500 to-amber-300 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Floating Action Buttons (Right-Bottom) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-11 h-11 rounded-full bg-brand-navy-900/90 text-brand-gold-400 border border-brand-gold-500/30 shadow-xl backdrop-blur-md flex items-center justify-center hover:bg-brand-navy-800 hover:scale-110 active:scale-95 transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Mobile Quick Call Button */}
        <a
          href={`tel:${siteConfig.phone}`}
          aria-label="Call Metro Ventures"
          className="sm:hidden w-12 h-12 rounded-full bg-brand-navy-900/95 text-slate-100 border border-brand-gold-500/50 shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
        >
          <Phone className="w-5 h-5 text-brand-gold-400" />
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Metro Ventures on WhatsApp"
          className="group relative flex items-center gap-2.5 px-3.5 py-3 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 hover:bg-[#20BD5A] hover:scale-105 active:scale-95 transition-all"
        >
          {/* Pulsing radar ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:opacity-40" />

          <WhatsAppIcon className="w-5 h-5 shrink-0 relative" />
          <span className="hidden sm:inline-block text-xs font-semibold tracking-wide pr-1 relative">
            WhatsApp
          </span>
        </a>
      </div>
    </>
  );
}

