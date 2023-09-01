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
    <div className="section-body section-padding-top flex flex-col space-y-12 md:space-y-32 items-center justify-center text-center">
      <div className="flex flex-col gap-6 px-12 md:px-0">
        <h1 className="text-gray-800 text-xl md:text-5xl font-bold">{pageInfo?.title}</h1>
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

      <div className="relative w-full h-[180px] md:h-[400px]">
        <Image
          className="object-fill"
          src={urlFor(pageInfo.heroImage).url()}
          fill
          alt="heroImage"
        />
      </div>

    </div>
  );
};

export default Hero;
