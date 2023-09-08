import React from "react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

type Props = {
  client: Client;
};

const TestimonialComponent = ({ client }: Props) => {
  return (
    <div
      className="px-[32px] md:px-[24px] flex flex-col items-center justify-center gap-[96px] sm:gap-[42px]"
      id="Container-slide-item-11-31"
    >
      <div className="px-[32px] md:px-[24px] flex flex-col items-center justify-center gap-[24px] text-center">
        <div
          className="relative rounded-[9999px] w-[150px] h-[150px] sm:w-[100px] sm:h-[100px]"
          id="Container-image-11-31"
        >
          <Image
            className=" rounded-full object-cover"
            src={urlFor(client.avatar).url()}
            fill
            alt="client's avatar"
          />
        </div>
        <p className="max-w-[768px] text-[18px] font-normal sm:text-[14px] sm:max-w-[768px]">
          {client.quote}
        </p>
      </div>
      <div className="px-[32px] md:px-[24px] flex items-center justify-center flex-col gap-[8px]">
        <span className="text-[20px] font-bold sm:text-[14px]">
          {client.name}
        </span>
        <span className="text-[18px] font-normal sm:text-[12px]">
          {client.role}
        </span>
      </div>
    </div>
  );
};

export default TestimonialComponent;
