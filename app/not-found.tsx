import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Building2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-navy-950 flex items-center justify-center px-4 py-24 architectural-grid">
      <div className="max-w-md w-full text-center p-8 rounded-3xl bg-brand-navy-900 border border-brand-gold-500/30 shadow-2xl relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-brand-navy-800 border border-brand-gold-500/30 mx-auto flex items-center justify-center text-brand-gold-400 mb-6">
          <Building2 className="w-8 h-8" />
        </div>

        <div className="text-xs font-mono uppercase tracking-widest text-brand-gold-400 mb-2">
          Error 404
        </div>
        <h1 className="font-serif-heading text-3xl font-bold text-slate-100 mb-3">
          Page Not Located
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          The property division or project page you are looking for has been relocated or does
          not exist within our current directory.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-gold-500 text-brand-navy-950 text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-400 transition-all shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-navy-950 border border-slate-700 text-slate-200 text-xs font-semibold hover:border-brand-gold-500 transition-all"
          >
            <span>Contact Metro Ventures</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

