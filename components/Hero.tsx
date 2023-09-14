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
    <div className="px-8 lg:px-2">
      <div className="flex flex-col items-center justify-center text-center gap-24 xl:gap-12 md:gap-8">
        {/* Top Container */}
        <div className="flex flex-col gap-4 justify-center items-center">
          <span className="font-bold text-6xl lg:text-4xl md:text-3xl">
            {pageInfo?.title}
          </span>
          <p className="font-normal text-3xl lg:text-[22px] sm:max-w-[340px] text-gray-800">
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
  );
};

export default Hero;
