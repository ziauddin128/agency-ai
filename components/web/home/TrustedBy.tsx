import Image from "next/image";
import { motion } from "motion/react";

interface CompaniesLogo {
  label: string;
  logo: string;
}

export default function TrustedBy() {
  const companiesLogo: CompaniesLogo[] = [
    {
      label: "Microsoft",
      logo: "microsoft_logo.png",
    },
    {
      label: "Zoom",
      logo: "zoom_logo.png",
    },
    {
      label: "Rakuten",
      logo: "rakuten_logo.png",
    },
    {
      label: "Coinbase",
      logo: "coinbase_logo.png",
    },
    {
      label: "Airnb",
      logo: "airbnb_logo.svg",
    },
    {
      label: "Google",
      logo: "google_logo.svg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="custom-container flex flex-col items-center gap-10 text-gray-700 dark:text-white/80"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-semibold"
      >
        Trusted by Leading Companies
      </motion.h3>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-10 m-4"
      >
        {companiesLogo.map((item, idx) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            key={idx}
          >
            <Image
              src={`/images/${item.logo}`}
              height={24}
              width={24}
              unoptimized
              loading="eager"
              className="max-h-5 sm:max-h-6 w-auto dark:drop-shadow-xl"
              alt="Company"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
