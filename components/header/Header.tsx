"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Wrapper from "@/components/common/Wrapper";

type Props = {
  pageInfo: PageInfo;
};
const Header = ({ pageInfo }: Props) => {
  if (false) {
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
  }

  return (
    <div
      className="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] flex justify-between items-center pl-[0px] pr-[0px] max-w-[1280px] lg:pr-[24px] lg:pl-[24px] sm:pl-[18px] sm:pr-[18px]"
      id="Container-header-5-13"
    >
      <div
        id="Block-logo-5-13"
        data-collection-id="5"
        data-collection-type="local"
        data-record-id="13"
      >
        <Image
          className="h-[auto] max-w-[100%] w-[56px] sm:w-[40px]"
          src={urlFor(pageInfo.logo).url()}
          width={54}
          height={70}
          alt="logo"
        />
      </div>
      <div className="max-w-[80rem] mt-[0] mb-[0] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] ml-[0px] mr-[0px] flex gap-[24px] items-center pr-[0px] pl-[0px] sm:pr-[0px] sm:gap-[12px]">
        <a className="text-[#000000] focus:outline-none font-medium text-[18px] not-italic no-underline">
          github
        </a>
        <button
          className="text-white text-[14px] border-solid rounded-[24px] border-[2px] pl-[16px] pr-[16px] pt-[4px] pb-[4px] sm:pl-[12px] sm:pr-[12px] border-[#7c3aed]"
          type="button"
        >
          <span className="font-medium text-[18px] text-[#7c3aed]">
            Hire me
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
