"use client";

import {
  CircleOff,
  Droplets,
  Earth,
  HandHeart,
  Leaf,
  LeafyGreen,
  MilkOff,
  Sprout,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const features = [
  { text: "PLANET SAFE", icon: <Earth size={35} /> },
  { text: "TRUSTWORTHY AND HYGIENIC", icon: <Droplets size={35} /> },
  { text: "COMPOSTABLE", icon: <Sprout size={35} /> },
  { text: "FEATHER SOFT", icon: <Leaf size={35} /> },
  { text: "NO MAINTENANCE", icon: <CircleOff size={35} /> },
  { text: "SAFE AND EFFECTIVE", icon: <HandHeart size={35} /> },
  { text: "ECO FRIENDLY", icon: <LeafyGreen size={35} /> },
  { text: "NO HARMFUL TOXINS", icon: <MilkOff size={35} /> },
];

const words = [
  "Eco-Friendly",
  "Innovative",
  "Sustainable",
  "Convenient",
  "Hygienic",
];

const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenWords = 1500;

const HeroType: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const angleStep = (2 * Math.PI) / features.length;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        setDisplayedText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setDisplayedText((prev) => currentWord.substring(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const typingTimer = setTimeout(
      handleTyping,
      isDeleting ? erasingSpeed : typingSpeed
    );

    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="text-3xl md:text-5xl lg:text-7xl font-bold mt-16 p-4 md:p-8 lg:p-24 max-w-xs md:max-w-3xl lg:max-w-5xl text-center lg:text-left">
        <span className="text-[#331846]">
          Transforming Public Restrooms with <br />
        </span>
        <span className="text-[#e8557f]">{displayedText}</span>
        <span className="border-r-2 border-[#171d26] animate-pulse">
          {" "}
          <br />
        </span>
        <span className="text-[#331846]">solution</span>
      </div>

      <div className="relative w-full max-w-5xl mt-4 sm:mt-16">
        <div className="relative flex items-center justify-center w-full h-96 md:h-[600px]">
          <div className="p-1 absolute flex items-center justify-center w-36 h-36 bg-[#b52f73] rounded-full shadow-lg">
            <img
              src="/nav-logo.png"
              alt="Center Logo"
              className="w-32 h-7 animate-pulse"
            />
          </div>

          {features.map((feature, index) => {
            const angle = index * angleStep;
            const radius = window.innerWidth < 768 ? 100 : 200;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            return (
              <div
                key={index}
                className="absolute flex flex-col items-center justify-center w-24 h-24 p-4 rounded-full shadow-lg transform bg-[#331846] animate-bounceUpDown"
                style={{
                  left: `calc(50% + ${x}px - 3rem)`,
                  top: `calc(50% + ${y}px - 3rem)`,
                }}
              >
                <div className="flex items-center justify-center w-full h-full text-white">
                  {feature.icon}
                </div>
                <span className="text-center text-white text-[8px]">
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroType;
