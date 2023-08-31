"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className="section-body py-6 flex justify-between items-center">
      {/*Left Container*/}
      <div>
        <svg
          className="svg-inline--fa fa-mf-logo has-text-primary fa-4x w-[54px] h-[50px] fill-primary-700"
          aria-hidden="true"
          focusable="false"
          data-prefix="fak"
          data-icon="mf-logo"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          data-fa-i2svg=""
          // style={{width: 1.25em}}
        >
          <path d="M458.566 321.7c-19.552 0-37.558-10.598-46.947-27.745l-28.553-52.116-24.007 44.217c-12.003 23.505-45.69 26.588-57.886 3.179l-25.168-48.263-37.945 69.938-45.495.289 54.4-102.691c11.52-21.771 42.592-22.157 54.789-.77l27.104 47.78 26.33-47.684c11.807-21.386 42.783-21.483 54.591-.097l36.883 66.277c6.679 12.042 24.973 7.322 24.973-6.358l.096-88.144c0-32.753-26.813-59.437-59.725-59.437h-183.82c-32.911 0-59.724 26.684-59.724 59.437v152.782c0 32.756 26.813 59.44 59.725 59.44h246.642V432H228.187C172.915 432 128 387.302 128 332.294v-152.59C128 124.602 172.818 80 228.187 80h183.627C467.181 80 512 124.602 512 179.704v88.82c0 29.38-23.91 53.175-53.434 53.175z"></path>
        </svg>
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
