"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin, Tag, CheckCircle2 } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface LightboxModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function LightboxModal({ project, onClose }: LightboxModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, currentImageIndex]);

  if (!project) return null;

  const images = project.images && project.images.length > 0 ? project.images : [];

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-brand-navy-950 border border-brand-gold-500/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-brand-navy-900/80 text-slate-300 hover:text-white hover:bg-brand-gold-500 hover:text-brand-navy-950 transition-all flex items-center justify-center border border-slate-700 focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Carousel Image Area */}
        <div className="relative w-full h-[320px] sm:h-[450px] bg-black select-none">
          {images.length > 0 ? (
            <Image
              src={images[currentImageIndex]}
              alt={`${project.title} - View ${currentImageIndex + 1}`}
              fill
              priority
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-500">
              No photo available
            </div>
          )}

          {/* Carousel Arrows (if > 1 image) */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-brand-navy-900/80 text-white hover:bg-brand-gold-500 hover:text-brand-navy-950 flex items-center justify-center border border-slate-700 backdrop-blur-md transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-brand-navy-900/80 text-white hover:bg-brand-gold-500 hover:text-brand-navy-950 flex items-center justify-center border border-slate-700 backdrop-blur-md transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Photo counter / thumbnail indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-slate-200">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentImageIndex ? "bg-brand-gold-400 w-6" : "bg-white/40"
                    }`}
                    aria-label={`Go to photo ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Project Details Footer */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded text-xs font-semibold bg-brand-gold-500/10 border border-brand-gold-500/30 text-brand-gold-400 flex items-center gap-1">
              <Tag className="w-3 h-3" /> {project.category}
            </span>
            <span className="px-2.5 py-1 rounded text-xs font-medium bg-brand-navy-900 border border-slate-700 text-slate-300 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-brand-gold-400" /> {project.cityLabel}
            </span>
            {project.year && (
              <span className="text-xs font-mono text-slate-400 ml-auto">
                Status: {project.year}
              </span>
            )}
          </div>

          <h3 id="lightbox-project-title" className="font-serif-heading text-2xl sm:text-3xl font-bold text-slate-100 mb-3">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs uppercase font-bold tracking-widest text-brand-gold-400 mb-3">
                Key Project Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((hl) => (
                  <div key={hl} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold-400 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

