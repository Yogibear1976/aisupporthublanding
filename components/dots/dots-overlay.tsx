import React from "react";

interface DotsOverlayProps {
  /** Opacity of the dots overlay (0–100) */
  opacity?: number;
  /** Optional mask gradient */
  mask?: string;
  /** Optional className to extend */
  className?: string;
}

export const DotsOverlay: React.FC<DotsOverlayProps> = ({
  opacity = 50,
  mask = "linear-gradient(#0000 0%, #000 50%, #0000 100%)",
  className = "",
}) => {
  return (
    <div
      className={`absolute inset-0 z-0 ${className}`}
      style={{
        opacity: opacity / 100,
        mask: mask,
        WebkitMask: mask,
      }}
    >
      <div className="absolute inset-0 rounded-inherit bg-repeat bg-[url('/landing/hero/dots.svg')] bg-size-[15.5px_auto] bg-position-[top_left]" />
    </div>
  );
};
