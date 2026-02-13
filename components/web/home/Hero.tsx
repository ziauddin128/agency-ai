import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white">
      <div className="inline-flex gap-2 items-center border border-gray-300 p-1.5 pr-4 rounded-full">
        <Image
          src="/images/group_profile.png"
          height={20}
          width={80}
          alt="Group Photo"
          unoptimized
          loading="eager"
          className="w-20 object-contain"
        />
        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl">
        Turning imagination into{" "}
        <span className="bg-linear-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact.
      </h1>

      <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3">
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </p>

      <div className="relative">
        <Image
          src="/images/hero_img.png"
          height={500}
          width={500}
          alt="Hero Image"
          unoptimized
          loading="eager"
          className="w-full max-w-6xl"
        />

        <Image
          src="/images/bgImage1.png"
          height={1000}
          width={1200}
          alt="Hero Bg Gradient Image"
          unoptimized
          loading="eager"
          className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden"
        />
      </div>
    </div>
  );
}
