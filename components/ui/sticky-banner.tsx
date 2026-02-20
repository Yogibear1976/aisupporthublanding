"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons/Icons";
import { siteConfig } from "@/config/site";

const STORAGE_KEY = "sticky_banner_hidden";
const BANNER_HEIGHT = 32; // Height in pixels

export const StickyBanner = () => {
  const [visible, setVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your target date here (Q2 2026 launch - e.g., April 1, 2026)
  const targetDate = new Date("2026-04-01T00:00:00").getTime();

  useEffect(() => {
    const hidden = localStorage.getItem(STORAGE_KEY);
    setVisible(hidden !== "true");
  }, []);

  useEffect(() => {
    if (visible && !isClosing) {
      document.documentElement.style.setProperty(
        "--banner-height",
        `${BANNER_HEIGHT}px`,
      );
    } else {
      document.documentElement.style.setProperty("--banner-height", "0px");
    }
  }, [visible, isClosing]);

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

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setVisible(false);
      localStorage.setItem(STORAGE_KEY, "true");
      setIsClosing(false);
    }, 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`
        sticky top-0 z-60 w-full text-foreground bg-linear-to-b from-blue-500 to-blue-700
        transition-all duration-300 ease-in-out
        ${isClosing ? "h-0 opacity-0 overflow-hidden" : "h-8"}
      `}
    >
      <div className="mx-auto px-4 h-full max-w-7xl flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-2 max-w-[90%] text-[10px] sm:text-xs text-foreground">
          <Rocket className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
          <p className="drop-shadow-md whitespace-nowrap">Launch over:</p>

          {/* Countdown */}
          <div className="flex items-center gap-1 font-mono font-semibold">
            <span>{timeLeft.months}m</span>
            <span>:</span>
            <span>{timeLeft.days}d</span>
            <span>:</span>
            <span>{timeLeft.hours}h</span>
            <span>:</span>
            <span>{timeLeft.minutes}min</span>
            <span>:</span>
            <span>{timeLeft.seconds}s</span>
          </div>

          <Link href={siteConfig.links.whatsapp} target="_blank">
            <button className="flex items-center gap-1 font-medium text-[10px] sm:text-xs underline underline-offset-4 decoration-foreground/0 hover:decoration-foreground cursor-pointer transition-colors duration-200 whitespace-nowrap">
              <Icons.whatsapp className="h-3 w-3 sm:h-4 sm:w-4" />
              WhatsApp ons
            </button>
          </Link>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="text-foreground/70 hover:text-foreground hover:bg-foreground/10 cursor-pointer h-6 w-6 shrink-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
