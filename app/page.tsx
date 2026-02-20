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
      "AI Support Hub | Vind binnen 48 uur de juiste AI engineer. Voor 45% minder",
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
    "Wij koppelen jouw AI-project aan pre-screened Nederlandse engineers in kostenefficiënte regio's",
  openGraph: {
    title:
      "AI Support Hub | Vind binnen 48 uur de juiste AI engineer. Voor 45% minder",
    description:
      "Wij koppelen jouw AI-project aan pre-screened Nederlandse engineers in kostenefficiënte regio's",
    url: "https://www.aisupporthub.nl",
    images: "/socials/aisupporthub_social.png",
    siteName:
      "AI Support Hub | Vind binnen 48 uur de juiste AI engineer. Voor 45% minder",
    type: "website",
    locale: "nl_NL",
  },
  icons: {
    icon: "/icon/favicon.ico",
    shortcut: "/icon/favicon.ico",
    apple: "/icon/apple-icon.png",
  },
  keywords: [""],
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
