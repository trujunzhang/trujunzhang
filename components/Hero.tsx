"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  if (false) {
    return (
      <div className="section-body section-padding-top flex flex-col space-y-12 md:space-y-32 items-center justify-center text-center">
        <div className="flex flex-col gap-6 px-12 md:px-0">
          <h1 className="text-gray-800 text-2xl md:text-4xl lg:text-5xl font-bold">
            {pageInfo?.title}
          </h1>
          <p className="text-base md:text-xl text-gray-700 font-medium">
            {pageInfo?.subTitle}
          </p>
        </div>

        <div className="relative rounded-full border-4 border-primary-300 w-[200px] h-[200px]">
          <Image
            className=" rounded-full object-cover  p-[4px]"
            src={urlFor(pageInfo.profilePicture).url()}
            fill
            alt="profileImage"
          />
        </div>

        <div className="relative w-full h-[180px] md:h-[300px] lg:h-[400px]">
          <Image
            className="object-fill"
            src={urlFor(pageInfo.heroImage).url()}
            fill
            alt="heroImage"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px]">
      <div className="space-y-[2px] list-none block pl-[0px]">
        <li className="flex flex-col items-center justify-center gap-[128px] text-center sm:gap-[48px]">
          <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex flex-col gap-[8px]">
            <span className="font-bold text-[36px] sm:text-[20px]">
              {pageInfo?.title}
            </span>
            <p className="text-[20px] font-normal sm:text-[14px]">
              {pageInfo?.subTitle}
            </p>
          </div>
          <div className="relative mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] pl-[0px] pr-[0px] rounded-[9999px] border-[4px] w-[240px] h-[240px] max-w-[auto] sm:pl-[0px] sm:pr-[0px] sm:w-[160px] sm:h-[160px] border-[#c4b5fd]">
            <Image
              className="w-[100%] h-[100%] max-w-[auto] rounded-[9999px] pt-[4px] pl-[4px] pb-[4px] pr-[4px] object-cover"
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
