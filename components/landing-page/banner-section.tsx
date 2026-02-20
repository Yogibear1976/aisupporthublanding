"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { ModalWaitinglist } from "@/components/modals/modal-waitinglist";

export const BannerSection = () => {
  return (
    <section className="w-full bg-linear-to-b from-transparent to-primary-light/25">
      <div className="mx-auto px-8 py-30">
        <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 text-center">
          <div className="relative h-4 w-full max-w-xs">
            <Image
              src="/logo/aish_logo_diap.svg"
              alt="AI Support Hub NL"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-1 sm:gap-2 md:gap-4 text-center">
            <h4 className="font-normal tracking-tight text-3xl md:text-4xl lg:text-5xl mx-auto max-w-2xl">
              Klaar om slimmer te matchen?
            </h4>
            <p className="text-xs sm:text-sm md:text-base text-gray font-light mx-auto max-w-lg">
              Stop met maandenlang zoeken en torenhoge tarieven. Wij matchen
              jouw AI-project met pre-screened engineers die remote werken
              vanuit kostenefficiënte regio's.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 md:gap-6 justify-center">
            <div className="flex items-center gap-1 sm:gap-2">
              <Check className="shrink-0 text-nature h-5 w-5 sm:h-6 sm:w-6" />
              <p className="text-sm sm:text-base whitespace-nowrap text-gray tracking-tight">
                Ontvang early access
              </p>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Check className="shrink-0 text-nature h-5 w-5 sm:h-6 sm:w-6" />
              <p className="text-sm sm:text-base whitespace-nowrap text-gray tracking-tight">
                Launch verwacht Q2 2026
              </p>
            </div>
          </div>
          <ModalWaitinglist title="The early bird catches the worm" />
        </div>
      </div>
    </section>
  );
};
