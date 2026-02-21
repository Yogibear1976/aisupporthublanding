"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DotsOverlay } from "@/components/dots/dots-overlay";
import { ArrowRight, ClipboardPen } from "lucide-react";
import { ModalWaitinglist } from "@/components/modals/modal-waitinglist";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icons } from "@/components/icons/Icons";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center gap-20 w-full h-min pb-16 pt-16 sm:pt-20 md:pt-30 lg:pt-36 overflow-hidden px-4">
      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-7xl h-min text-center">
        {/* Badge */}
        <div className="shrink-0">
          <Badge
            variant="outline"
            className="flex items-center gap-2 pl-0 pr-2"
          >
            <span className="bg-primary-light text-foreground text-xs px-2 py-0.5 rounded-full font-medium">
              Nieuw
            </span>
            Bespaar 30% tot 45% op lokale tarieven!
            <ArrowRight />
          </Badge>
        </div>

        {/* Heading */}
        <h1 className="w-full wrap-break-word text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[1em] text-foreground whitespace-pre-line">
          <span>Slim </span>
          <span className="relative inline align-baseline overflow-visible">
            <span className="relative z-2 leading-[1em] text-foreground">
              AI talent
            </span>
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-[calc(100%-43px)] sm:top-[calc(100%-57px)] md:top-[calc(100%-65px)] lg:top-[calc(100%-77px)] xl:top-[calc(100%-105px)] -translate-x-1/2 w-[115%] h-12 sm:h-16 md:h-18 lg:h-21 xl:h-28 bg-primary/75 [mask-image:url('/markers/circle-3.png')] mask-no-repeat mask-size-[100%_100%] mask-center rounded-none pointer-events-none z-1 block"
            />
          </span>
          <span>, {"\n"}</span>
          <span className="relative inline-block align-baseline">
            <span className="relative z-2 leading-[1em] text-foreground">
              slimme
            </span>
            <span
              aria-hidden="true"
              className="absolute left-[52%] top-[50%] sm:top-[48%] md:top-[44%] lg:top-[45%] xl:top-[50%] -translate-x-1/2 translate-y-[60%] z-1 block w-[105%] h-4 sm:h-5 md:h-7 lg:h-8 xl:h-10 bg-primary-light/75 mask-[url('/markers/whobble-2.png')] mask-no-repeat mask-size-[100%_100%] mask-center pointer-events-none"
            />
          </span>
          <span> groei</span>
        </h1>

        {/* Subtext */}
        <p className="font-medium leading-6 sm:leading-7 text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-sm md:max-w-xl">
          Pre-screened Nederlandse AI-engineers voor jouw project.
          Kostenefficiënt en remote.
        </p>

        <p className="text-sm sm:text-base md:text-base text-gray font-normal mx-auto max-w-sm md:max-w-lg">
          Launch aanbieding: Eerste{" "}
          <span className="font-medium text-primary-light">5</span>{" "}
          geregistreerde bedrijven betalen het laagste uurtarief.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          {/* Modal Waiting list */}
          <ModalWaitinglist title="Reserveer mijn plek" />
          <Link href={siteConfig.links.whatsapp} target="_blank">
            {" "}
            <Button variant="outline">
              <Icons.whatsapp className="text-nature" />
              WhatsApp
            </Button>
          </Link>
        </div>
      </div>

      {/* Dotted overlay */}
      <DotsOverlay opacity={60} />
      <div
        id="Hero UI"
        className="relative w-full max-w-7xl mx-auto flex items-start gap-4 bg-background rounded-2xl border border-foreground/30 overflow-visible"
      >
        {/* Background interface image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden z-0 px-5">
          <Image
            src="/landing/hero/dashboard_black.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Left Illustration */}
        <div className="absolute z-10 w-48 h-48 aspect-square -top-55 left-10 overflow-visible hidden lg:block">
          <Image
            src="/landing/hero/flag.svg"
            alt="Left illustration"
            fill
            className="object-contain rounded-[inherit]"
            priority
          />
        </div>

        {/* Right Illustration */}
        <div className="absolute z-10 w-48 h-48 aspect-square -top-50 right-10 overflow-visible hidden lg:block">
          <Image
            src="/landing/hero/remote.svg"
            alt="Right illustration"
            fill
            className="object-contain rounded-[inherit]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

// De brug tussen Nederlands AI-talent en het MKB.

// Toegang tot hoogwaardige AI-implementaties zonder de hoofdpijn.
// Wij matchen jouw bedrijf binnen 48 uur met Nederlandse pre-vetted
// AI-engineers die complexe systemen bouwen voor een fractie van
// lokale tarieven.
