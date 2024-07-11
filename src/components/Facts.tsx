import React, { useEffect } from "react";
//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

const UTIStatistics: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-14 py-8 md:py-14 my-16">
      <div
        className="text-center font-semibold text-xl md:text-5xl max-w-lg"
        data-aos="fade-up"
      >
        <h1>
          NIH states around{" "}
          <span className="text-[#B52F73]">one in two women</span> and{" "}
          <span className="text-[#B52F73]">one in 20 men</span> will get a{" "}
          <span className="text-[#B52F73]">UTI</span> in their lifetime
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div
          className="flex p-2 items-start justify-start w-40 h-40 md:w-52 md:h-52 shadow-md text-black border-2 border-[#331846] rounded-lg animate-bounceUpDown"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-start justify-start pt-2 pl-2">
            <span className="block mb-2 text-2xl md:text-4xl font-semibold text-[#B52F73]">
              60%
            </span>
            <p className="text-left text-sm md:text-base">
              Women refrain activities due to restroom cleanliness concerns.
            </p>
          </div>
        </div>
        <div
          className="flex p-2 items-start justify-start w-40 h-40 md:w-52 md:h-52 shadow-md border-2 border-[#331846] text-black rounded-lg animate-bounceUpDown"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex flex-col items-start justify-start pt-2 pl-2">
            <span className="block mb-2 text-2xl md:text-4xl font-semibold text-[#b52f73]">
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
