import React from "react";
import Title from "./Title";
import Image from "next/image";
import { motion } from "motion/react";

interface TeamData {
  image: string;
  name: string;
  designation: string;
}

export default function Team() {
  const teamData: TeamData[] = [
    {
      image: "team-1.jfif",
      name: "Haley Carter",
      designation: "CEO & founder",
    },
    {
      image: "team-2.jfif",
      name: "James Walker",
      designation: "Ads manager",
    },
    {
      image: "team-3.avif",
      name: "Jessica Morgan",
      designation: "Vice president",
    },
    {
      image: "team-1.jfif",
      name: "Ashley Bennett",
      designation: "Marketing & sales",
    },
    {
      image: "team-2.jfif",
      name: "Emily Parker",
      designation: "Content marketer",
    },
    {
      image: "team-3.avif",
      name: "Ryan Mitchell",
      designation: "Content writer",
    },
    {
      image: "team-1.jfif",
      name: "Megan Brooks",
      designation: "Performance manager",
    },
    {
      image: "team-2.jfif",
      name: "Senior writer",
      designation: "Senior writer",
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="team"
      className="custom-container flex flex-col items-center gap-7 pt-20 md:pt-30 text-gray-700 dark:text-white relative"
    >
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brands success."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((team, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            key={idx}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400"
          >
            <Image
              src={`/images/${team.image}`}
              height={48}
              width={48}
              unoptimized
              loading="eager"
              className="w-12 h-12 rounded-full"
              alt="Team"
            />
            <div className="flex-1 max-sm:text-center">
              <h3 className="font-bold text-sm">{team.name}</h3>
              <p className="text-xs opacity-60">{team.designation}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
