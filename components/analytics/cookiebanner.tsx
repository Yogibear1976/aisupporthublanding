"use client";

import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useState, useEffect } from "react";

export const CookieBanner = () => {
  const router = useRouter();

  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    // Only call gtag if it exists
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });
    }

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  return (
    <div className="fixed left-0 bottom-0 z-40">
      <div
        className={cn(
          "fixed flex flex-col sm:left-4 bottom-10 rounded-lg blue-glassmorphism w-full sm:w-1/2 xl:w-1/4 max-w-[450px] overflow-hidden",
          cookieConsent != null ? "hidden" : "flex"
        )}
        // className={`fixed ${
        //   cookieConsent != null ? "hidden" : "flex"
        // } flex-col sm:left-4 bottom-20 rounded-lg blue-glassmorphism w-full sm:w-1/2 xl:w-1/4 max-w-[450px] overflow-hidden`}
      >
        <div>
          <div className="relative overflow-hidden px-8 pt-8">
            <div className="w-20 h-[77px] absolute -top-10 -right-10 text-slate-900">
              <svg
                width="120"
                height="119"
                viewBox="0 0 120 119"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M6.38128 49.1539C3.20326 32.893 13.809 17.1346 30.0699 13.9566L70.3846 6.07751C86.6455 2.89948 102.404 13.5052 105.582 29.7661L113.461 70.0808C116.639 86.3417 106.033 102.1 89.7724 105.278L49.4577 113.157C33.1968 116.335 17.4384 105.729 14.2604 89.4686L6.38128 49.1539Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="text-2xl flex flex-col pb-2">
              <small className="text-[16px] font-light text-sky-200 tracking-tight">
                Hallo.. Welkom op Linkbits.io
              </small>
              <span className="text-3xl tracking text-gray-50 font-bold">
                Wij gebruiken Cookies!
              </span>
            </div>
            <div className="pb-4">
              <p className="text-[14px] leading-5 font-light text-white">
                Wij maken op deze website gebruik van cookies voor het bijhouden
                van statistieken, om voorkeuren op te slaan, maar ook voor
                marketingdoeleinden. Door op “Accepteren“ te klikken, ga je
                akkoord met het gebruik van alle cookies zoals omschreven in
                ons.{" "}
                <span
                  onClick={() => router.push("/privacy-cookies")}
                  className="text-white text-sm font-medium underline underline-offset-4 decoration-white/0 hover:decoration-white transition-all duration-300 hover:cursor-pointer"
                >
                  Privacy & cookie beleid
                </span>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center border-t border-solid border-muted">
          <button
            onClick={() => setCookieConsent(false)}
            className="border-r border-muted flex-1 px-4 py-3 text-white hover:text-gray-50 hover:bg-destructive/60 duration-150 hover:cursor-pointer"
          >
            Nee bedankt!
          </button>
          <button
            onClick={() => setCookieConsent(true)}
            className="flex-1 px-4 py-3 text-white hover:text-gray-50 hover:bg-nature duration-150 hover:cursor-pointer"
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
};
