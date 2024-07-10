import React, { useEffect } from "react";
//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

const UTIStatistics: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-14 py-8 md:py-14">
      <div
        className="text-center font-semibold text-xl md:text-4xl max-w-xl"
        data-aos="fade-up"
      >
        <h1>
          NIH states around one in two women and one in 20 men will get a UTI in
          their lifetime
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div
          className="flex p-2 items-start justify-start w-40 h-40 md:w-52 md:h-52 shadow-md bg-[#A02D60] text-white rounded-lg animate-bounceUpDown"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-start justify-start pt-2 pl-2">
            <span className="block mb-2 text-2xl md:text-4xl font-semibold">
              60%
            </span>
            <p className="text-left text-sm md:text-base">
              Women refrain activities due to restroom cleanliness concerns.
            </p>
          </div>
        </div>
        <div
          className="flex p-2 mt-8 md:mt-24 items-start justify-start w-40 h-40 md:w-52 md:h-52 shadow-md bg-[#A02D60] text-white rounded-lg animate-bounceUpDown"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex flex-col items-start justify-start pt-2 pl-2">
            <span className="block mb-2 text-2xl md:text-4xl font-semibold">
              20%
            </span>
            <p className="text-left text-sm md:text-base">
              Increase in earnings for women in the future can result from
              better hygiene in secondary schools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UTIStatistics;
