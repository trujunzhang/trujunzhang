"use client";

import React from "react";
import { motion } from "framer-motion";
import urlFor from "@/lib/urlFor";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <div className="section-padding-top flex flex-col relative text-center justify-center gap-8 items-center mx-auto px-6 md:px-0">
      <h3
        className="text-xl md:text-2xl font-bold">
        {pageInfo.sayHi}
      </h3>

      <p
        className="max-w-[680px] text-base leading-7 font-base"
      >
        {pageInfo.introduce}
      </p>
    </div>
  );
};

export default About;
