import React, { useEffect } from "react";
//@ts-expect-error
import AOS from "aos";
import "aos/dist/aos.css";

const OurMission: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="my-24 px-4 lg:px-0">
      <h1
        className="text-center font-bold text-3xl lg:text-5xl text-[#331846]"
        data-aos="fade-up"
      >
        Our Mission
      </h1>
      <p
        className="text-xl lg:text-4xl my-14 max-w-5xl mx-auto text-center font-semibold border-2 border-[#331846] rounded-3xl py-6 px-5"
        data-aos="fade-up"
      >
        "We envision a future of Zero waste intimate paper products. Committing
        to minimize the impact of our shifts to the world"
      </p>
    </div>
  );
};

export default OurMission;
