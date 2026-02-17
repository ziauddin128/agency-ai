import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

export default function Footer({ theme }: { theme: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="custom-container bg-slate-50 dark:bg-gray-900 pt-10 mt-20 md:mt-40"
    >
      {/* Footer Top */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-5 text-gray-700 dark:text-gray-400"
        >
          <Image
            src={`${theme === "light" ? "/images/logo.svg" : "/images/logo_dark.svg"}`}
            height={60}
            width={130}
            unoptimized
            loading="eager"
            className="w-32 sm:w-44"
            alt="Logo"
          />
          <p className="max-w-md">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <ul className="flex flex-wrap gap-y-2 gap-x-8">
            <li>
              <Link className="hover:text-primary" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="#services">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="#our-work">
                Our Work
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="#contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400"
        >
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm mt-2 mb-6">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className="flex gap-2 text-sm">
            <input
              type="text"
              className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
              placeholder="Enter your email"
              required
              name="email"
            />
            <button className="cursor-pointer bg-primary text-white rounded px-6">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      <hr className="border-gray-300 dark:border-gray-600 my-6" />

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap"
      >
        <p>Copyright 2026 Agency.AI - All right reserved</p>

        <div className="flex gap-4 items-center justify-between">
          <Image
            src="/images/facebook_icon.svg"
            height={16}
            width={16}
            unoptimized
            loading="eager"
            className="h-4 w-4"
            alt="Social"
          />

          <Image
            src="/images/twitter_icon.svg"
            height={16}
            width={16}
            unoptimized
            loading="eager"
            className="h-4 w-4"
            alt="Social"
          />

          <Image
            src="/images/instagram_icon.svg"
            height={16}
            width={16}
            unoptimized
            loading="eager"
            className="h-4 w-4"
            alt="Social"
          />

          <Image
            src="/images/linkedin_icon.svg"
            height={16}
            width={16}
            unoptimized
            loading="eager"
            className="h-4 w-4"
            alt="Social"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
