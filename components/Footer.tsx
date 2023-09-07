import React from "react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

type Props = {
  pageInfo: PageInfo;
};
const Footer = ({ pageInfo }: Props) => {
  const socials: Social[] = pageInfo.socials;

  const SocialIcons = () => {
    return (
      <div className="flex space-x-10 md:space-x-3">
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
    <div
      className="pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex flex-col items-center justify-center gap-[48px]"
      id="Container-footer-5-13"
    >
      <div
        className="flex items-center flex-col gap-[12px]"
        id="Block-top-5-13"
      >
        <div className="relative w-[56px] h-[60px]">
          <Image
            className="object-fill"
            src={urlFor(pageInfo.logoFooter).url()}
            fill
            alt="logo"
          />
        </div>
        <h1 className="text-center text-[20px] max-w-[360px] font-normal sm:text-[14px] sm:max-w-[260px] text-[#c4b5fd]">
          {pageInfo.footerTitle}
        </h1>
      </div>

      {/* socials icons */}
      {socials && <SocialIcons />}

      <div
        className="flex flex-col gap-[8px] justify-center items-center"
        id="Block-bottom-5-13"
      >
        {/* CopyRight © 2023 */}
        <div
          className="flex items-center justify-center gap-[8px]"
          id="Block-copyright-5-13"
        >
          <h1 className="text-[14px] font-normal text-[#c4b5fd]">
            Handcrafted by me{" "}
          </h1>

          <span className="fill-primary-300">
            <svg
              className="svg-inline--fa fa-copyright w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="copyright"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              {" "}
              e
              <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"></path>
            </svg>
          </span>
          <h1 className="text-[14px] font-normal text-[#c4b5fd]">
            twentytwentythree
          </h1>
        </div>
        <div
          className="flex gap-[8px] justify-center items-center"
          id="Block-madewith-5-13"
        >
          <h1 className="text-[14px] font-medium text-[#c4b5fd]">made with</h1>

          <div className="relative w-[80px] h-[40px]">
            <Image
              className="object-fill"
              src={urlFor(pageInfo.madeIcon).url()}
              fill
              alt="madeIcon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
