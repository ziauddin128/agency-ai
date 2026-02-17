import React from "react";
import { motion } from "motion/react";

export default function Title({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-medium text-center"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto text-center text-gray-500 dark:text-white/75 my-6"
      >
        {desc}
      </motion.p>
    </div>
  );
}
