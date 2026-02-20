"use client";

import { MarqueeSliderServices } from "@/components/ui/marquee-slider";

export const BenefitsSection = () => {
  return (
    <section className="w-full px-0 sm:px-4 md:px-6 lg:px-8 pb-8">
      <MarqueeSliderServices
        speed={40}
        mar_one="45% kostenbesparing"
        mar_two="10x sneller dan traditioneel"
        mar_three="Pre-screened kwaliteit"
        mar_four="Launch verwacht Q2 2026"
      />
    </section>
  );
};
