"use client";

import React from "react";
import { motion } from "framer-motion";
import urlFor from "@/lib/urlFor";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  if (false) {
    return (
      <div className="section-padding-top flex flex-col relative text-center justify-center gap-8 items-center mx-auto px-6 md:px-0">
        <h3 className="text-xl md:text-2xl font-bold">{pageInfo.sayHi}</h3>

        <p className="max-w-[680px] text-base leading-7 font-base">
          {pageInfo.introduce}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] sm:pr-[12px] sm:pl-[12px]">
      <div className="list-disc space-y-[2px] pl-[0px]">
        <li className="flex flex-col items-center justify-center text-center gap-[32px] sm:gap-[12px]">
          <h1 className="font-bold text-[30px] sm:text-[20px] text-[#ffffff]">
            {pageInfo.sayHi}
          </h1>
          <p className="font-normal text-[14px] max-w-[650px] sm:text-[12px] text-[#ffffff]">
            {pageInfo.introduce}
          </p>
        </li>
      </div>
    </div>
  );
};

export default About;
