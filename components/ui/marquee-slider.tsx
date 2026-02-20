"use client";

import Marquee from "react-fast-marquee";

interface MarqueeSliderServicesProps {
  speed?: number;
  mar_one: string;
  mar_two: string;
  mar_three: string;
  mar_four: string;
  // mar_five: string;
  // mar_six: string;
}

export const MarqueeSliderServices: React.FC<MarqueeSliderServicesProps> = ({
  speed,
  mar_one,
  mar_two,
  mar_three,
  mar_four,
}) => {
  return (
    <Marquee
      autoFill={true}
      speed={speed}
      gradient={true}
      gradientColor="#000000"
    >
      <p className="text-foreground font-light text-4xl tracking-tight pr-8 my-2 lg:my-4">
        {mar_one}
      </p>
      <p className="text-primary-light font-light text-4xl tracking-tight pr-8 my-2 lg:my-4">
        {mar_two}
      </p>
      <p className="text-foreground font-light text-4xl tracking-tight pr-8 my-2 lg:my-4">
        {mar_three}
      </p>
      <p className="text-primary-light font-light text-4xl tracking-tight pr-8 my-2 lg:my-4">
        {mar_four}
      </p>
      {/* <p className="text-foreground font-light text-4xl tracking-tight pr-8 my-2 lg:my-4">
        {mar_five}
      </p>
      <p className="text-muted-foreground font-light text-4xl tracking-tight pr-8 my-2 lg:my-4">
        {mar_six}
      </p> */}
    </Marquee>
  );
};
