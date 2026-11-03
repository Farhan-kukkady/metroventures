export interface Leader {
  name: string;
  role: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  initials: string;
  bio: string;
}

export interface ValuePillar {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const companyData = {
  name: "Metro Ventures",
  subline: "Comprehensive Real Estate & Construction Solutions",
  tagline: "Building dreams creating landmarks",
  heroHeadline: "Building Spaces. Creating Value.",

  executiveOverview:
    "Metro Ventures is a full-service real estate and construction firm dedicated to transforming spaces, developing sustainable properties, and delivering end-to-end client satisfaction. Built on transparency, quality craftsmanship, and legal integrity, we provide seamless services spanning property transactions, custom construction, and full documentation support.",

  experienceStatement:
    "Having built a college and multiple homes across Mysore, Bangalore, Mangalore and Karnataka, we bring proven experience to every project.",

  mission:
    "Metro Ventures is committed to delivering outstanding real estate and construction services by focusing on quality, transparency, and client satisfaction. We aim to build lasting relationships, create sustainable developments, and shape the future of our communities through excellence in every project.",

  vision:
    "To be the leading choice in real estate and construction, known for transforming spaces and creating value through innovative solutions, quality craftsmanship, and exceptional client experiences.",

  pillars: [
    {
      title: "Transparency",
      subtitle: "Open & Honest Dealing",
      description:
        "Clear pricing, truthful property valuations, and open project reporting at every phase so you always have full visibility.",
      iconName: "ShieldCheck",
    },
    {
      title: "Quality Craftsmanship",
      subtitle: "Architectural Rigor",
      description:
        "Premium materials, precision engineering, and rigorous site supervision ensuring durable structures built to last generations.",
      iconName: "Hammer",
    },
    {
      title: "Legal Integrity",
      subtitle: "Clear Titles & 100% Compliance",
      description:
        "Comprehensive in-house legal vetting, title due diligence, and regulatory standardization including 9/11 approvals.",
      iconName: "FileCheck2",
    },
  ] as ValuePillar[],

  whyChooseUs: [
    {
      title: "End-to-End Solutions",
      description: "From land acquisition and title vetting to architectural design, construction, and final handover under one roof.",
      iconName: "Layers",
    },
    {
      title: "In-House Legal Clearance",
      description: "Specialized assistance in identifying, rectifying, and standardizing property paperwork including 9/11 documents.",
      iconName: "Scale",
    },
    {
      title: "Sustainable Building",
      description: "Green building practices, natural ventilation design, and energy-conscious materials that minimize environmental impact.",
      iconName: "Leaf",
    },
    {
      title: "Modern Smart Homes",
      description: "Seamless integration of smart automation, security systems, and contemporary architectural engineering.",
      iconName: "Cpu",
    },
    {
      title: "Uncompromising Transparency",
      description: "Zero hidden charges, straightforward milestone tracking, and honest advisories for every transaction.",
      iconName: "Eye",
    },
    {
      title: "Proven Work Across Karnataka",
      description: "Successfully delivered developments including institutional college infrastructure and residential homes across key hubs.",
      iconName: "MapPin",
    },
  ],

  leadership: [
    {
      name: "Mohammed Shafeem",
      role: "Director",
      phone: "+919008220444",
      phoneDisplay: "+91 9008220444",
      whatsapp: "919008220444",
      initials: "MS",
      bio: "Directing strategic developments and construction operations across Karnataka with focus on on-time delivery and craftsmanship.",
    },
    {
      name: "Ibrahim Sahil",
      role: "Co-Director",
      phone: "+919008150444",
      phoneDisplay: "+91 9008150444",
      whatsapp: "919008150444",
      initials: "IS",
      bio: "Co-leading project execution, real estate acquisitions, client partnerships, and sustainable construction practices.",
    },
    {
      name: "Jaysheel",
      role: "Legal Advisor",
      phone: "+919448225876",
      phoneDisplay: "+91 9448225876",
      whatsapp: "919448225876",
      initials: "JS",
      bio: "Heading land title due diligence, document standardization, 9/11 regulatory approvals, and statutory property clearance.",
    },
  ] as Leader[],

  process: [
    {
      step: "01",
      title: "Consultation & Discovery",
      description:
        "We understand your vision, assess site feasibility, review budget expectations, and establish project objectives.",
      deliverables: ["Initial Assessment", "Site Feasibility Review", "Requirement Scope"],
    },
    {
      step: "02",
      title: "Planning & Documentation",
      description:
        "Comprehensive architectural blueprints, legal title verification, local authority sanction approvals, and 9/11 clearance.",
      deliverables: ["Architectural Blueprints", "Legal Clearance & Title Check", "Statutory Approvals"],
    },
    {
      step: "03",
      title: "Execution & Management",
      description:
        "On-site project management, precision structural engineering, premium material sourcing, and milestone updates.",
      deliverables: ["On-Site Supervision", "Quality Audits & Material Tests", "Milestone Progress Reports"],
    },
    {
      step: "04",
      title: "Handover & Support",
      description:
        "Final walkthrough, statutory occupancy documentation, warranty certification, and post-completion handover.",
      deliverables: ["Final Quality Walkthrough", "Complete As-Built Documentation", "Ongoing Client Support"],
    },
  ] as ProcessStep[],

  areasServed: [
    {
      city: "Mysore",
      title: "Mysore (Mysuru)",
      description: "Heritage city hubs, prime residential developments, layouts, and institutional buildings.",
      highlight: "Active Residential & Institutional Developments",
    },
    {
      city: "Bangalore",
      title: "Bangalore (Bengaluru)",
      description: "Silicon Valley high-growth corridors, premium residential builds, and commercial transactions.",
      highlight: "Custom Homes & Commercial Real Estate",
    },
    {
      city: "Mangalore",
      title: "Mangalore (Mangaluru)",
      description: "Coastal Karnataka developments, residential houses, and coastal property investments.",
      highlight: "Custom Residential & Coastal Properties",
    },
    {
      city: "Karnataka",
      title: "Across Karnataka",
      description: "Agricultural land diligence, suburban estates, and regional construction projects state-wide.",
      highlight: "Comprehensive State-Wide Coverage",
    },
  ],
};

