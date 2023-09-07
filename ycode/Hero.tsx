import React from "react";

const Hero = () => {
  return (
    <section
      className="max-w-[1280px] 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center 2xl:ml-[auto] 2xl:mr-[auto] ml-[auto] mr-[auto] block pb-[0px] pt-[88px] sm:pt-[32px]"
      id="section-hero"
    >
      <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px]">
        <div className="space-y-[2px] list-none block pl-[0px]">
          <li className="flex flex-col items-center justify-center gap-[128px] text-center sm:gap-[48px]">
            <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex flex-col gap-[8px]">
              <span className="font-bold text-[36px] sm:text-[20px]">
                Designer, Frontend Developer &amp; Mobile
              </span>
              <p className="text-[20px] font-normal sm:text-[14px]">
                I design and code beautifully simple things, and I love what I
                do.
              </p>
            </div>
            <div className="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] pl-[0px] pr-[0px] rounded-[9999px] border-[4px] w-[240px] h-[240px] max-w-[auto] sm:pl-[0px] sm:pr-[0px] sm:w-[160px] sm:h-[160px] border-[#c4b5fd]">
              <img
                className="w-[100%] h-[100%] max-w-[auto] rounded-[9999px] pt-[4px] pl-[4px] pb-[4px] pr-[4px] object-cover"
                src="https://assets.ycodeapp.com/assets/app15854/images/RL1JKEkNyS7pi9jRwK6dUz3eAoctOyGKIs5wWBvp-published.jpg"
                sizes="15360px"
              />
            </div>
            <div className="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] max-w-[auto] sm:pl-[0px] sm:pr-[0px] sm:object-fill">
              <img
                className="w-[auto] h-[auto] object-fill max-w-[768px] sm:max-w-[100%]"
                src="https://assets.ycodeapp.com/assets/app15854/images/JQUTsIwLkgV9ZVJBpuQbhzzdhCYW6QCtQDLxCF8A-published.svg"
                sizes="(max-width: nullpx) 100vw, nullpx"
              />
            </div>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Hero;
