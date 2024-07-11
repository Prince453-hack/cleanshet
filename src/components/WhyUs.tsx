import Image from "next/image";
import React, { useEffect } from "react";
//@ts-expect-error
import AOS from "aos";
// import "aos/dist/aos.css";

const WhyUs: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-purple-100 p-16">
      <div className="flex flex-col lg:flex-row p-4 gap-10 items-center lg:items-start">
        <div
          className="flex-shrink-0 lg:ml-32 bg-purple-900 h-auto lg:h-[20rem] text-white p-6 shadow-md rounded-lg w-full lg:w-auto"
          data-aos="fade-right"
        >
          <div className="text-lg font-bold my-10">
            <Image
              src="/nav-logo.png"
              width={300}
              height={300}
              alt="CleanShet"
              className=""
            />
          </div>
          <div className="mt-4 text-2xl lg:text-4xl max-w-sm text-left font-bold text-pink-400">
            Redefining Restroom Solutions
          </div>
        </div>
        <div
          className="mt-8 lg:mt-0 lg:ml-8 text-center lg:text-left"
          data-aos="fade-left"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-[#331846] text-left mt-10">
            About Us
          </h2>
          <p className="text-xl lg:text-2xl font-semibold max-w-lg mt-4 lg:mt-10">
            Cleanshet aims to improve public washroom hygiene for both men and
            women, enhancing overall well-being and future opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
