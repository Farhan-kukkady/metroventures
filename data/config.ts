export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  subline: string;
  siteUrl: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  whatsappMessage: string;
  address: {
    state: string;
    region: string;
    cities: string[];
    country: string;
  };
  // Optional project/metric numbers. Set to null or leave empty if not verified.
  metrics?: {
    collegeCount?: number | string | null;
    residentialCount?: number | string | null;
    citiesServedCount?: number | string | null;
    yearsOfExperience?: number | string | null;
  };
}

export const siteConfig: SiteConfig = {
  name: "Metro Ventures",
  legalName: "Metro Ventures Real Estate & Construction",
  tagline: "Building dreams creating landmarks",
  subline: "Comprehensive Real Estate & Construction Solutions",
  siteUrl: "https://metroventures.in",
  email: "Metroventures88@gmail.com",
  phone: "+919035500444",
  phoneFormatted: "+91 9035500444",
  whatsappNumber: "919035500444",
  whatsappMessage: "Hello Metro Ventures, I am interested in your real estate and construction services in Karnataka.",
  address: {
    state: "Karnataka",
    region: "Karnataka, India",
    cities: ["Mysore", "Bangalore", "Mangalore"],
    country: "India",
  },
  // As requested, no invented numbers/counts. Only real values populated when supplied here.
  metrics: {
    collegeCount: null,
    residentialCount: null,
    citiesServedCount: null,
    yearsOfExperience: null,
  },
};

