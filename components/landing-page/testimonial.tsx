"use client";

import { DotsOverlay } from "@/components/dots/dots-overlay";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

export const Testimonial = () => {
  return (
    <section className="relative w-full px-4 pb-16">
      <div className="mx-auto w-full max-w-7xl space-y-16">
        {/* Header */}
        <div className="flex flex-col gap-1 sm:gap-2 md:gap-4 text-center">
          <h4 className="font-normal wrap-break-word tracking-tight text-3xl md:text-4xl lg:text-5xl mx-auto max-w-2xl">
            <span>Toptalent, </span>
            <span className="relative inline align-baseline overflow-visible">
              <span className="relative z-10">geen </span>
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-[calc(100%-10px)] sm:top-[calc(100%-10px)] md:top-[calc(100%-13px)] lg:top-[calc(100%-15px)] -translate-x-1/2 w-[115%] h-2 sm:h-3 md:h-3 lg:h-4 bg-primary/75 [mask-image:url('/markers/line-3.png')] mask-no-repeat mask-size-[100%_100%] mask-center rounded-none pointer-events-none z-0 block"
              />
            </span>
            <span>topbudget</span>
          </h4>
          <p className="text-xs sm:text-sm md:text-base text-gray font-light mx-auto max-w-lg">
            Waar talent en ambitie elkaar écht versterken.
          </p>
        </div>
        <DotsOverlay opacity={60} />
        {/* Cards Container */}
        <div className="space-y-6">
          {/* Row 1: Large left, Blue small right */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Large card - Left */}
            <div className="lg:col-span-3 min-h-65 rounded-2xl border border-foreground/30 p-6">
              <div className="flex flex-col justify-between h-full">
                {/* Text content */}
                <div className="flex-1">
                  <p className="font-light text-base italic">
                    &quot;We hadden een kritisch AI-implementatieproject voor
                    ons customer service platform en stonden voor de keuze om
                    een lokaal talent inhuren voor €8.000,- of meer per maand of
                    het project uitstellen. Via AI Support Hub vonden we binnen
                    twee weken een Nederlandse senior ML engineer werkend vanuit
                    Portugal met de exacte expertise in onze tech stack. De
                    communicatie was vlekkeloos, en we hebben uiteindelijk 45%
                    bespaard op onze projectkosten. Het mooiste? Door die
                    besparing konden we direct doorinvesteren in een tweede
                    AI-feature die anders on hold had gestaan.&quot;
                  </p>
                </div>

                {/* Avatar section */}
                <div className="flex items-center gap-3 mt-4">
                  <Avatar>
                    <AvatarImage
                      src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1771528061/Marcus_verhagen.png"
                      alt="Avatar_marcus_verhagen"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col gap-0.5">
                    <h6 className="font-normal text-sm">Marcus Verhagen</h6>
                    <p className="text-xs text-muted-foreground">
                      CTO, @LogiFlow Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Blue card - Right */}
            <div className="relative lg:col-span-1 h-auto rounded-2xl border border-foreground/30 bg-background p-2">
              {/* Image container with overlay */}
              <div className="relative h-auto min-h-50 lg:min-h-65 rounded-lg overflow-hidden">
                {/* Background Image */}
                <Image
                  src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1771332767/Man_Working_on_Laptop_in_Nature_mm9yyw.png"
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />

                {/* Optional: Dark overlay
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-[1]" /> */}

                {/* Content on bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                  <div className="space-y-1">
                    <h2 className="text-4xl md:text-5xl font-normal text-white">
                      45%
                    </h2>
                    <p className="text-sm md:text-base text-white/90">
                      besparing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Blue small left (desktop), Large right - REVERSED on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Blue card - Left on desktop, Bottom on mobile */}
            <div className="relative lg:col-span-1 h-auto rounded-2xl border border-foreground/30 bg-background p-2 order-2 lg:order-1">
              {/* Image container with overlay */}
              <div className="relative h-auto min-h-50 lg:min-h-65 rounded-lg overflow-hidden">
                {/* Background Image */}
                <Image
                  src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1771332760/Modern_Workspace_Scene_dk4pqk.png"
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />

                {/* Optional: Dark overlay
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-[1]" /> */}

                {/* Content on bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                  <div className="space-y-1">
                    <h2 className="text-4xl md:text-5xl font-normal text-white">
                      45
                    </h2>
                    <p className="text-sm md:text-base text-white/90">
                      minuten Intake
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Large card - Right on desktop, Top on mobile */}
            <div className="lg:col-span-3 min-h-65 rounded-2xl border border-foreground/30 p-6 order-1 lg:order-2">
              <div className="flex flex-col justify-between h-full">
                {/* Text content */}
                <div className="flex-1">
                  <p className="font-light text-base italic">
                    &quot;Ik had genoeg van moeizame klantenacquisitie en
                    workflow challenges die me sterk demotiveerden. Bij AI
                    Support Hub deed ik één grondige technische intake van 45
                    minuten waarin ik echt kon laten zien wat ik kan. Drie dagen
                    later startte ik al bij een Nederlandse scale-up aan een
                    computer vision project. Precies mijn specialisme. Geen
                    bureaucratie, gewoon bouwen aan iets moois. Eindelijk een
                    platform dat engineers respecteert en bedrijven
                    begrijpt.&quot;
                  </p>
                </div>

                {/* Avatar section */}
                <div className="flex items-center gap-3 mt-4">
                  <Avatar>
                    <AvatarImage
                      src="https://res.cloudinary.com/dqvs8sk1o/image/upload/c_thumb,w_200,g_face/v1771528227/Dmitry_Kovalenko.png"
                      alt="Avatar_dmitry_kovalenjo"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col gap-0.5">
                    <h6 className="font-normal text-sm">Dmitry Kovalenko</h6>
                    <p className="text-xs text-muted-foreground">
                      Senior AI Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
