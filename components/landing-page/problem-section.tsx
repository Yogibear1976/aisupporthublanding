"use client";

import { DotsOverlay } from "@/components/dots/dots-overlay";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { PiSlackLogo } from "react-icons/pi";
import { TbMoodAnnoyed } from "react-icons/tb";
import { MdUpdateDisabled } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export const ProblemSection = () => {
  return (
    <section className="relative w-full px-4 py-16">
      <div className="mx-auto w-full max-w-7xl space-y-16 sm:space-y-18 md:space-y-20">
        {/* Header */}
        <div className="flex flex-col gap-1 sm:gap-2 md:gap-4 text-center">
          <h4 className="font-normal wrap-break-word tracking-tight text-3xl md:text-4xl lg:text-5xl mx-auto max-w-2xl">
            <span>Herken je </span>
            <span className="relative inline align-baseline overflow-visible">
              <span className="relative z-10">dit?</span>
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-[calc(100%-35px)] sm:top-[calc(100%-37px)] md:top-[calc(100%-45px)] lg:top-[calc(100%-57px)] -translate-x-1/2 w-[115%] h-8 sm:h-10 md:h-12 lg:h-14 bg-primary/75 [mask-image:url('/markers/whobble-3.png')] mask-no-repeat mask-size-[100%_100%] mask-center rounded-none pointer-events-none z-0 block"
              />
            </span>
          </h4>
          <p className="text-xs sm:text-sm md:text-base text-gray font-light mx-auto max-w-lg">
            Het huidige systeem frustreert iedereen en kost véél te veel tijd.
          </p>
        </div>
        <DotsOverlay opacity={60} />

        {/* Graphic - Responsive Layout */}
        <div className="flex flex-col lg:flex-row lg:relative lg:justify-center w-full mx-auto gap-8 lg:gap-0">
          {/* Company Card - Left Side (mobile: first, desktop: absolutely positioned) */}
          <div
            id="company"
            className="w-full max-w-md mx-auto lg:absolute lg:top-1.25 lg:left-65 lg:w-64 z-10"
          >
            {/* Header bubble */}
            <div className="bg-primary-light rounded-sm p-2 w-fit mb-6">
              <div className="flex gap-1">
                <PiSlackLogo />
                <p className="text-xs font-medium">Slack chat</p>
              </div>
            </div>

            {/* Connecting lines - only on desktop */}
            <div className="hidden lg:block absolute top-8 left-4 w-9 h-62 border-l border-b border-foreground/30 rounded-bl-[5rem]" />
            <div className="hidden lg:block absolute top-8 left-4 w-4 h-16 border-l border-b border-foreground/30 rounded-bl-[3.5rem]" />

            {/* First chat group */}
            <div className="lg:pl-8 space-y-2 mb-2">
              <div className="bg-foreground border border-border rounded-sm p-2 w-full lg:w-50">
                <p className="text-secondary text-xs">
                  Al nieuws over de ML engineer?
                </p>
                <div className="h-px bg-gray my-2" />
                <div className="flex items-center gap-1.5">
                  <Avatar size="xs">
                    <AvatarImage
                      src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1562782330/Richard.jpg"
                      alt="@Photoai"
                    />
                  </Avatar>
                  <h6 className="text-muted font-light text-xs">
                    CTO @Photoai
                  </h6>
                </div>
              </div>

              <div className="bg-foreground/50 backdrop-blur-sm rounded-sm p-2 w-full lg:w-50">
                <p className="text-foreground text-xs">
                  Nog steeds in gesprek met 3 kandidaten, maar 2 zijn inmiddels
                  bij andere bedrijven begonnen.
                </p>
                <div className="h-px bg-border my-2" />
                <div className="flex items-center gap-1.5">
                  <Avatar size="xs">
                    <AvatarImage
                      src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1570373332/ysx79bruv8tjmuvpntx0.png"
                      alt="@Photoai"
                    />
                  </Avatar>
                  <h6 className="text-gray font-light text-xs">HR @Photoai</h6>
                </div>
              </div>
            </div>

            {/* Second chat group */}
            <div className="lg:pl-12 space-y-2">
              <div className="bg-foreground border border-border rounded-sm p-2 w-full lg:w-50">
                <p className="text-secondary text-xs">
                  We zijn nu 4 maanden bezig...
                </p>
                <div className="h-px bg-gray my-2" />
                <div className="flex items-center gap-1.5">
                  <Avatar size="xs">
                    <AvatarImage
                      src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1562782330/Richard.jpg"
                      alt="@Photoai"
                    />
                  </Avatar>
                  <h6 className="text-muted font-light text-xs">
                    CTO @Photoai
                  </h6>
                </div>
              </div>
              <div className="bg-foreground/50 backdrop-blur-sm rounded-sm p-2 w-full lg:w-50">
                <div className="flex gap-1 items-start">
                  <TbMoodAnnoyed className="shrink-0" />
                  <p className="text-foreground font-extralight text-xs">
                    <span className="font-normal">Vertraging</span> op de
                    geplande Q1 roadmap
                  </p>
                </div>
              </div>
              <div className="bg-foreground/50 backdrop-blur-sm rounded-sm p-2 w-full lg:w-50">
                <div className="flex gap-1 items-start">
                  <MdUpdateDisabled className="shrink-0" />
                  <p className="text-foreground font-extralight text-xs">
                    Impact op de <span className="font-normal">voortgang</span>{" "}
                    van productontwikkeling en geplande{" "}
                    <span className="font-normal">releases</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Image - Fixed position on desktop */}
          <div className="relative rounded-2xl border border-foreground/30 bg-background p-2 mx-auto lg:mx-0">
            <div className="relative w-85 h-137 rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1771151874/Thoughtful_Young_Man_with_Glasses_and_Patterned_Shirt_pdbrwg.png"
                alt="Project thumbnail"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Engineer Card - Right Side (mobile: last, desktop: absolutely positioned) */}
          <div
            id="engineer"
            className="w-full max-w-md mx-auto lg:absolute lg:top-10 lg:right-67 lg:w-64 z-10"
          >
            {/* Header bubble */}
            <div className="bg-nature rounded-sm p-2 w-fit mb-6 lg:ml-auto">
              <div className="flex gap-1">
                <FaWhatsapp />
                <p className="text-xs font-medium">Privé WhatsApp</p>
              </div>
            </div>

            {/* Connecting lines - only on desktop, flipped to right */}
            <div className="hidden lg:block absolute top-8 right-4 w-9 h-80 border-r border-b border-foreground/30 rounded-br-[5rem]" />
            <div className="hidden lg:block absolute top-8 right-4 w-4 h-15 border-r border-b border-foreground/30 rounded-br-[3.5rem]" />

            {/* First chat group */}
            <div className="lg:pr-8 space-y-2 mb-2 flex flex-col lg:items-end">
              <div className="bg-muted border border-border rounded-sm p-2 w-full lg:w-50">
                <p className="text-foreground text-xs">
                  Ze willen nóg een ronde 😤. Pff
                </p>
                <div className="h-px bg-border my-2" />
                <div className="flex items-center gap-1.5">
                  <Avatar size="xs">
                    <AvatarImage
                      src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1771169759/Lead_ai_developer.png"
                      alt="@leadaideveloper"
                    />
                  </Avatar>
                  <h6 className="text-muted-foreground font-light text-xs">
                    Lead AI Developer
                  </h6>
                </div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-sm p-2 w-full lg:w-50">
                <p className="text-foreground text-xs">
                  Echt!? Hoelang ben je al bezig?
                </p>
                <div className="h-px bg-border my-2" />
                <div className="flex items-center gap-1.5">
                  <Avatar size="xs">
                    <AvatarImage
                      src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1771169001/Quinten.png"
                      alt="Quinten"
                    />
                  </Avatar>
                  <h6 className="text-gray font-light text-xs">Quinten</h6>
                </div>
              </div>
              <div className="bg-muted border border-border rounded-sm p-2 w-full lg:w-50">
                <p className="text-foreground text-xs">
                  3 weken. Elke keer 'bijna klaar' maar dan toch weer iemand
                  erbij
                </p>
                <div className="h-px bg-border my-2" />
                <div className="flex items-center gap-1.5">
                  <Avatar size="xs">
                    <AvatarImage
                      src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1771169759/Lead_ai_developer.png"
                      alt="@leadaideveloper"
                    />
                  </Avatar>
                  <h6 className="text-muted-foreground font-light text-xs">
                    Lead AI Developer
                  </h6>
                </div>
              </div>
            </div>

            {/* Second chat group */}
            <div className="lg:pr-13 space-y-2 flex flex-col lg:items-end">
              <div className="bg-muted border border-border rounded-sm p-2 w-full lg:w-50">
                <p className="text-foreground text-xs">
                  Tech test 4 uur, 3 case studies, team meetings...
                </p>
                <div className="h-px bg-border my-2" />
                <div className="flex items-center gap-1.5">
                  <Avatar size="xs">
                    <AvatarImage
                      src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1771169759/Lead_ai_developer.png"
                      alt="@leadaideveloper"
                    />
                  </Avatar>
                  <h6 className="text-muted-foreground font-light text-xs">
                    Lead AI Developer
                  </h6>
                </div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-sm p-2 w-full lg:w-50">
                <p className="text-foreground text-xs">
                  Dit is geen hiring process, dit is gratis consulting
                </p>
                <div className="h-px bg-border my-2" />
                <div className="flex items-center gap-1.5">
                  <Avatar size="xs">
                    <AvatarImage
                      src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1771169001/Quinten.png"
                      alt="Quinten"
                    />
                  </Avatar>
                  <h6 className="text-gray font-light text-xs">Quinten</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
