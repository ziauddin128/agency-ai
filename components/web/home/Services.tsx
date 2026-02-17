import Image from "next/image";
import React from "react";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

interface ServicesData {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function Services() {
  const servicesData: ServicesData[] = [
    {
      id: 1,
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: "ads_icon.svg",
    },
    {
      id: 2,
      title: "Content marketing",
      description: "We help you execute your plan and deliver results.",
      icon: "content_icon.svg",
    },
    {
      id: 3,
      title: "Content writing",
      description:
        "We help you create a marketing strategy that drives results.",
      icon: "content_icon.svg",
    },
    {
      id: 4,
      title: "Social media",
      description:
        "We help you build a strong social media presence and engage with your audience.",
      icon: "social_icon.svg",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="custom-container flex flex-col items-center gap-7 pt-20 md:pt-30 text-gray-700 dark:text-white relative"
    >
      <Image
        src="/images/bgImage2.png"
        height={2000}
        width={2000}
        unoptimized
        loading="eager"
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
        alt="Bg Image"
      />

      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
        {servicesData.map((service, idx) => (
          <ServiceCard key={idx} service={service} index={idx} />
        ))}
      </div>
    </motion.div>
  );
}
