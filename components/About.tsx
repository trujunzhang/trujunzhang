"use client";

import React from "react";
import { motion } from "framer-motion";
import urlFor from "@/lib/urlFor";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <div className="px-8 md:px-6 sm:px-4">
      <div className="space-y-0.5">
        <div className="flex flex-col items-center justify-center text-center gap-8 sm:gap-4 text-white">
          <h1 className="font-bold text-3xl sm:text-2xl">
            {pageInfo.sayHi}
          </h1>
          <p className="font-medium text-2xl max-w-[680px] sm:text-lg">
            {pageInfo.introduce}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
