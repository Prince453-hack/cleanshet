"use client";

import Footer from "@/components/Footer";
import GoToSection from "@/components/GoToSection";
import HeroSection from "@/components/HeroSection";
import { Loading } from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { OurMission } from "@/components/OurMission";
import Problems from "@/components/Problems";
import SecureSection from "@/components/SecureSection";
import Solution from "@/components/Solution";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Problems />
      <Solution />
      <GoToSection />
      <OurMission />
      {/* <SecureSection /> */}
      <Footer />
    </div>
  );
}
