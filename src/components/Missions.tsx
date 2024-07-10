import { BriefcaseBusiness, GraduationCap, Users } from "lucide-react";
import React, { useEffect } from "react";
//@ts-expect-error
import AOS from "aos";
import "aos/dist/aos.css";

const StatItem: React.FC<{
  percentage: string;
  text: string;
}> = ({ percentage, text }) => (
  <div className="flex flex-col items-center w-full" data-aos="flip-up">
    <div className="relative w-full aspect-square max-w-[240px]">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="customClipPath">
            <path d="M 10 10 C 20 0, 80 0, 90 10 C 100 20, 100 80, 90 90 C 80 100, 20 100, 10 90 C 0 80, 0 20, 10 10" />
          </clipPath>
        </defs>
        <rect
          width="100"
          height="100"
          clipPath="url(#customClipPath)"
          fill="#d63384"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        <p className="text-white text-center text-xl mb-4 font-bold">
          {percentage}
        </p>
        <p className="text-white font-normal text-center text-sm">{text}</p>
      </div>
    </div>
  </div>
);

const Mission: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative w-full overflow-hidden px-4 md:px-8 lg:px-16 mb-10">
      <div className="text-center font-semibold my-10 text-3xl md:text-5xl">
        Why CleanShet ?
      </div>
      <div
        className="absolute top-36 left-1/2 right-1/2 h-96 w-[200%] bg-white"
        style={{
          borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
          transform: "translateX(-50%)",
        }}
      />
      <div className="relative w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 py-6">
        <StatItem
          percentage="Natural Materials"
          text="Our eco-friendly seat covers are crafted from sustainable, all-natural materials."
        />
        <StatItem
          percentage="Water resistant"
          text="Stay dry and clean with water-resistant seat covers that guard against spills and splashes."
        />
        <StatItem
          percentage="Sustainable"
          text="Embrace a cleaner and safer bathroom experience with our flushable seat covers"
        />
        <StatItem
          percentage="Protective 3 Layers"
          text="Enjoy enhanced comfort and protection with three layers of defense."
        />
        <StatItem
          percentage="Flushable & Disposable"
          text="Flushable & Disposable: Easily flush our seat covers after use for quick and convenient disposal."
        />
        <StatItem
          percentage="Flexible Usage Anywhere"
          text="Experience the freedom of flexible usage anywhere - Your hygienic companion on the go."
        />
      </div>
    </div>
  );
};

export default Mission;
