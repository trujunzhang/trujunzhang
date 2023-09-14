"use client";

import React from "react";
import { motion } from "framer-motion";
import urlFor from "@/lib/urlFor";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <div className="p-8 md:p-6 sm:p-8">
      <div className="list-disc space-y-[2px]">
        <div className="flex flex-col items-center justify-center text-center gap-[32px] sm:gap-[16px]">
          <h1 className="font-bold text-3xl sm:text-xl text-white">
            {pageInfo.sayHi}
          </h1>
          <p className="font-normal text-base max-w-[650px] sm:text-base text-white">
            {pageInfo.introduce}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
