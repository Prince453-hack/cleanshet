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
      <div className="relative text-5xl font-bold mx-auto text-white max-w-2xl text-center pb-4 mt-5 mb-1">
        <span className="text-[#331846]">Know the </span>
        <span className="relative text-[#B52F73] inline-block underline underline-offset-4">
          Hidden{" "}
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
