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
      <div className="space-y-[2px]">
        <div className="flex flex-col items-center justify-center text-center gap-[32px] sm:gap-[16px] text-white">
          <h1 className="font-bold text-3xl sm:text-xl">
            {pageInfo.sayHi}
          </h1>
          <p className="font-medium text-xl max-w-[650px] sm:text-lg">
            {pageInfo.introduce}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
