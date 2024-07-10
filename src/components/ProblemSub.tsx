import { BriefcaseBusiness, GraduationCap, Users } from "lucide-react";
import React, { useEffect } from "react";
//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

const StatItem: React.FC<{
  percentage: string;
  text: string;
  icon: React.ReactNode;
}> = ({ percentage, text, icon }) => (
  <div
    className="flex flex-col items-center max-w-[280px] w-full"
    data-aos="fade-up"
  >
    <div className="relative w-full aspect-square max-w-[200px]">
      {" "}
      {/* Decreased max-width */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="customClipPath">
            <path d="M 15 15 C 25 5, 75 5, 85 15 C 95 25, 95 75, 85 85 C 75 95, 25 95, 15 85 C 5 75, 5 25, 15 15" />
          </clipPath>
        </defs>
        <rect
          width="100"
          height="100"
          clipPath="url(#customClipPath)"
          fill="#533164"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-4xl font-semibold"> {percentage}</p>
      </div>
      <div className="absolute top-3 right-2 w-1/4 aspect-square -translate-y-[10%] translate-x-[10%]">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="200"
            height="200"
            clipPath="url(#customClipPath)"
            fill="#d63384"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          {icon}
        </div>
      </div>
    </div>
    <p className="mt-1 text-center text-md font-semibold">{text}</p>
  </div>
);

const ProblemSub: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="absolute top-36 left-1/2 right-1/2 h-96 w-[200%] bg-zinc-200"
        style={{
          borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
          transform: "translateX(-50%)",
        }}
      />
      <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-16 lg:gap-24 p-8 md:p-12 lg:p-16">
        <StatItem
          percentage="90%"
          text="Students refrain from going to the washroom because the facilities are outright disgusting."
          icon={<GraduationCap size={30} />}
        />
        <StatItem
          percentage="91%"
          text="People avoid using public washrooms in high traffic areas (clubs, bars, restaurants)"
          icon={<Users size={30} />}
        />
        <StatItem
          percentage="20%"
          text="Employees shun workplace washrooms"
          icon={<BriefcaseBusiness size={30} />}
        />
      </div>
    </div>
  );
};

export default ProblemSub;
