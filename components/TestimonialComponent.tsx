import React from "react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

type Props = {
  client: Client;
};

const TestimonialComponent = ({ client }: Props) => {
  return (
    <div
      className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex flex-col items-center justify-center gap-[96px] sm:gap-[42px] sm:pl-[0px] sm:pr-[0px]"
      id="Container-slide-item-11-31"
    >
      <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex flex-col items-center justify-center gap-[24px] text-center sm:pl-[0px] sm:pr-[0px]">
        <div
          className="relative mt-[0] mb-[0] pt-[0] pb-[0] max-w-[auto] pl-[0px] pr-[0px] ml-[0px] mr-[0px] rounded-[9999px] w-[150px] h-[150px] md:pl-[0px] md:pr-[0px] sm:w-[100px] sm:h-[100px]"
          id="Container-image-11-31"
        >
          <Image
            className=" rounded-full object-cover"
            src={urlFor(client.avatar).url()}
            fill
            alt="client's avatar"
          />
        </div>
        <p className="max-w-[768px] text-[18px] font-normal sm:text-[12px] sm:max-w-[768px]">
          {client.quote}
        </p>
      </div>
      <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex items-center justify-center flex-col gap-[8px] sm:pl-[0px] sm:pr-[0px]">
        <span className="text-[20px] font-bold sm:text-[14px]">
          {client.name}
        </span>{" "}
        <span className="text-[18px] font-normal sm:text-[12px]">
          {client.role}
        </span>
      </div>
    </div>
  );
};

export default TestimonialComponent;
