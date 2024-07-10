import React, { useEffect } from "react";
import ProblemSub from "./ProblemSub";
//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

const Problems = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="pt-8 sm:mt-[-1px] mb-[-30px]">
      <div className="relative text-5xl font-bold text-white text-center pb-4 mt-5 mb-1">
        <span className="text-[#331846]">Know the </span>
        <span className="relative text-[#e8557f] inline-block underline underline-offset-4">
          Hidden{" "}
          {/* <svg
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
              stroke="#331846"
              strokeWidth=""
            />
          </svg> */}
        </span>{" "}
        <span className="text-[#331846]" data-aos="fade-up">
          {" "}
          Restroom hygiene crisis ?
        </span>
      </div>

      <div>
        <ProblemSub />
      </div>
    </div>
  );
};

export default Problems;
