"use client";

import { DotsOverlay } from "@/components/dots/dots-overlay";
import Image from "next/image";

export const SolutionCompanySection = () => {
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
              <span className="relative z-10">bedrijven</span>
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-[calc(100%-38px)] sm:top-[calc(100%-45px)] md:top-[calc(100%-52px)] lg:top-[calc(100%-65px)] -translate-x-1/2 w-[115%] h-12 sm:h-16 md:h-18 lg:h-21 bg-primary/75 [mask-image:url('/markers/circle-3.png')] mask-no-repeat mask-size-[100%_100%] mask-center rounded-none pointer-events-none z-0 block"
              />
            </span>
          </h4>
          <p className="text-xs sm:text-sm md:text-base text-gray font-light mx-auto max-w-lg">
            Wij regelen de match. Jullie bouwen de toekomst.
          </p>
        </div>
        <DotsOverlay opacity={60} />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-2.5 md:h-160 lg:px-6">
          {/* Card 1 */}
          <div className="relative col-span-1 md:col-span-2 lg:col-span-2 aspect-video md:aspect-auto rounded-2xl border border-foreground/30 bg-background overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1771926811/onboarding_liuj72.png"
              alt="Time to onboard"
              fill
              className="object-cover"
              priority
            />
            {/* Dark linear overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h6 className="text-xl font-normal text-foreground tracking-wide">
                Time to "onboard"
              </h6>
              <p className="text-xs font-light text-gray">
                Beschrijf je organisatie, zodat we perfect kunnen matchen
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative col-span-1 md:col-span-2 lg:col-span-3 aspect-video md:aspect-auto rounded-2xl border border-foreground/30 bg-background overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1771924522/post_project_aealc5.png"
              alt="Plaats je AI projecten en opdrachten"
              fill
              className="object-cover"
              priority
            />
            {/* Dark linear overlay */}
            {/* <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" /> */}
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h6 className="text-xl font-normal text-foreground tracking-wide">
                Plaats je AI projecten en opdrachten
              </h6>
              <p className="text-xs font-light text-gray">
                Beschrijf in 1 minuut wat je zoekt
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative col-span-1 md:col-span-2 lg:col-span-3 aspect-video md:aspect-auto rounded-2xl border border-foreground/30 bg-background overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1771937305/post_kandidats_fozvpx.png"
              alt="Ontvang matches binnen 48 uur"
              fill
              className="object-cover"
              priority
            />
            {/* Dark linear overlay */}
            {/* <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" /> */}
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h6 className="text-xl font-normal text-foreground tracking-wide">
                Ontvang matches
              </h6>
              <p className="text-xs font-light text-gray">
                Binnen 48 uur krijg je 2-3 pre-screened kandidaten
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative col-span-1 md:col-span-2 lg:col-span-2 aspect-video md:aspect-auto rounded-2xl border border-foreground/30 bg-background overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1771926801/start_nwa5dp.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
            {/* Dark linear overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h6 className="text-xl font-normal text-foreground tracking-wide">
                Start direct
              </h6>
              <p className="text-xs font-light text-gray">
                Kies je engineer en begin binnen een week
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// {/* Voor Engineers */}
// <div className="space-y-6">
//   <div className="flex items-center justify-center">
//     <h5 className="text-2xl md:text-3xl font-medium">
//       Zoek je projecten?
//     </h5>
//   </div>

//   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//     {/* Card 1 */}
//     <div className="relative rounded-2xl border border-foreground/30 bg-background overflow-hidden">
//       <div className="relative aspect-square">
//         <Image
//           src="/landing/testimonial/person.avif"
//           alt=""
//           fill
//           className="object-cover"
//           priority
//         />

//         {/* Text overlay */}
//         <div className="absolute bottom-0 left-0 right-0 p-6">
//           <h6 className="text-2xl font-medium text-foreground">
//             Eenmalige intake
//           </h6>
//           <p className="text-sm font-light text-gray">
//             45 minuten technische screening, geen bullshit
//           </p>
//         </div>
//       </div>
//     </div>

//     {/* Card 2 */}
//     <div className="relative rounded-2xl border border-foreground/30 bg-background overflow-hidden">
//       <div className="relative aspect-square">
//         <Image
//           src="/landing/testimonial/person.avif"
//           alt=""
//           fill
//           className="object-cover"
//           priority
//         />

//         {/* Text overlay */}
//         <div className="absolute bottom-0 left-0 right-0 p-6">
//           <h6 className="text-2xl font-medium text-foreground">
//             Relevante matches
//           </h6>
//           <p className="text-sm font-light text-gray">
//             Alleen projecten die bij jouw stack passen
//           </p>
//         </div>
//       </div>
//     </div>

//     {/* Card 3 */}
//     <div className="relative rounded-2xl border border-foreground/30 bg-background overflow-hidden">
//       <div className="relative aspect-square">
//         <Image
//           src="/landing/testimonial/person.avif"
//           alt=""
//           fill
//           className="object-cover"
//           priority
//         />

//         {/* Text overlay */}
//         <div className="absolute bottom-0 left-0 right-0 p-6">
//           <h6 className="text-2xl font-medium text-foreground">
//             Focus op bouwen
//           </h6>
//           <p className="text-sm font-light text-gray">
//             Wij regelen admin (facturatie, opdrachtovereenkomst etc.),
//             jij levert kwaliteit
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
