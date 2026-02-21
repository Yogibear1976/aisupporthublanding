"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useRouter } from "next/navigation";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Wanneer lanceren jullie?",
    answer:
      "We gaan live in Q2 2026. Iedereen op de waitlist krijgt early access vóór de officiële launch, plus voorrang bij het matchen met toptalent. Schrijf je nu in om als eerste te profiteren.",
    value: "item-1",
  },
  {
    question: "Wat kost het?",
    answer:
      "Wij werken met een transparant arbitrage-model: jij betaalt een vast all-in uurtarief, wij regelen de betaling aan de engineer. Geen verborgen commissies of extra kosten. De eerste 5 bedrijven die zich inschrijven krijgen 50% korting de eerste maand op de gefactureerde uren. Een speciale early adopter deal die we daarna niet meer herhalen.",
    value: "item-2",
  },
  {
    question: "Waar komen de engineers vandaan?",
    answer:
      "Onze engineers zijn Nederlandse AI-specialisten die remote werken vanuit kostenefficiënte regio's binnen de EU en geselecteerde landen daarbuiten. Alle communicatie verloopt in vloeiend Nederlands of Engels, en iedereen heeft ervaring met Nederlandse bedrijfscultuur. Je krijgt de kwaliteit van lokaal talent, zonder de lokale overhead.",
    value: "item-3",
  },
  {
    question: "Werken jullie volledig remote?",
    answer:
      "Ja, 100% remote. Al onze engineers werken vanuit hun thuislocatie. Dat betekent geen reiskosten, geen kantoorruimte nodig, en volledige flexibiliteit in samenwerking. We zorgen dat alle tijdzones en communicatievoorkeuren op voorhand helder zijn.",
    value: "item-4",
  },
  {
    question: "Waarom kan AI Support Hub tot 45% kostenbesparing realiseren?",
    answer:
      "Wij werken met Nederlandse AI engineers die in landen wonen waar de gemiddelde inkomens aanzienlijk lager liggen. Het salaris dat wij hen bieden is uitstekend voor hun regio, terwijl jij topkwaliteit krijgt voor een fractie van Nederlandse tarieven. Door slimme arbitrage betaal je geen €8.000,- tot €10.000,- per maand, maar een scherp all-in uurtarief zonder in te leveren op expertise of communicatie. Win-win voor beide kanten.",
    value: "item-5",
  },
  {
    question: "Hoe snel kan ik starten met een engineer?",
    answer:
      "Gemiddeld binnen 5-7 werkdagen. Post je project, ontvang binnen 48 uur je matches, voer een kennismakingsgesprek en start. Geen maandenlange recruitment, gewoon snel aan de slag.",
    value: "item-6",
  },
];

export const FaqsSection = () => {
  const router = useRouter();
  return (
    <section className="relative w-full overflow-hidden py-20 px-4">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-1 sm:gap-2 md:gap-4 text-center pb-16">
          <h4 className="font-normal wrap-break-word tracking-tight text-3xl md:text-4xl lg:text-5xl mx-auto max-w-2xl">
            <span>Enkele vragen, </span>
            <span className="relative inline align-baseline overflow-visible">
              <span className="relative z-10">hier</span>
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-[calc(100%-33px)] sm:top-[calc(100%-37px)] md:top-[calc(100%-43px)] lg:top-[calc(100%-55px)] -translate-x-1/2 w-[125%] h-9 sm:h-10 md:h-12 lg:h-16 bg-primary-light/75 [mask-image:url('/markers/circle-2.png')] mask-no-repeat mask-size-[100%_100%] mask-center rounded-none pointer-events-none z-0 block"
              />
            </span>
            <span> beantwoord</span>
          </h4>
          <p className="text-xs sm:text-sm md:text-base text-gray font-light mx-auto max-w-lg">
            Misschien zitten er nog een paar vraagtekens in de weg. Hieronder
            heb ik de meest voorkomende vragen alvast voor je beantwoord.
            Hopelijk haalt dat er een paar weg.
          </p>
        </div>
        {/* Accordion Section - Centered */}
        <div className="mx-auto w-full max-w-2xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQList.map(({ question, answer, value }: FAQProps) => (
              <AccordionItem
                key={value}
                value={value}
                className="border border-foreground/30 rounded-lg px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-sm sm:text-base font-normal text-left hover:no-underline py-4">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm font-light text-gray pb-4">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
