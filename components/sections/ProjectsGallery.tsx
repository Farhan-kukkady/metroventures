"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Tag, Eye, ChevronRight, Filter } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";
import { LightboxModal } from "@/components/ui/LightboxModal";

type CategoryFilter = "All" | "Institutional" | "Residential";
type CityFilter = "All Cities" | "Mysore" | "Bangalore" | "Mangalore" | "Other Karnataka";

export function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [selectedCity, setSelectedCity] = useState<CityFilter>("All Cities");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories: CategoryFilter[] = ["All", "Institutional", "Residential"];
  const cities: CityFilter[] = [
    "All Cities",
    "Mysore",
    "Bangalore",
    "Mangalore",
    "Other Karnataka",
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((item) => {
      const categoryMatch =
        selectedCategory === "All" || item.category === selectedCategory;
      const cityMatch =
        selectedCity === "All Cities" || item.city === selectedCity;
      return categoryMatch && cityMatch;
    });
  }, [selectedCategory, selectedCity]);

  return (
    <section id="projects" className="relative py-24 bg-brand-navy-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-800 border border-brand-gold-500/30 text-xs uppercase font-semibold tracking-widest text-brand-gold-400 mb-4">
            Completed Developments
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Our Work Across Karnataka
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-gold-500 to-transparent mt-4 mb-6" />
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            From institutional educational campuses to bespoke private residences across Mysore,
            Bangalore, Mangalore, and Karnataka.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-slate-800">
          {/* Primary Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-brand-gold-400" /> Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-brand-gold-500 text-brand-navy-950 shadow-md shadow-brand-gold-500/20"
                    : "bg-brand-navy-800/80 text-slate-300 hover:bg-brand-navy-700 hover:text-white border border-slate-700/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Secondary City Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400 mr-2 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-brand-gold-400" /> Location:
            </span>
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCity === city
                    ? "bg-brand-gold-400/20 text-brand-gold-300 border border-brand-gold-400/60"
                    : "bg-brand-navy-950/70 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group relative cursor-pointer rounded-2xl bg-brand-navy-950 border border-slate-800 hover:border-brand-gold-500/50 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-brand-gold-500/10 transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative w-full h-64 overflow-hidden bg-brand-navy-850">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded text-[11px] font-semibold uppercase tracking-wider bg-brand-navy-950/80 backdrop-blur-md border border-brand-gold-500/30 text-brand-gold-300">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded text-[11px] font-medium bg-brand-navy-950/80 backdrop-blur-md border border-slate-700 text-slate-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-gold-400" />
                      {project.cityLabel}
                    </span>
                  </div>

                  {/* View indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-navy-950/50 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold-500 text-brand-navy-950 text-xs font-bold uppercase tracking-wider shadow-lg">
                      <Eye className="w-4 h-4" /> View Project Details
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif-heading text-xl font-bold text-slate-100 group-hover:text-brand-gold-300 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-brand-gold-400 font-medium">
                    <span>{project.images.length} Photos Available</span>
                    <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Inspect <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-slate-400 bg-brand-navy-950 rounded-2xl border border-slate-800">
            <p className="text-base">No developments found matching the selected filters.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedCity("All Cities");
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold uppercase text-brand-gold-400 border border-brand-gold-500/30 rounded-lg hover:bg-brand-navy-800"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal with carousel */}
      <LightboxModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}

