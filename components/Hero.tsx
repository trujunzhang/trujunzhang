"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  return (
    <div className="section-body flex flex-col space-y-32 py-12 items-center justify-center text-center overflow-hidden">
      <div className="flex flex-col gap-4">
        <h1 className="text-gray-800 text-5xl font-bold">{pageInfo?.title}</h1>
        <p className="text-xl text-gray-700 text-medium">
          {pageInfo?.subTitle}
        </p>
      </div>

      <div className="relative rounded-full border-4 border-secondary w-[200px] h-[200px]">
        <Image
          className=" rounded-full object-cover  p-[4px]"
          src={urlFor(pageInfo.profilePicture).url()}
          fill
          alt="profileImage"
        />
      </div>

      <div className="relative w-full h-[400px]">
        <Image
          className="object-fill"
          src={urlFor(pageInfo.heroImage).url()}
          fill
        />
      </div>

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">
          {pageInfo?.role}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
