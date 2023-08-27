"use client";

import React from "react";
import { motion } from "framer-motion";
import urlFor from "@/lib/urlFor";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <div className="flex flex-col relative text-center justify-center gap-8 pt-24 pb-[300px] items-center mx-auto bg-primary-700">
      <h3
        className="text-2xl font-bold">
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
