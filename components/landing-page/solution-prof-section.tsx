"use client";

import { DotsOverlay } from "@/components/dots/dots-overlay";
import Image from "next/image";

export const SolutionProfessionalSection = () => {
  return (
    <section className="relative w-full px-4 py-16">
      <div className="mx-auto w-full max-w-7xl space-y-16 sm:space-y-18 md:space-y-20">
        {/* Header */}
        <div className="flex flex-col gap-1 sm:gap-2 md:gap-4 text-center">
          <h4 className="font-normal wrap-break-word tracking-tight text-3xl md:text-4xl lg:text-5xl mx-auto max-w-2xl">
            <span>AI </span>
            <span className="relative inline align-baseline overflow-visible">
              <span className="relative z-10">Support </span>
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-[calc(100%-12px)] sm:top-[calc(100%-16px)] md:top-[calc(100%-22px)] lg:top-[calc(100%-28px)] -translate-x-1/2 w-[115%] h-5 sm:h-6 md:h-8 lg:h-10 bg-primary-light/75 [mask-image:url('/markers/line-1.png')] mask-no-repeat mask-size-[100%_100%] mask-center rounded-none pointer-events-none z-1 block"
              />
            </span>

            <span>Hub voor </span>
            <span className="relative inline align-baseline overflow-visible">
              <span className="relative z-10">AI Talent</span>
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-[calc(100%-38px)] sm:top-[calc(100%-45px)] md:top-[calc(100%-52px)] lg:top-[calc(100%-65px)] -translate-x-1/2 w-[115%] h-12 sm:h-16 md:h-18 lg:h-21 bg-primary/75 [mask-image:url('/markers/whobble-3.png')] mask-no-repeat mask-size-[100%_100%] mask-center rounded-none pointer-events-none z-0 block"
              />
            </span>
          </h4>
          <p className="text-xs sm:text-sm md:text-base text-gray font-light mx-auto max-w-lg">
            Wij regelen de match. Jullie bouwen de toekomst.
          </p>
        </div>
        <DotsOverlay opacity={60} />

        {/* Cards Grid - 3 Equal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 lg:px-6">
          {/* Card 1 */}
          <div className="relative aspect-video md:aspect-auto md:h-80 rounded-2xl border border-foreground/30 bg-background overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1771444737/Eenmalige_Intake_qpcktz.png"
              alt="Eenmalige intake"
              fill
              className="object-cover"
              priority
            />
            {/* linear overlay */}
            {/* <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" /> */}
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h6 className="text-xl font-normal text-white tracking-wide">
                Eenmalige intake
              </h6>
              <p className="text-xs font-light text-white/90">
                30 minuten technische screening, geen bullshit
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative aspect-video md:aspect-auto md:h-80 rounded-2xl border border-foreground/30 bg-background overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1771838924/matches_l7o472.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
            {/* Dabg-linear overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h6 className="text-xl font-normal text-white tracking-wide">
                Relevante matches
              </h6>
              <p className="text-xs font-light text-white/90">
                Alleen projecten en opdrachten die bij jouw stack passen
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative aspect-video md:aspect-auto md:h-80 rounded-2xl border border-foreground/30 bg-background overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1771576194/focus_op_bouwen_xohsau.png"
              alt="Focus op bouwen"
              fill
              className="object-cover"
              priority
            />

            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h6 className="text-xl font-normal text-white tracking-wide">
                Focus op bouwen
              </h6>
              <p className="text-xs font-light text-white/90">
                Wij regelen de contracten, facturatie en betalingen. Jij levert
                kwaliteit met plezier
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
