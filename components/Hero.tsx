"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  return (
    <div className="max-w-[80rem] mx-[auto] px-8 md:px-6">
      <div className="space-y-[2px] list-none block pl-[0px]">
        <li className="flex flex-col items-center justify-center gap-[128px] text-center sm:gap-[48px]">
          <div className="p-8 md:p-6 sm:p-4 flex flex-col gap-4 justify-center items-center">
            <span className="font-bold text-4xl sm:text-lg md:text-xl lg:text-[28px]">
              {pageInfo?.title}
            </span>
            <p className="text-xl font-normal sm:text-sm sm:max-w-[240px]">
              {pageInfo?.subTitle}
            </p>
          </div>
          <div className="relative md:px-6 rounded-full border-4 md:border-2 w-56 h-56 md:w-32 md:h-32 sm:w-24 sm:h-24 border-primary-300">
            <Image
              className="rounded-full p-1 object-cover"
              src={urlFor(pageInfo.profilePicture).url()}
              fill
              alt="profileImage"
            />
          </div>
          {/* <div className="relative mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] max-w-[auto] sm:pl-[0px] sm:pr-[0px] sm:object-fill"> */}
          <div className="relative w-full mx-auto sm:h-[140px] md:h-[300px] h-[400px]">
            <Image
              className="object-fill sm:max-w-[100%]"
              src={urlFor(pageInfo.heroImage).url()}
              fill
              alt="heroImage"
            />
          </div>
        </li>
      </div>
    </div>
  );
};

export default Hero;
