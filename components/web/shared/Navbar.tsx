"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";

export default function Navbar({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70"
    >
      <Image
        src={theme === "light" ? "/images/logo.svg" : "/images/logo_dark.svg"}
        height={140}
        width={140}
        unoptimized
        loading="eager"
        alt="Logo"
      />

      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${sidebarOpen ? "max-sm:w-60 max-sm:pl-10" : "max-sm:w-0 overflow-hidden"} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 max-sm:transition-all`}
      >
        <Image
          src="/images/close_icon.svg"
          width={16}
          height={16}
          alt="Close Icon"
          loading="eager"
          unoptimized
          className="absolute right-4 top-4 cursor-pointer sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />

        <Link
          href="#"
          onClick={() => setSidebarOpen(false)}
          className="sm:border-b sm:border-transparent sm:hover:border-b-gray-700"
        >
          Home
        </Link>
        <Link
          href="#services"
          onClick={() => setSidebarOpen(false)}
          className="sm:border-b sm:border-transparent sm:hover:border-b-gray-700"
        >
          Services
        </Link>
        <Link
          href="#our-work"
          onClick={() => setSidebarOpen(false)}
          className="sm:border-b sm:border-transparent sm:hover:border-b-gray-700"
        >
          Our Work
        </Link>
        <Link
          href="#contact-us"
          onClick={() => setSidebarOpen(false)}
          className="sm:border-b sm:border-transparent sm:hover:border-b-gray-700"
        >
          Contact Us
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <button>
          <Image
            src={
              theme === "light"
                ? "/images/menu_icon.svg"
                : "/images/menu_icon_dark.svg"
            }
            alt="Menu Button"
            width={32}
            height={32}
            className="w-8 sm:hidden"
            onClick={() => setSidebarOpen(true)}
          />
        </button>

        <Link
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Connect
          <Image
            src="/images/arrow_icon.svg"
            height={14}
            width={14}
            alt="Arrow Icon"
            loading="eager"
            unoptimized
          />
        </Link>
      </div>
    </motion.div>
  );
}
