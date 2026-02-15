import React from "react";

export default function Title({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div>
      <h1 className="text-3xl sm:text-5xl font-medium text-center">{title}</h1>
      <p className="max-w-lg mx-auto text-center text-gray-500 dark:text-white/75 my-6">
        {desc}
      </p>
    </div>
  );
}
