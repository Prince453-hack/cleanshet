import React from "react";
import ProblemSub from "./ProblemSub";

const Problems = () => {
  return (
    <div className="bg-gradient-to-l from-[#533164] to-[#4a2b57] p-8">
      <div className="relative text-4xl font-bold text-white text-center pb-4 mt-5 my-14">
        <span className="block">The Hidden Hygiene</span>
        <span className="relative text-[#e8557f] inline-block">
          Crisis{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 20"
            className="absolute bottom-0 left-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <ellipse
              cx="100"
              cy="10"
              rx="100"
              ry="10"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </svg>
        </span>{" "}
        <span> in Public Restrooms</span>
      </div>

      <div>
        <ProblemSub />
      </div>
    </div>
  );
};

export default Problems;
