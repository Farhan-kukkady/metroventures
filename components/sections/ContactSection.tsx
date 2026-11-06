"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Building2,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/data/config";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your full name (at least 2 characters)"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number (at least 10 digits)")
    .max(15, "Phone number is too long"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please choose a service of interest"),
  city: z.string().optional(),
  message: z.string().min(5, "Please enter at least 5 characters in your message"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: "Construction & Development",
      city: "Mysore",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setSubmitSuccess(true);
        reset();
        // Trigger celebratory confetti
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
            colors: ["#C5A869", "#FAF8F5", "#38BDF8"],
          });
        } catch {
          // ignore if canvas not supported
        }
      } else {
        setSubmitError(json.message || "Failed to submit enquiry. Please call us directly.");
      }
    } catch {
      setSubmitError("Network connection error. Please call +91 9035500444 directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-brand-navy-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-900 border border-brand-gold-500/30 text-xs uppercase font-semibold tracking-widest text-brand-gold-400 mb-4">
            Connect With Us
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Initiate Your Project
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-gold-500 to-transparent mt-4 mb-6" />
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Schedule a free initial consultation for your property transaction, custom home,
            institutional construction, or legal document audit.
          </p>
        </div>

        {/* Contact Grid: Left Information & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contacts & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-brand-navy-900 border border-brand-gold-500/30 shadow-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gold-400 block mb-2 font-semibold">
                Direct Channels
              </span>
              <h3 className="font-serif-heading text-2xl font-bold text-slate-100 mb-6">
                Metro Ventures Headquarters
              </h3>

              <div className="space-y-5 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy-800 border border-brand-gold-500/30 flex items-center justify-center text-brand-gold-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-medium">Company Contact</div>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-base font-semibold text-slate-100 hover:text-brand-gold-400 transition-colors"
                    >
                      {siteConfig.phoneFormatted}
                    </a>
                    <div className="text-xs text-slate-400">Available Mon - Sat for consultations</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy-800 border border-brand-gold-500/30 flex items-center justify-center text-brand-gold-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-medium">Official Email</div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-base font-semibold text-slate-100 hover:text-brand-gold-400 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                    <div className="text-xs text-slate-400">Response within 24 business hours</div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-medium">WhatsApp Direct</div>
                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                        siteConfig.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-emerald-400 hover:underline"
                    >
                      Chat at +91 9035500444
                    </a>
                    <div className="text-xs text-slate-400">Instant messaging &amp; document sharing</div>
                  </div>
                </div>

                {/* Operating Region */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy-800 border border-brand-gold-500/30 flex items-center justify-center text-brand-gold-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-medium">Operational Regions</div>
                    <div className="text-sm font-semibold text-slate-100">
                      Mysore · Bangalore · Mangalore · Karnataka
                    </div>
                    <div className="text-xs text-slate-400">On-site inspections state-wide</div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Graphic */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="relative w-full h-40 rounded-xl overflow-hidden bg-brand-navy-950 border border-slate-800 flex flex-col items-center justify-center p-4 text-center">
                  <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />
                  <Building2 className="w-8 h-8 text-brand-gold-400 mb-2 relative z-10" />
                  <span className="text-xs font-semibold text-slate-200 relative z-10">
                    Metro Ventures Regional Office
                  </span>
                  <span className="text-[11px] text-slate-400 relative z-10 mt-0.5">
                    Mysore &amp; Bangalore Central Hubs · Karnataka, India
                  </span>
                  <a
                    href="https://maps.google.com/?q=Karnataka+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-[11px] text-brand-gold-400 hover:underline relative z-10 font-medium"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-brand-navy-900 border border-brand-gold-500/30 shadow-2xl relative">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gold-400 block mb-2 font-semibold">
                Online Enquiry Form
              </span>
              <h3 className="font-serif-heading text-2xl font-bold text-slate-100 mb-6">
                Tell Us About Your Requirements
              </h3>

              {submitSuccess ? (
                <div className="p-8 rounded-xl bg-brand-navy-950 border border-brand-gold-500/50 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-gold-500/20 text-brand-gold-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="font-serif-heading text-2xl font-bold text-slate-100">
                    Enquiry Successfully Sent
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Metro Ventures. An executive team member will review
                    your requirements and contact you within 24 hours.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2.5 rounded-lg bg-brand-gold-500 text-brand-navy-950 text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-400 transition-all"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/50 flex items-start gap-3 text-red-200 text-xs">
                      <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                      <div>{submitError}</div>
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-slate-300 mb-2">
                        Full Name <span className="text-brand-gold-400">*</span>
                      </label>
                      <input
                        type="text"
                        {...register("name")}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-3 rounded-xl bg-brand-navy-950 border border-slate-700/80 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-brand-gold-500 transition-colors"
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-slate-300 mb-2">
                        Phone Number <span className="text-brand-gold-400">*</span>
                      </label>
                      <input
                        type="tel"
                        {...register("phone")}
                        placeholder="+91 90000 00000"
                        className="w-full px-4 py-3 rounded-xl bg-brand-navy-950 border border-slate-700/80 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-brand-gold-500 transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-slate-300 mb-2">
                        Email Address <span className="text-brand-gold-400">*</span>
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-brand-navy-950 border border-slate-700/80 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-brand-gold-500 transition-colors"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-slate-300 mb-2">
                        Location / District
                      </label>
                      <select
                        {...register("city")}
                        className="w-full px-4 py-3 rounded-xl bg-brand-navy-950 border border-slate-700/80 text-slate-100 text-sm focus:outline-none focus:border-brand-gold-500 transition-colors"
                      >
                        <option value="Mysore">Mysore (Mysuru)</option>
                        <option value="Bangalore">Bangalore (Bengaluru)</option>
                        <option value="Mangalore">Mangalore (Mangaluru)</option>
                        <option value="Other Karnataka">Other Karnataka District</option>
                      </select>
                    </div>
                  </div>

                  {/* Service Division Dropdown */}
                  <div>
                    <label className="block text-xs uppercase font-medium tracking-wider text-slate-300 mb-2">
                      Service Division of Interest <span className="text-brand-gold-400">*</span>
                    </label>
                    <select
                      {...register("service")}
                      className="w-full px-4 py-3 rounded-xl bg-brand-navy-950 border border-slate-700/80 text-slate-100 text-sm focus:outline-none focus:border-brand-gold-500 transition-colors"
                    >
                      <option value="Division 1: Real Estate Services (Buying / Selling / Leasing)">
                        Division 1: Real Estate Services (Buying, Selling, Leasing, Advisory)
                      </option>
                      <option value="Division 2: Construction & Development (Residential / Commercial / Custom Builds)">
                        Division 2: Construction &amp; Development (Residential, Commercial, Smart Homes)
                      </option>
                      <option value="Division 3: Legal & Documentation Support (9/11 & Title Clearances)">
                        Division 3: Legal &amp; Documentation Support (Title Clearance, 9/11 Documents)
                      </option>
                      <option value="Institutional / College Construction Project">
                        Institutional / College Construction Project
                      </option>
                      <option value="General Consultation & Property Assessment">
                        General Consultation &amp; Property Assessment
                      </option>
                    </select>
                    {errors.service && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.service.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase font-medium tracking-wider text-slate-300 mb-2">
                      Project Details / Message <span className="text-brand-gold-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      {...register("message")}
                      placeholder="Please describe your requirements, site location, timeline or document concerns..."
                      className="w-full px-4 py-3 rounded-xl bg-brand-navy-950 border border-slate-700/80 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-brand-gold-500 transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-gold-400 via-brand-gold-500 to-brand-gold-600 text-brand-navy-950 font-bold uppercase tracking-widest text-xs shadow-xl shadow-brand-gold-500/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-brand-navy-950 border-t-transparent rounded-full animate-spin" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Free Consultation Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    Your details are securely received by Metro Ventures directors. No spam guaranteed.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

