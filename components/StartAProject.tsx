import React from "react";
import Link from "next/link";

type Props = {
  pageInfo: PageInfo;
};
const StartAProject = ({ pageInfo }: Props) => {
  return (
    <div
      className="bg-[#020202] bg-opacity-[100%] rounded-[24px] flex px-[48px] gap-[24px] xl:gap-[36px] md:gap-[24px] items-center justify-between py-[56px] mt-[-160px] xl:mx-[32px]  md:py-[36px] md:mx-[16px] md:px-[32px] xl:flex-col sm:items-center xl:justify-center xl:text-center"
      id="Container-doit"
    >
      <h1 className="font-bold w-[340px] text-[30px] md:text-[24px] text-[#ffffff]">
        <strong className="">Start a project</strong>
      </h1>
      <div>
        <p className="text-center text-[18px] max-w-[480px] md:text-[14px] md:max-w-[460px] sm:max-w-[260px] text-[#ffffff]">
          {
            "Interested in working together? We should queue up a time to chat. I’ll buy the coffee."
          }
        </p>
      </div>
      {/* right button */}

      <Link href={pageInfo.upworkUrl || ""}>
        <button className="cursor-pointer px-[32px] md:px-[24px] flex gap-[16px] py-[16px] border-[1px] rounded-[16px] w-[240px] md:py-[12px] sm:w-[180px] sm:justify-center border-green-300 hover:bg-green-300 text-white hover:text-black fill-white hover:fill-black">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1433_7)">
              <path
                d="M5 2.25C5.55 2.25 6 2.5875 6 3V9.75V11.25H5C4.65625 11.25 4.325 11.2781 4 11.325V3C4 2.5875 4.45 2.25 5 2.25ZM1 3V12.75C0.375 13.3781 0 14.1562 0 15V16.125C0 20.475 4.7 24 10.5 24H13.5C19.3 24 24 20.475 24 16.125V13.5V12V6C24 4.34531 22.2062 3 20 3C17.7938 3 16 4.34531 16 6V8.34375C15.6812 8.28281 15.3438 8.25 15 8.25C14.5063 8.25 14.0375 8.31563 13.6 8.4375C12.95 7.43906 11.5813 6.75 10 6.75C9.65625 6.75 9.31875 6.78281 9 6.84375V3C9 1.34531 7.20625 0 5 0C2.79375 0 1 1.34531 1 3ZM21 12V13.5V16.125C21 19.2328 17.6437 21.75 13.5 21.75H10.5C6.35625 21.75 3 19.2328 3 16.125V15C3 14.1703 3.89375 13.5 5 13.5H7.5H10C10.55 13.5 11 13.8375 11 14.25C11 14.6625 10.55 15 10 15H7.5C6.66875 15 6 15.5016 6 16.125C6 16.7484 6.66875 17.25 7.5 17.25H10C10.9438 17.25 11.8125 17.0016 12.5 16.5938C13.1875 17.0063 14.0562 17.25 15 17.25C17.2062 17.25 19 15.9047 19 14.25V12V11.25V6C19 5.5875 19.45 5.25 20 5.25C20.55 5.25 21 5.5875 21 6V12ZM10 11.25H9V9.75C9 9.3375 9.45 9 10 9C10.55 9 11 9.3375 11 9.75V11.25V11.3438C10.6812 11.2828 10.3438 11.25 10 11.25ZM16 12V14.25C16 14.6625 15.55 15 15 15C14.45 15 14 14.6625 14 14.25V12.375V11.25C14 10.8375 14.45 10.5 15 10.5C15.55 10.5 16 10.8375 16 11.25V12Z"
              />
            </g>
            <defs>
              <clipPath id="clip0_1433_7">
                <rect width="24" height="24"/>
              </clipPath>
            </defs>
          </svg>
          <h1 className="font-bold text-[20px] md:text-[14px]">
            {"Let's do this"}
          </h1>
        </button>
      </Link>
    </div>
  );
};

export default StartAProject;
