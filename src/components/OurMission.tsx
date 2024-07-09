"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./Lamp";
import MissionSub from "./MissionSub";

export function OurMission() {
  return (
    <>
      <LampContainer className="pt-[16rem]">
        <motion.h1 className="mt-60 bg-gradient-to-br from-slate-300 to-slate-500 text-white py-1 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
          Our Mission
        </motion.h1>
        <MissionSub />
      </LampContainer>
    </>
  );
}
