# Metro Ventures — Web Platform

Premium, production-ready website for **Metro Ventures**, a full-service real estate and construction firm based in Karnataka, India.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **lucide-react**.

---

## 🏛️ Brand Identity & Palette

Built around the official architectural seal emblem:
- **Primary Navy / Charcoal**: `#060911`, `#0A111F`, `#0F172A`, `#1E293B`
- **Architectural Gold & Bronze**: `#C5A869` (Gold), `#D8C28A` (Luminous Glow), `#A38442` (Deep Bronze)
- **Off-White / Surface**: `#FAF8F5`, `#F8FAFC`
- **Typography**: `Cinzel`, `Playfair Display`, `Inter`

---

## ⚡ Tech Stack & Architecture

- **Framework**: Next.js 15 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Custom architectural utilities + Glassmorphism
- **Animations**: Framer Motion scroll reveals, hover cards, smooth transitions
- **Icons**: Lucide React
- **Forms & Validation**: React Hook Form + Zod
- **API & Email**: Next.js App Router Route Handler (`/api/contact`) + Nodemailer
- **Direct Engagement**: Floating WhatsApp (`wa.me/919035500444`) & direct phone call
- **SEO**: Dynamic `sitemap.xml`, `robots.txt`, Open Graph, Twitter cards, and JSON-LD structured schema (`RealEstateAgent`, `GeneralContractor`, `Organization`)

---

## 📁 Directory Structure

```text
metroventures/
├── app/
│   ├── api/contact/route.ts      # Contact form enquiry handler with Nodemailer
│   ├── services/
│   │   ├── real-estate/page.tsx          # Division 1 detail page
│   │   ├── construction/page.tsx         # Division 2 detail page
│   │   └── legal-documentation/page.tsx  # Division 3 detail page
│   ├── favicon.ico
│   ├── globals.css              # Tailwind v4 theme, fonts, custom utility classes
│   ├── icon.svg                 # Vector favicon
│   ├── layout.tsx               # Root layout with fonts, JSON-LD, navbar & footer
│   ├── loading.tsx              # Brand loading state
│   ├── not-found.tsx            # Custom 404 page
│   ├── page.tsx                 # Homepage assembling all sections
│   ├── robots.ts                # Dynamic robots.txt
│   └── sitemap.ts               # Dynamic sitemap.xml
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Sticky glassmorphic navbar with active scroll spy
│   │   ├── Footer.tsx           # Comprehensive directory footer with legal details
│   │   └── FloatingActions.tsx  # WhatsApp, quick call, scroll progress & back-to-top
│   ├── sections/
│   │   ├── Hero.tsx             # Cinematic hero with animated background
│   │   ├── AboutOverview.tsx    # Executive overview & 3 Value Pillars
│   │   ├── ServicesSection.tsx  # 3 Division cards linking to detail pages
│   │   ├── WhyChooseUs.tsx      # 6 core advantage cards
│   │   ├── ProjectsGallery.tsx  # Filterable gallery (category + city) + lightbox
│   │   ├── KarnatakaMapSection.tsx # Stylized Karnataka SVG map with animated city pins
│   │   ├── ProcessSection.tsx   # 4-stage execution roadmap
│   │   ├── VisionMission.tsx    # Dual-panel architectural principles
│   │   ├── LeadershipSection.tsx # Mohammed Shafeem, Ibrahim Sahil, Jaysheel cards
│   │   ├── AreasSection.tsx     # Mysore, Bangalore, Mangalore, Karnataka
│   │   └── ContactSection.tsx   # React Hook Form + Zod + direct contacts
│   └── ui/
│       └── LightboxModal.tsx    # Interactive image carousel with keyboard controls
├── data/                        # Centralized content store (Easy to edit)
│   ├── company.ts               # Leadership, pillars, process, mission & vision
│   ├── config.ts                # Site metadata, phone numbers, WhatsApp, metric counts
│   ├── projects.ts              # Filterable project portfolio entries
│   └── services.ts              # Detailed content for all 3 divisions
├── lib/
│   └── utils.ts                 # cn() class utility
├── logo/
│   └── logo.pdf                 # Company original logo source
├── public/
│   ├── logo.svg                 # Full brand logo vector
│   ├── logo-icon.svg            # Circular seal monogram
│   └── logo-dark.svg            # Charcoal variant for print / light surfaces
└── .env.example                 # Example environment variables
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Edit `.env.local` to configure SMTP credentials for real email delivery:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-google-app-password
CONTACT_RECIPIENT=Metroventures88@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```
> **Note**: In development without SMTP credentials, enquiry submissions are logged to the server console for audit and return a successful client confirmation.

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔨 Building for Production

Test and verify the production build:
```bash
npm run build
npm run start
```

---

## 🌐 Deploying to Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import the project into [Vercel](https://vercel.com).
3. Set the Environment Variables in Vercel Project Settings:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_RECIPIENT` (`Metroventures88@gmail.com`)
   - `NEXT_PUBLIC_SITE_URL` (`https://metroventures.in` or your Vercel domain)
4. Click **Deploy**. Vercel will automatically build the Next.js 15 App Router application with zero configuration.

---

## 📝 Updating Site Content

All text, services, leadership contacts, and projects are centralized in `/data`:
- **Company overview, leadership & process**: Edit [`data/company.ts`](file:///c:/metroventures/data/company.ts)
- **Service division points**: Edit [`data/services.ts`](file:///c:/metroventures/data/services.ts)
- **Portfolio & photos**: Edit [`data/projects.ts`](file:///c:/metroventures/data/projects.ts)
- **Phone numbers, email & metrics**: Edit [`data/config.ts`](file:///c:/metroventures/data/config.ts)

---

© 2026 Metro Ventures. All rights reserved.
