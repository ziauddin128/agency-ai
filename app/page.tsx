"use client";

import Hero from "@/components/web/home/Hero";
import Navbar from "@/components/web/shared/Navbar";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
    </div>
  );
}
