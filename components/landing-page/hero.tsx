"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DotsOverlay } from "@/components/dots/dots-overlay";
import { ArrowRight, CheckCheck } from "lucide-react";
import { ModalWaitinglist } from "@/components/modals/modal-waitinglist";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icons } from "@/components/icons/Icons";

export const Hero = () => {
  // Set your target date here (Q2 2026 launch - e.g., May 1, 2026)
  const targetDate = new Date("2026-05-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown timer
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor(
          (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24),
        );
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ months, days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000); // Update every second

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="relative flex flex-col items-center gap-20 w-full h-min pb-16 pt-12 sm:pt-16 md:pt-20 lg:pt-26 overflow-hidden px-4">
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
          Direct inzetbaar, pre-screened Nederlands AI-talent. Tot 45%
          kostenefficiënter en remote beschikbaar.
        </p>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-6 justify-center">
          <div className="flex items-center gap-1">
            <CheckCheck className="shrink-0 text-nature h-5 w-5 sm:h-6 sm:w-6" />
            <p className="text-xs sm:text-sm font-bold whitespace-nowrap text-gray tracking-tight">
              Binnen 48 uur 3 geschikte AI talenten
            </p>
          </div>
          <div className="flex items-center gap-1">
            <CheckCheck className="shrink-0 text-nature h-5 w-5 sm:h-6 sm:w-6" />
            <p className="text-xs sm:text-sm font-bold whitespace-nowrap text-gray tracking-tight">
              Gratis voor zzp'ers & bedrijven
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono mx-auto w-fit text-xs sm:text-sm">
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-xl font-bold text-foreground">
              {timeLeft.months}
            </span>
            <span className="text-[9px] sm:text-[10px] text-primary-light uppercase tracking-wider">
              mnd
            </span>
          </div>
          <span className="text-muted-foreground">:</span>
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-xl font-bold text-foreground">
              {timeLeft.days}
            </span>
            <span className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider">
              dgn
            </span>
          </div>
          <span className="text-muted-foreground">:</span>
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-xl font-bold text-foreground">
              {timeLeft.hours}
            </span>
            <span className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider">
              uur
            </span>
          </div>
          <span className="text-muted-foreground">:</span>
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-xl font-bold text-foreground">
              {timeLeft.minutes}
            </span>
            <span className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider">
              min
            </span>
          </div>
          <span className="text-muted-foreground">:</span>
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-xl font-bold text-foreground">
              {timeLeft.seconds}
            </span>
            <span className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider">
              sec
            </span>
          </div>
        </div>

        <p className="text-sm sm:text-base md:text-base text-gray font-normal mx-auto max-w-sm md:max-w-lg">
          Launch aanbieding: Eerste{" "}
          <span className="font-bold text-primary-light">5</span> geregistreerde
          bedrijven betalen het laagste uurtarief de eerste maand. Reserveer
          gratis!
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          {/* Modal Waiting list */}
          <ModalWaitinglist title="Reserveer mijn plek" />
          <Link href={siteConfig.links.whatsapp} target="_blank">
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
        className="relative w-full max-w-7xl mx-auto flex items-start gap-4 bg-background rounded-sm md:rounded-2xl border border-foreground/30 overflow-visible"
      >
        {/* Background interface image */}
        <div className="relative w-full aspect-video rounded-sm md:rounded-2xl overflow-hidden z-0 px-5">
          <Image
            src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1771928884/dashboard_ub4nta.png"
            alt="dashboard ai support hub platform"
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
