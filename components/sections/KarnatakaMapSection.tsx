"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Building, Home, Scale, Compass, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/config";

interface CityPin {
  id: string;
  name: string;
  subtitle: string;
  x: number;
  y: number;
  projectsInfo: string;
  type: string;
}

const cityPins: CityPin[] = [
  {
    id: "bangalore",
    name: "Bangalore (Bengaluru)",
    subtitle: "Capital & Tech Hub",
    x: 68,
    y: 72,
    projectsInfo: "Custom smart residential homes & commercial real estate transactions.",
    type: "Residential & Commercial",
  },
  {
    id: "mysore",
    name: "Mysore (Mysuru)",
    subtitle: "Heritage & Educational Hub",
    x: 58,
    y: 84,
    projectsInfo: "Institutional college infrastructure, residential villas, and custom homes.",
    type: "Institutional & Residential",
  },
  {
    id: "mangalore",
    name: "Mangalore (Mangaluru)",
    subtitle: "Coastal Gateway",
    x: 34,
    y: 70,
    projectsInfo: "Coastal engineered residential homes, monsoon-resilient builds, and estates.",
    type: "Coastal Residential",
  },
];

export function KarnatakaMapSection() {
  const [activePin, setActivePin] = useState<CityPin>(cityPins[0]);

  return (
    <section id="karnataka-map" className="relative py-24 bg-brand-navy-950 border-t border-slate-800 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-900 border border-brand-gold-500/30 text-xs uppercase font-semibold tracking-widest text-brand-gold-400 mb-4">
            <Compass className="w-3.5 h-3.5 text-brand-gold-400" /> State-Wide Footprint
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Where We’ve Built
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-gold-500 to-transparent mt-4 mb-6" />
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Delivering institutional and residential landmarks across Karnataka’s primary urban and
            regional growth centers.
          </p>
        </div>

        {/* Map & City Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Stylized Karnataka Map SVG */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-[4/5] p-6 rounded-2xl bg-brand-navy-900/60 border border-brand-gold-500/30 shadow-2xl flex items-center justify-center">
              {/* Grid backdrop */}
              <div className="absolute inset-0 architectural-grid opacity-50 rounded-2xl pointer-events-none" />

              <svg
                viewBox="0 0 400 500"
                className="w-full h-full drop-shadow-[0_0_25px_rgba(197,168,105,0.12)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylized Karnataka State Outline */}
                <path
                  d="M175,25 
                     L210,40 L240,65 L265,100 L250,135 L280,170 
                     L295,215 L275,250 L285,290 L260,325 L245,340 
                     L265,375 L255,420 L220,455 L180,440 L160,405 
                     L135,370 L115,345 L110,290 L125,240 L135,190 
                     L145,150 L140,110 L155,60 Z"
                  fill="#0F172A"
                  stroke="#C5A869"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                  className="opacity-90"
                />

                {/* Regional Contour Details */}
                <path
                  d="M165,110 L235,145 M135,195 L270,225 M115,290 L265,325 M135,370 L255,385"
                  stroke="#334155"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                />

                {/* State Label */}
                <text
                  x="200"
                  y="200"
                  textAnchor="middle"
                  fill="#475569"
                  fontSize="16"
                  fontFamily="'Cinzel', serif"
                  letterSpacing="6"
                  fontWeight="bold"
                >
                  KARNATAKA
                </text>

                {/* City Pins */}
                {/* Bangalore */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setActivePin(cityPins[0])}
                  transform="translate(250, 370)"
                >
                  <circle r="18" fill="#C5A869" fillOpacity="0.2" className="animate-ping" />
                  <circle r="7" fill={activePin.id === "bangalore" ? "#F59E0B" : "#C5A869"} stroke="#0F172A" strokeWidth="2" />
                  <circle r="3" fill="#FFFFFF" />
                  <text
                    x="14"
                    y="4"
                    fill={activePin.id === "bangalore" ? "#F3E5BE" : "#CBD5E1"}
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="'Inter', sans-serif"
                    className="drop-shadow-md"
                  >
                    Bangalore
                  </text>
                </g>

                {/* Mysore */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setActivePin(cityPins[1])}
                  transform="translate(210, 420)"
                >
                  <circle r="18" fill="#C5A869" fillOpacity="0.2" className="animate-ping" />
                  <circle r="7" fill={activePin.id === "mysore" ? "#F59E0B" : "#C5A869"} stroke="#0F172A" strokeWidth="2" />
                  <circle r="3" fill="#FFFFFF" />
                  <text
                    x="14"
                    y="4"
                    fill={activePin.id === "mysore" ? "#F3E5BE" : "#CBD5E1"}
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="'Inter', sans-serif"
                    className="drop-shadow-md"
                  >
                    Mysore
                  </text>
                </g>

                {/* Mangalore */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setActivePin(cityPins[2])}
                  transform="translate(125, 345)"
                >
                  <circle r="18" fill="#C5A869" fillOpacity="0.2" className="animate-ping" />
                  <circle r="7" fill={activePin.id === "mangalore" ? "#F59E0B" : "#C5A869"} stroke="#0F172A" strokeWidth="2" />
                  <circle r="3" fill="#FFFFFF" />
                  <text
                    x="-12"
                    y="-12"
                    textAnchor="end"
                    fill={activePin.id === "mangalore" ? "#F3E5BE" : "#CBD5E1"}
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="'Inter', sans-serif"
                    className="drop-shadow-md"
                  >
                    Mangalore
                  </text>
                </g>

                {/* Connection lines between hubs */}
                <path
                  d="M250,370 L210,420 M210,420 L125,345"
                  stroke="#C5A869"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  opacity="0.6"
                />
              </svg>

              <div className="absolute bottom-3 left-4 text-[10px] uppercase font-mono text-slate-400">
                Interactive Karnataka Map · Tap Pin to Inspect
              </div>
            </div>
          </div>

          {/* Active City Details Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-brand-navy-900 border border-brand-gold-500/40 shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-gold-400 mb-2">
                <MapPin className="w-4 h-4 text-brand-gold-500" />
                <span>Selected Region</span>
              </div>
              <h3 className="font-serif-heading text-3xl font-bold text-slate-100 mb-1">
                {activePin.name}
              </h3>
              <div className="text-xs text-slate-400 mb-6 font-medium">
                {activePin.subtitle}
              </div>

              <div className="p-4 rounded-xl bg-brand-navy-950 border border-slate-800 mb-6">
                <div className="text-xs uppercase font-semibold text-slate-400 mb-1">
                  Deliveries &amp; Focus:
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {activePin.projectsInfo}
                </p>
              </div>

              {/* City quick selector buttons */}
              <div className="space-y-2">
                <div className="text-xs uppercase font-semibold text-slate-400">
                  Select Hub to Highlight:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {cityPins.map((pin) => (
                    <button
                      key={pin.id}
                      onClick={() => setActivePin(pin)}
                      className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                        activePin.id === pin.id
                          ? "bg-brand-gold-500 text-brand-navy-950 shadow-md"
                          : "bg-brand-navy-950 text-slate-300 hover:bg-brand-navy-800 border border-slate-800"
                      }`}
                    >
                      {pin.name.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* "Projects Delivered" Summary Strip (Strictly without invented counts) */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-brand-navy-900 via-brand-navy-850 to-brand-navy-900 border border-brand-gold-500/30 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gold-400 block mb-1">
                Portfolio Summary
              </span>
              <h4 className="font-serif-heading text-2xl font-bold text-slate-100">
                Projects Delivered Across Karnataka
              </h4>
            </div>
            <div className="text-xs text-slate-400 text-center md:text-right">
              Verified categories and geographic delivery sectors
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {/* Category 1: Institutional */}
            <div className="p-4 rounded-xl bg-brand-navy-950/70 border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-brand-navy-800 border border-brand-gold-500/20 flex items-center justify-center text-brand-gold-400 mb-3">
                <Building className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-400 uppercase font-mono">Category</div>
              <div className="text-base font-bold text-slate-100 mt-0.5">
                Institutional Development
              </div>
              <div className="text-xs text-slate-300 mt-1">
                College Campus &amp; Academic Infrastructure
              </div>
              {siteConfig.metrics?.collegeCount && (
                <div className="mt-2 text-sm font-bold text-brand-gold-400">
                  {siteConfig.metrics.collegeCount} Projects
                </div>
              )}
            </div>

            {/* Category 2: Residential */}
            <div className="p-4 rounded-xl bg-brand-navy-950/70 border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-brand-navy-800 border border-brand-gold-500/20 flex items-center justify-center text-brand-gold-400 mb-3">
                <Home className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-400 uppercase font-mono">Category</div>
              <div className="text-base font-bold text-slate-100 mt-0.5">
                Residential Houses
              </div>
              <div className="text-xs text-slate-300 mt-1">
                Multiple Custom Residences &amp; Villas
              </div>
              {siteConfig.metrics?.residentialCount && (
                <div className="mt-2 text-sm font-bold text-brand-gold-400">
                  {siteConfig.metrics.residentialCount} Homes
                </div>
              )}
            </div>

            {/* Category 3: Cities Served */}
            <div className="p-4 rounded-xl bg-brand-navy-950/70 border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-brand-navy-800 border border-brand-gold-500/20 flex items-center justify-center text-brand-gold-400 mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-400 uppercase font-mono">Territories</div>
              <div className="text-base font-bold text-slate-100 mt-0.5">
                Key Cities Served
              </div>
              <div className="text-xs text-slate-300 mt-1">
                Mysore, Bangalore, Mangalore, Karnataka
              </div>
              {siteConfig.metrics?.citiesServedCount && (
                <div className="mt-2 text-sm font-bold text-brand-gold-400">
                  {siteConfig.metrics.citiesServedCount} Regions
                </div>
              )}
            </div>

            {/* Category 4: Compliance */}
            <div className="p-4 rounded-xl bg-brand-navy-950/70 border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-brand-navy-800 border border-brand-gold-500/20 flex items-center justify-center text-brand-gold-400 mb-3">
                <Scale className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-400 uppercase font-mono">Compliance</div>
              <div className="text-base font-bold text-slate-100 mt-0.5">
                Legal Due Diligence
              </div>
              <div className="text-xs text-slate-300 mt-1">
                100% In-House Title &amp; 9/11 Approvals
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

