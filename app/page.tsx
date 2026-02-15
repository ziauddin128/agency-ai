"use client";

import Hero from "@/components/web/home/Hero";
import OurWork from "@/components/web/home/OurWork";
import Services from "@/components/web/home/Services";
import Team from "@/components/web/home/Team";
import TrustedBy from "@/components/web/home/TrustedBy";
import Navbar from "@/components/web/shared/Navbar";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Team />
    </div>
  );
}
