import { BackgroundGradientAnimation } from "@/components/GradientAnimation";
import Image from "next/image";
import React from "react";

export function Loading() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center overflow-hidden text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          <Image
            src="/logo.png"
            height={400}
            width={400}
            alt="logo"
            className="animate-pulse"
          />
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
