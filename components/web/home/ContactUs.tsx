import React from "react";
import Title from "./Title";
import Image from "next/image";
import toast from "react-hot-toast";

export default function ContactUs() {
  const onSubmit = async (event: {
    preventDefault: () => void;
    target: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "d9ce07f5-98f0-47c2-a571-36072258039f");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      // setResult(data.success ? "Success!" : "Error");
      if (data.success) {
        toast.success("Thank you for submission");
      } else {
        toast.error("Message send failed");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "An error occurred");
    }
  };

  return (
    <div
      id="contact-us"
      className="custom-container flex flex-col items-center gap-7 pt-20 md:pt-30 text-gray-700 dark:text-white relative"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <form
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="text-sm font-medium mb-2">Your Name</p>
          <div className="flex pl-3 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
            <Image
              src="/images/person_icon.svg"
              height={16}
              width={16}
              unoptimized
              loading="eager"
              alt="Icon"
            />
            <input
              type="text"
              placeholder="Enter your name"
              className="p-3 w-full text-sm outline-none"
              required
              name="name"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-2">Email Address</p>
          <div className="flex pl-3 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
            <Image
              src="/images/email_icon.svg"
              height={16}
              width={16}
              unoptimized
              loading="eager"
              alt="Icon"
            />
            <input
              type="email"
              placeholder="Enter email address"
              className="p-3 w-full text-sm outline-none"
              required
              name="email"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="text-sm font-medium mb-2">Write Message</p>

          <textarea
            rows={8}
            placeholder="Write your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
            required
            name="message"
          />
        </div>

        <button className="cursor-pointer text-sm font-medium px-10 py-3 w-max rounded-full bg-primary text-white flex items-center gap-2 transition-all hover:scale-103">
          Submit
          <Image
            src="/images/arrow_icon.svg"
            height={16}
            width={16}
            unoptimized
            loading="eager"
            alt="Arrow Icon"
          />
        </button>
      </form>
    </div>
  );
}
