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
    <div className="px-8 md:px-6">
      <div className="space-y-[2px] list-none block pl-[0px]">
        <div className="flex flex-col items-center justify-center text-center gap-24 xl:gap-12 md:gap-8">
          {/* Top Container */}
          <div className="p-8 md:p-6 sm:p-4 flex flex-col gap-4 justify-center items-center">
            <span className="font-bold text-6xl sm:text-lg md:text-xl lg:text-4xl">
              {pageInfo?.title}
            </span>
            <p className="font-normal text-3xl sm:text-base sm:max-w-[280px] text-gray-800">
              {pageInfo?.subTitle}
            </p>
          </div>
          {/* Middle Container */}
          <div className="relative md:px-6 rounded-full border-4 md:border-2 w-56 h-56 md:w-32 md:h-32 sm:w-24 sm:h-24 border-primary-300">
            <Image
              className="rounded-full p-1 object-cover"
              src={urlFor(pageInfo.profilePicture).url()}
              fill
              alt="profileImage"
            />
          </div>
          {/* Bottom Container   */}
            <Image
              className="object-contain"
              src={urlFor(pageInfo.heroImage).url()}
              width={2500}
              height={1000}
              alt="heroImage"
            />
        </div>
      </div>
    </div>
  );
};

export default Hero;
