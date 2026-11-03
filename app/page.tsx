import React from "react";
import { Hero } from "@/components/sections/Hero";
import { AboutOverview } from "@/components/sections/AboutOverview";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { KarnatakaMapSection } from "@/components/sections/KarnatakaMapSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { VisionMission } from "@/components/sections/VisionMission";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { AreasSection } from "@/components/sections/AreasSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutOverview />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectsGallery />
      <KarnatakaMapSection />
      <ProcessSection />
      <VisionMission />
      <LeadershipSection />
      <AreasSection />
      <ContactSection />
    </div>
  );
}
