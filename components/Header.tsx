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
      <div className="md:px-[24px] flex gap-[24px] items-center sm:gap-[12px] flex flex-row xl:flex-col">
        <Link
          href={pageInfo.githubUrl || ""}
          className="text-[#000000] focus:outline-none font-normal text-[18px] cursor-pointer hover:underline"
        >
          github
        </Link>
        <Link href={pageInfo.upworkUrl || ""}>
          <button
            className="text-[14px] rounded-[24px] border-[2px] px-[16px] py-[4px] sm:px-[12px] border border-primary-600 hover:bg-primary-600"
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
        className="md:px-[24px] flex justify-between items-center pl-[0px] pr-[0px] lg:px-[24px] sm:px-[18px] xl:px-[38px]"
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
        <div className="hidden xl:flex">
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
        <div className="flex xl:hidden">{rightMenu()}</div>
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
