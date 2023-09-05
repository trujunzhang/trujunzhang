import React from "react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
};
const Footer = ({ pageInfo, socials }: Props) => {
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
          <svg
            width="86"
            height="17"
            viewBox="0 0 86 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1433_32)">
              <path
                d="M64.0736 6.04585V16.6437H60.5654V4.38623L64.0736 6.04585Z"
                fill="#F37368"
              />
              <path
                d="M14.4227 14.6758L17.0538 16.9045L28.1388 11.2855L26.9938 8.60637L14.4227 14.6758ZM60.5654 7.84769L69.4822 3.343L67.9717 0.806152L60.5654 4.38619V7.84769Z"
                fill="#F7A199"
              />
              <path
                d="M35.472 5.21579V16.6435H32.1099V0.355469L35.472 5.21579ZM14.4227 14.6756L17.0538 16.9043L22.1212 4.57565L20.489 0.355469L14.4227 14.6756Z"
                fill="#F37368"
              />
              <path
                d="M20.489 0.355469H23.9484L30.3558 16.6435H26.7989L20.489 0.355469ZM35.9836 0.355469L43.3654 11.4749V16.6435L32.1099 0.355469H35.9836ZM49.6997 0.355469H53.1836V16.6435H49.6997V0.355469ZM60.5654 3.34279H55.2057V0.355469H67.7037L69.4821 3.34279H64.0736H60.5654Z"
                fill="#F04939"
              />
              <path
                d="M79.7875 10.4556V16.6436H76.328V10.4556"
                fill="#F7A199"
              />
              <path
                d="M82.1751 0.355469L76.328 10.4554H79.7875L85.8538 0.355469H82.1751Z"
                fill="#F04939"
              />
              <path
                d="M76.328 10.4554L70.2861 0.355469H74.0867L78.1552 7.27846L76.328 10.4554Z"
                fill="#F37368"
              />
              <path
                d="M1.43739 2.25244C1.43739 4.50478 2.87479 5.85619 5.74958 6.56746L8.7949 7.25501C11.5235 7.87144 13.1802 9.38881 13.1802 11.8545C13.2045 12.9214 12.8391 13.9646 12.1813 14.8181C12.1813 12.3524 10.8657 11.0247 7.72295 10.2186L4.72635 9.55477C2.31445 9.03318 0.46289 7.77661 0.46289 5.09751C0.46289 4.07802 0.803966 3.05854 1.43739 2.25244Z"
                fill="#F04939"
              />
              <path
                d="M43.3654 10.6451V0.355469H46.7275V16.6435H43.3654V10.6451Z"
                fill="#F37368"
              />
              <path
                d="M10.3054 11.2379C11.5966 12.044 12.1813 13.182 12.1813 14.8179C11.085 16.1693 9.20907 16.9043 6.99207 16.9043C3.26459 16.9043 0.609065 15.1024 0.0487251 11.9966H3.63003C4.09292 13.4191 5.31105 14.083 6.96771 14.083C8.94108 14.1067 10.281 13.0635 10.3054 11.2379ZM1.43739 2.22852C2.48499 0.900828 4.28782 0.0947266 6.48045 0.0947266C10.3054 0.0947266 12.498 2.06256 13.0584 4.81279H9.59887C9.20907 3.72218 8.25892 2.86866 6.52918 2.86866C4.65326 2.89237 3.3864 3.93556 3.31331 5.59518C2.05791 4.92142 1.38867 3.60364 1.43739 2.22852Z"
                fill="#F37368"
              />
            </g>
            <defs>
              <clipPath id="clip0_1433_32">
                <rect width="86" height="17" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
