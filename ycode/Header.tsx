import React from "react";

const Header = () => {
  return (
    <section className="pt-[32px] pb-[32px]" id="section-header">
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
          <img
            className="h-[auto] max-w-[100%] w-[56px] sm:w-[40px]"
            src="https://assets.ycodeapp.com/assets/app15854/images/IpG8xPKbeFPg6Nd09ChiQ3G7TmkzkZZxaDYoRv3q-published.svg"
            sizes="112px"
          />
        </div>
        <div className="max-w-[80rem] mt-[0] mb-[0] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] ml-[0px] mr-[0px] flex gap-[24px] items-center pr-[0px] pl-[0px] sm:pr-[0px] sm:gap-[12px]">
          <a className="text-[#000000] focus:outline-none font-medium text-[18px] not-italic no-underline">
            github
          </a>
          <button
            className="text-white text-[14px] tracking-[0.025em] border-solid inline-block focus:outline-none bg-opacity-[100%] rounded-[24px] border-[2px] pl-[16px] pr-[16px] pt-[4px] pb-[4px] sm:pl-[12px] sm:pr-[12px] border-[#7c3aed]"
            type="button"
          >
            <span className="font-medium text-[18px] text-[#7c3aed]">
              Hire me
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
