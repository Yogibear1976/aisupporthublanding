import { walsheimPro } from "@/lib/font";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { Suspense } from "react";

import { GoogleTagManager } from "@/components/analytics/google-tag";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning className={walsheimPro.className}>
      <GoogleTagManager GA_TRACKING_ID={process.env.GA_TRACKING_ID as string} />
      <body className="min-h-screen bg-background antialiased">
        <StickyBanner />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
