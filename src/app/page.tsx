"use client";

import ContactUs from "@/components/ContactUs";
import Facts from "@/components/Facts";
import Footer from "@/components/Footer";
import GoToSection from "@/components/GoToSection";
import HeroSection from "@/components/HeroSection";
import { Loading } from "@/components/Loading";
import Missions from "@/components/Missions";
import Navbar from "@/components/Navbar";
import OurMission from "@/components/OurMission";
import Problems from "@/components/Problems";
import SecureSection from "@/components/SecureSection";
import Solution from "@/components/Solution";
import WhyUs from "@/components/WhyUs";
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
      <Facts />
      {/* <Solution /> */}
      <WhyUs />
      <OurMission />
      <Missions />
      {/* <SecureSection /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}
