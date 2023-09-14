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
      <div className="md:px-6 gap-[24px] items-center sm:gap-[12px] flex flex-row xl:flex-col">
        <Link
          href={pageInfo.githubUrl || ""}
          target="_blank"
          className="text-black focus:outline-none font-normal text-lg cursor-pointer hover:underline"
        >
          github
        </Link>
        <Link href={pageInfo.upworkUrl || ""} target="_blank">
          <button
            className="text-sm rounded-3xl border-2 px-8 py-2 md:px-4 md:py-1 border-primary-600 hover:bg-primary-600"
            type="button"
          >
            <span className="font-normal text-lg text-primary-600 hover:text-white">
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
        className="flex justify-between items-center px-[0px] 2xl:px-12 lg:px-6 md:px-6 sm:px-4"
        id="Container-header"
      >
        {/* LOGO */}
        <Image
          className=""
          src={urlFor(pageInfo.logo).url()}
          width={54}
          height={70}
          alt="logo"
        />

        {/* MOBILE MENU */}
        <div className="hidden xl:flex">
          {open ? (
            <VscChromeClose
              className="text-2xl"
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
