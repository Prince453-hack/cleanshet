import React from "react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-zinc-900 py-14">
      <div className="flex flex-col items-center justify-center pt-2">
        <Image src="/nav-logo.png" width={200} height={200} alt="Logo" />
        <p className="text-sm text-zinc-600 mt-1 mb-1 text-center">
          &copy; {currentYear} by CleanShet Ltd
        </p>
      </div>
    </div>
  );
};

export default Footer;
