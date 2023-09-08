"use client";

import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Link from "next/link";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

type Props = {
  pageInfo: PageInfo;
};
const Header = ({ pageInfo }: Props) => {
  const [open, setOpen] = useState(false);
  const rightMenu = () => {
    return (
      <div className="md:pr-[24px] md:pl-[24px] ml-[0px] mr-[0px] flex gap-[24px] items-center pr-[0px] pl-[0px] sm:pr-[0px] sm:gap-[12px] flex flex-row md:flex-col">
        <Link
          href={pageInfo.githubUrl || ""}
          className="text-[#000000] focus:outline-none font-normal text-[18px] cursor-pointer hover:underline"
        >
          github
        </Link>
        <Link href={pageInfo.upworkUrl || ""}>
          <button
            className="text-[14px] rounded-[24px] border-[2px] pl-[16px] pr-[16px] pt-[4px] pb-[4px] sm:pl-[12px] sm:pr-[12px] border border-primary-600 hover:bg-primary-600"
            type="button"
          >
            <span className="font-normal text-[18px] text-primary-600 hover:text-white">
              hire me
            </span>
          </button>
        </Link>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      {/* Top header bar */}
      <div
        className="md:pr-[24px] md:pl-[24px] flex justify-between items-center pl-[0px] pr-[0px] max-w-[1280px] lg:pr-[24px] lg:pl-[24px] sm:pl-[18px] sm:pr-[18px]"
        id="Container-header-5-13"
      >
        {/* LOGO */}
        <div id="Block-logo-5-13" className="w-[56px] sm:w-[40px] h-[40px]">
          <Image
            className=""
            src={urlFor(pageInfo.logo).url()}
            width={54}
            height={70}
            alt="logo"
          />
        </div>

        {/* MOBILE MENU */}
        <div className="hidden md:flex">
          {open ? (
            <VscChromeClose
              className="text-[24px]"
              onClick={() => setOpen(false)}
            />
          ) : (
            <BiMenuAltRight
              className="text-[28px]"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
        {/* RIGHT LINKS */}
        <div className="flex md:hidden max-w-[80rem]">{rightMenu()}</div>
      </div>

      {/* Bottom mobile menu */}
      {open && (
        <div className="flex flex-col justify-center items-center my-4">
          {rightMenu()}
        </div>
      )}
    </div>
  );
};

export default Header;
