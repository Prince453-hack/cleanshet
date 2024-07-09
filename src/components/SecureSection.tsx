import { ShieldPlus } from "lucide-react";
import React from "react";

const SecureSection = () => {
  return (
    <div className="flex flex-col items-center justify-center p-16 bg-[#533164]">
      <div className="">
        <ShieldPlus size={250} className="text-white" />
      </div>
      <div className="">
        <h1 className="text-center mt-12 mb-6 text-6xl font-semibold text-white">
          Hygiene is Paramount
        </h1>
        <p className="text-muted-foreground text-xl">
          Our eco-friendly seat covers ensure cleanliness without compromising
          your safety
        </p>
      </div>
    </div>
  );
};

export default SecureSection;
