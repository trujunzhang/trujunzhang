"use client";

import React from "react";
import { motion } from "framer-motion";
import urlFor from "@/lib/urlFor";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <div className="p-[32px] md:p-[24px] sm:p-[32px]">
      <div className="list-disc space-y-[2px]">
        <div className="flex flex-col items-center justify-center text-center gap-[32px] sm:gap-[16px]">
          <h1 className="font-bold text-3xl sm:text-xl text-white">
            {pageInfo.sayHi}
          </h1>
          <p className="font-normal text-sm max-w-[650px] sm:text-sm text-white">
            {pageInfo.introduce}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
