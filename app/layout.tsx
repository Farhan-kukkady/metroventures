import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { siteConfig } from "@/data/config";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Metro Ventures | Real Estate & Construction Solutions Karnataka",
    template: "%s | Metro Ventures",
  },
  description:
    "Metro Ventures is a premier full-service real estate and construction company in Karnataka. Built on transparency, craftsmanship and legal integrity, offering property transactions, custom construction, and 9/11 legal documentation.",
  keywords: [
    "construction company in Mysore",
    "construction company Bangalore",
    "house construction Karnataka",
    "real estate services Karnataka",
    "property documentation Karnataka",
    "9/11 documents Karnataka",
    "custom home builders Mangalore",
    "institutional college construction Karnataka",
    "real estate advisory Mysore",
    "Metro Ventures Karnataka",
  ],
  authors: [{ name: "Metro Ventures" }],
  creator: "Metro Ventures",
  publisher: "Metro Ventures",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Metro Ventures | Building Spaces. Creating Value.",
    description:
      "Comprehensive Real Estate & Construction Solutions across Karnataka: Mysore, Bangalore, Mangalore. Built on transparency, craftsmanship, and legal integrity.",
    url: siteConfig.siteUrl,
    siteName: "Metro Ventures",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Metro Ventures — Real Estate & Construction",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metro Ventures | Building Spaces. Creating Value.",
    description:
      "Comprehensive Real Estate & Construction Solutions across Karnataka. Having delivered an institutional college and multiple homes.",
    images: ["/logo.svg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/logo-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.siteUrl}/#organization`,
        name: "Metro Ventures",
        legalName: siteConfig.legalName,
        url: siteConfig.siteUrl,
        logo: `${siteConfig.siteUrl}/logo.svg`,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
        areaServed: [
          { "@type": "City", name: "Mysore" },
          { "@type": "City", name: "Bangalore" },
          { "@type": "City", name: "Mangalore" },
          { "@type": "State", name: "Karnataka" },
        ],
        founder: [
          { "@type": "Person", name: "Mohammed Shafeem", jobTitle: "Director" },
          { "@type": "Person", name: "Ibrahim Sahil", jobTitle: "Co-Director" },
        ],
      },
      {
        "@type": "GeneralContractor",
        "@id": `${siteConfig.siteUrl}/#contractor`,
        name: "Metro Ventures Construction",
        telephone: siteConfig.phone,
        url: siteConfig.siteUrl,
        areaServed: ["Mysore", "Bangalore", "Mangalore", "Karnataka"],
        description:
          "End-to-end project management, custom home construction, institutional college development, green sustainable building, and modern smart homes.",
      },
      {
        "@type": "RealEstateAgent",
        "@id": `${siteConfig.siteUrl}/#realestate`,
        name: "Metro Ventures Real Estate",
        telephone: siteConfig.phone,
        url: siteConfig.siteUrl,
        areaServed: ["Mysore", "Bangalore", "Mangalore", "Karnataka"],
        description:
          "Buying, selling, leasing, and investment advisory across residential, commercial, and agricultural properties in Karnataka.",
      },
    ],
  };

  return (
    <html lang="en" className={`${cinzel.variable} ${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-brand-navy-950 text-slate-100 flex flex-col font-sans selection:bg-brand-gold-500 selection:text-brand-navy-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
