import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-navy-950 flex flex-col items-center justify-center gap-4">
      <div className="relative w-16 h-16 animate-pulse">
        <Image src="/logo-icon.svg" alt="Metro Ventures Loading" fill className="object-contain" />
      </div>
      <div className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold-400">
        Loading Metro Ventures...
      </div>
    </div>
  );
}

