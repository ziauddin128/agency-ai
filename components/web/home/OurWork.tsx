import React from "react";
import Title from "./Title";
import Image from "next/image";

interface WorkData {
  id: string | number;
  title: string;
  desc: string;
  image: string;
}

export default function OurWork() {
  const workData: WorkData[] = [
    {
      id: 1,
      title: "Mobile app marketing",
      desc: "We turn bold ideas into powerful digital solutions that connect, engage...",
      image: "work_mobile_app.png",
    },
    {
      id: 2,
      title: "Dashboard management",
      desc: "We help you execute your plan and deliver results.",
      image: "work_dashboard_management.png",
    },
    {
      id: 3,
      title: "Fitness app promotion",
      desc: "We help you create a marketing strategy that drives results.",
      image: "work_fitness_app.png",
    },
  ];

  return (
    <div
      id="our-work"
      className="custom-container flex flex-col items-center gap-7 pt-20 md:pt-30 text-gray-700 dark:text-white relative"
    >
      <Title
        title="Our latest work"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-6 w-full max-w-5xl">
        {workData.map((work, idx) => (
          <div
            key={idx}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <Image
              src={`/images/${work.image}`}
              height={400}
              width={400}
              unoptimized
              loading="eager"
              className="w-full rounded-xl"
              alt="Work ShowCase"
            />

            <h3 className="font-bold mt-3 mb-2 text-lg">{work.title}</h3>
            <h3 className="text-sm opacity-60 w-5/6">{work.desc}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
