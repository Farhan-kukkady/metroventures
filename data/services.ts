export interface ServiceDivision {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  sectors: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  highlights: string[];
  iconName: string;
}

export const servicesData: ServiceDivision[] = [
  {
    id: "division-1",
    slug: "real-estate",
    number: "01",
    title: "Real Estate Services",
    shortDescription:
      "Strategic acquisition, disposition, and leasing of prime residential, commercial, and agricultural properties across Karnataka.",
    fullDescription:
      "Metro Ventures delivers trusted real estate advisory and transaction management across Karnataka. Whether purchasing a dream family residence, securing high-yield commercial space, or investing in expansive agricultural land, our team provides data-backed market analysis, clear title verification, and transparent negotiations to ensure your capital creates lasting wealth.",
    sectors: ["Residential", "Commercial", "Agricultural Land & Properties"],
    capabilities: [
      {
        title: "Buying & Acquisition",
        description:
          "Targeted property search, thorough on-ground physical inspection, and verified title screening for genuine clear-market value.",
      },
      {
        title: "Selling & Disposition",
        description:
          "Professional market positioning, high-intent buyer networking, and seamless deal closure ensuring optimal asset realization.",
      },
      {
        title: "Leasing & Rental Solutions",
        description:
          "Structured lease agreements, tenant background diligence, and long-term asset management for commercial and residential owners.",
      },
      {
        title: "Comprehensive Property Advisory",
        description:
          "In-depth market analysis, micro-market price appreciation trends, zoning checks, and strategic investment insights to empower confident decisions.",
      },
    ],
    highlights: [
      "Residential, Commercial & Agricultural Sectors",
      "Comprehensive Market Analysis & Investment Insights",
      "Transparent Dealing with Zero Hidden Clauses",
      "Deep Local Knowledge of Mysore, Bangalore & Mangalore Markets",
    ],
    iconName: "Building2",
  },
  {
    id: "division-2",
    slug: "construction",
    number: "02",
    title: "Construction & Development Services",
    shortDescription:
      "End-to-end project management, bespoke architectural builds, sustainable green practices, and modern smart home integrations.",
    fullDescription:
      "From institutional college infrastructure to bespoke luxury homes across Mysore, Bangalore, and Mangalore, Metro Ventures brings architectural finesse and structural integrity to every build. We oversee the complete lifecycle—architectural planning, authority permissions, structural construction, interior design, and turnkey handover—incorporating eco-friendly materials and next-generation smart home technology.",
    sectors: ["Residential", "Commercial", "Industrial"],
    capabilities: [
      {
        title: "End-to-End Project Management",
        description:
          "Single-point accountability governing timelines, material procurement, contractor coordination, cost optimization, and quality assurance.",
      },
      {
        title: "Custom Architectural Builds",
        description:
          "Tailor-made designs engineered to your lifestyle and site contours, delivering unmatched aesthetics, spatial utility, and longevity.",
      },
      {
        title: "Interior Design & Fit-outs",
        description:
          "Cohesive spatial interiors, custom joinery, lighting architecture, and premium finishes that blend comfort with elevated craftsmanship.",
      },
      {
        title: "Green & Sustainable Practices",
        description:
          "Eco-conscious design focusing on rainwater harvesting, natural ventilation, thermal insulation, and low-carbon construction methods.",
      },
      {
        title: "Modern Smart Home Integrations",
        description:
          "State-of-the-art home automation: automated lighting scenes, climate control, biometric security access, and remote surveillance.",
      },
    ],
    highlights: [
      "Track Record: Successfully Built a College & Multiple Homes Across Karnataka",
      "End-to-End Project Management with Transparent Milestones",
      "Green Building Standards & Sustainable Engineering",
      "Smart Home Automation & Modern Security Tech",
    ],
    iconName: "HardHat",
  },
  {
    id: "division-3",
    slug: "legal-documentation",
    number: "03",
    title: "Legal & Documentation Support",
    shortDescription:
      "Rectification of imperfect property paperwork, title scrutiny, statutory clearances, and emergency 9/11 regulatory documentation.",
    fullDescription:
      "Property transactions require absolute legal certainty. Metro Ventures provides specialized in-house legal support to identify discrepancies, rectify historic omissions, and standardize incomplete property documents across Karnataka. We handle title deeds, land conversion files, encumbrance tracking, and emergency regulatory clearances such as 9/11 documents, giving buyers and sellers complete peace of mind.",
    sectors: ["Revenue Land", "Gramatana & Municipal Properties", "Panchayat 9/11 Properties", "Commercial Titles"],
    capabilities: [
      {
        title: "Document Rectification & Standardization",
        description:
          "Thorough audit of property documents to detect ambiguities, boundary misalignments, or historical breaks in title chain, followed by legal correction.",
      },
      {
        title: "Title Scrutiny & Clearances",
        description:
          "Multi-decade title search, encumbrance certificate (EC) validation, revenue authority verification, and formal legal clearance certification.",
      },
      {
        title: "9/11 Regulatory Approvals",
        description:
          "Dedicated assistance with Form 9 and Form 11 (9/11 documents) issuance, revenue record updates, and gram panchayat/municipal standardization.",
      },
      {
        title: "Statutory Approvals & Registrations",
        description:
          "Assistance with khata transfer (A-Khata/e-Khata), building plan sanctions, layout approvals, and registration representation.",
      },
    ],
    highlights: [
      "Rectification of Improper & Incomplete Documents",
      "Complete Legal Clearance & Title Due Diligence",
      "Emergency Regulatory Approvals Including 9/11 Clearances",
      "Headed by In-House Legal Advisor Jaysheel (+91 9448225876)",
    ],
    iconName: "FileCheck2",
  },
];

