import type { Metadata } from "next";

import { Hero } from "@/components/landing-page/hero";
import { ProblemSection } from "@/components/landing-page/problem-section";
import { SolutionSection } from "@/components/landing-page/solution-section";
import { BenefitsSection } from "@/components/landing-page/benefits-section";
import { FaqsSection } from "@/components/landing-page/faqs-section";
import { BannerSection } from "@/components/landing-page/banner-section";
import { Testimonial } from "@/components/landing-page/testimonial";

export const metadata: Metadata = {
  title: {
    default:
      "AI Support Hub | AI Developer Inhuren? Pre-screened Talent | 45% Goedkoper",
    template: "%s | aisupporthub.nl",
  },
  metadataBase: new URL("https://www.aisupporthub.nl/"),
  alternates: {
    canonical: "/",
    languages: {
      nl: "/",
    },
  },
  description:
    "Vind binnen 48 uur pre-screened Nederlandse AI engineers. Remote, kostenefficiënt (45% besparing) en direct beschikbaar. Van fullstack AI tot ML specialisten. ✓ MKB ✓ Pre-screened ✓ Nederlands",
  openGraph: {
    title:
      "AI Support Hub | AI Developer Inhuren? Pre-screened Talent | 45% Goedkoper",
    description:
      "Vind binnen 48 uur pre-screened Nederlandse AI engineers. Remote, kostenefficiënt (45% besparing) en direct beschikbaar. Van fullstack AI tot ML specialisten. ✓ MKB ✓ Pre-screened ✓ Nederlands",
    url: "https://www.aisupporthub.nl",
    images: "/socials/aisupporthub_social.png",
    siteName:
      "AI Support Hub | AI Developer Inhuren? Pre-screened Talent | 45% Goedkoper",
    type: "website",
    locale: "nl_NL",
  },
  icons: {
    icon: "/icon/favicon.ico",
    shortcut: "/icon/favicon.ico",
    apple: "/icon/apple-icon.png",
  },
  keywords: [
    "AI developer inhuren Nederland",
    "Nederlandse AI engineer remote",
    "Fullstack AI developer",
    "AI consultant MKB",
    "Betaalbare AI ontwikkeling",
    "Pre-screened AI talent",
    "AI engineer binnen 48 uur",
    "Machine learning specialist Nederland",
    "AI automation engineer",
    "Remote AI developer kostenefficiënt",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <Testimonial />
      <FaqsSection />
      <BannerSection />
    </>
  );
}
