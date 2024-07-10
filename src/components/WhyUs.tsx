import Image from "next/image";
import React, { useEffect } from "react";
//@ts-expect-error
import AOS from "aos";
import "aos/dist/aos.css";

const MissionStatement: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center p-8 mb-10">
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 md:left-1/4 md:translate-x-0 bg-purple-100 rounded-tl-lg rounded-bl-lg w-full h-full md:w-3/4"
        style={{ zIndex: 0 }}
      ></div>
      <div
        className="relative flex flex-col md:flex-row items-center gap-8"
        style={{ zIndex: 1 }}
      >
        <div
          className="bg-purple-900 text-white p-10 h-64 rounded-lg z-10 text-center flex flex-col items-center shadow-md"
          data-aos="fade-left"
        >
          <Image
            src="/logo.png"
            width={300}
            height={300}
            alt="Logo"
            className="mx-auto"
          />
          <p className="mt-2 text-xl font-semibold max-w-md">
            Redefining Restroom Solutions
          </p>
        </div>
        <div className="text-center max-w-xl" data-aos="fade-left">
          <h2 className="text-4xl font-bold">Our Mission</h2>
          <p className="mt-4 text-lg">
            We envision a future of Zero waste intimate paper products.
            Committing to minimize the impact of our shits to the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
