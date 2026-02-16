"use client";
import Image from "next/image";
import React, { useEffect } from "react";

export default function ThemeToggleBtn({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setTheme(systemDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button>
      <Image
        src={
          theme === "light" ? "/images/moon_icon.svg" : "/images/sun_icon.svg"
        }
        height={35}
        width={35}
        className="cursor-pointer h-8.75 w-8.75 border border-gray-500 rounded-full p-1.5"
        loading="eager"
        unoptimized
        alt="Theme"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </button>
  );
}
