import React from "react";

const About = () => {
  return (
    <section
      className="pt-[84px] pb-[280px] sm:pb-[220px] sm:pt-[56px] bg-[#7c3aed]"
      id="section-about"
    >
      <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] sm:pr-[12px] sm:pl-[12px]">
        <div className="list-disc space-y-[2px] pl-[0px]">
          <li className="flex flex-col items-center justify-center text-center gap-[32px] sm:gap-[12px]">
            <h1 className="font-bold text-[30px] sm:text-[20px] text-[#ffffff]">
              {" "}
              Hi, I’m Zhang. Nice to meet you.{" "}
            </h1>
            <p className="font-normal text-[14px] max-w-[650px] sm:text-[12px] text-[#ffffff]">
              Since beginning my journey as a freelance developer over 11 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my chops
              one design problem at a time.
            </p>
          </li>
        </div>
      </div>
    </section>
  );
};

export default About;
