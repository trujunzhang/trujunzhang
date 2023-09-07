
import React from "react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

type Props = {
  pageInfo: PageInfo;
};
const Footer = ({ pageInfo}: Props) => {
  const socials: Social[] = pageInfo.socials;


  const SocialIcons = () => {
    return (
      <div className="flex space-x-3 md:space-x-10">
        {socials.map((social) => (
          <div
            key={social._id}
            className="relative rounded-full border-2 border-primary-300 w-[48px] h-[48px]"
          >
            <Image
              className="object-fit p-[12px]"
              src={urlFor(social?.icon).url()}
              fill
              alt={social?.title}
            />
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center justify-center gap-12 pb-8 md:pb-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative w-[60px] h-[60px]">
          <Image
            className="object-fill"
            src={urlFor(pageInfo.logoFooter).url()}
            fill
            alt="logo"
          />
        </div>

        <h3 className="text-center text-white text-base sm:text-base md:text-xl max-w-[300px]">
          {pageInfo.footerTitle}
        </h3>
      </div>

      {socials && <SocialIcons />}

      <div className="flex flex-col items-center justify-center gap-2">
        {/* CopyRight © 2023 */}
        <div className="flex flex-row items-center justify-center gap-2">
          Handcrafted by me
          <span className="">
            <svg
              className="svg-inline--fa fa-copyright w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="copyright"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              {" "}
              e
              <path
                fill="currentColor"
                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"
              ></path>
            </svg>
          </span>
          twentytwentythree
        </div>
        {/* made with sanity */}
        <div className="flex flex-row items-center justify-center gap-2">
          <span>made with</span>

        <div className="relative w-[80px] h-[40px]">
          <Image
            className="object-fill"
            src={urlFor(pageInfo.madeIcon).url()}
            fill
            alt="logo"
          />
        </div>



        </div>
      </div>
    </div>
  );
};

export default Footer;
