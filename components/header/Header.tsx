"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

type Props = {
  pageInfo: PageInfo;
};
const Header = ({ pageInfo }: Props) => {
  return (
    <header className="section-body py-6 flex justify-between items-center px-4 lg:px-0">
      {/*Left Container*/}
      <div className="relative w-[70px]">
        <Image
          className="object-cover"
          src={urlFor(pageInfo.logo).url()}
          width={54}
          height={70}
          alt="logo"
        />
      </div>
      {/*Right Container*/}
      <div className="flex gap-6 pr-4 xl:pr-0">
        <button className="text-black text-semibold">Say Hello</button>
        <button className="border-[2px] border-primary-700 text-primary-700 text-semibold rounded-full px-6 py-2">
          Hire me
        </button>
      </div>
    </header>
  );
};

export default Header;
