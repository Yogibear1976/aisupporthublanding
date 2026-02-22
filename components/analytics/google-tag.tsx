"use client";

import Script from "next/script";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "@/lib/gtaghelper";

export const GoogleTagManager = ({
  GTM_TRACKING_ID,
}: {
  GTM_TRACKING_ID: string;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();

    pageview(GTM_TRACKING_ID, url);
  }, [pathname, searchParams, GTM_TRACKING_ID]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
                'analytics_storage': 'denied'
            });
                
            gtag('config', '${GTM_TRACKING_ID}', {
                page_path: window.location.pathname,
            });
            `,
        }}
      />
    </>
  );
};
