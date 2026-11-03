export interface ProjectItem {
  id: string;
  title: string;
  category: "Institutional" | "Residential" | "Commercial";
  city: "Mysore" | "Bangalore" | "Mangalore" | "Other Karnataka";
  cityLabel: string;
  description: string;
  highlights: string[];
  images: string[];
  year?: string;
  isFeatured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "college-project",
    title: "College Project",
    category: "Institutional",
    city: "Other Karnataka",
    cityLabel: "Karnataka",
    description:
      "Comprehensive institutional campus development successfully executed by Metro Ventures, featuring multi-storey academic blocks, administrative wings, lecture halls, and structural engineering adhering to institutional safety and accessibility standards.",
    highlights: [
      "Institutional Scale Construction",
      "Academic Blocks & Administrative Wings",
      "Structural Engineering & Compliance",
      "On-Time Turnkey Delivery",
    ],
    images: [
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80",
    ],
    year: "Completed",
    isFeatured: true,
  },
  {
    id: "residential-house-mysore",
    title: "Residential House, Mysore",
    category: "Residential",
    city: "Mysore",
    cityLabel: "Mysore (Mysuru)",
    description:
      "Custom-designed contemporary residential residence in Mysore, combining architectural elegance with spacious natural ventilation, premium stone finishes, and tailored interior joinery.",
    highlights: [
      "Bespoke Architectural Design",
      "Custom Interior Woodwork & Finishes",
      "Sustainable Natural Lighting & Ventilation",
      "Complete In-House Project Management",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    ],
    year: "Completed",
    isFeatured: true,
  },
  {
    id: "residential-house-bangalore",
    title: "Residential House, Bangalore",
    category: "Residential",
    city: "Bangalore",
    cityLabel: "Bangalore (Bengaluru)",
    description:
      "Modern luxury home development in Bangalore incorporating smart home automation, energy-conscious building envelopes, open-plan living, and seamless indoor-outdoor connectivity.",
    highlights: [
      "Smart Home Automation Integrated",
      "Modern Architectural Elevation",
      "Energy-Efficient Building Practices",
      "Clear Land Title & Plan Sanctions",
    ],
    images: [
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
    ],
    year: "Completed",
    isFeatured: true,
  },
  {
    id: "residential-house-mangalore",
    title: "Residential House, Mangalore",
    category: "Residential",
    city: "Mangalore",
    cityLabel: "Mangalore (Mangaluru)",
    description:
      "Coastal Karnataka residential home engineered with weather-resistant materials, deep roof overhangs for monsoon resilience, high ceilings, and serene tropical landscaping.",
    highlights: [
      "Monsoon-Resilient Coastal Engineering",
      "High-Ceiling Thermal Comfort Design",
      "Premium Weather-Shield Finishes",
      "Turnkey Construction & Handover",
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=80",
    ],
    year: "Completed",
    isFeatured: true,
  },
  {
    id: "residential-development-mysore-2",
    title: "Residential Villa, Mysore",
    category: "Residential",
    city: "Mysore",
    cityLabel: "Mysore (Mysuru)",
    description:
      "Elegantly crafted single-family villa development in Mysore built with high structural standards, refined exterior facade detailing, and comprehensive documentation clearances.",
    highlights: [
      "Refined Exterior Detailing",
      "High Structural Strength RCC Frame",
      "End-to-End Documentation Support",
      "Complete Boundary & Title Assurance",
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80",
    ],
    year: "Completed",
    isFeatured: false,
  },
  {
    id: "residential-home-karnataka",
    title: "Residential House, Karnataka",
    category: "Residential",
    city: "Other Karnataka",
    cityLabel: "Karnataka",
    description:
      "Custom residential development delivered in regional Karnataka featuring thoughtful spatial zoning, durable local materials, and prompt regulatory clearances.",
    highlights: [
      "Regional Karnataka Delivery",
      "Quality Masonry & Reinforced Concrete",
      "Sanction Clearances Managed",
      "Dedicated On-Site Engineering",
    ],
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80",
    ],
    year: "Completed",
    isFeatured: false,
  },
];

