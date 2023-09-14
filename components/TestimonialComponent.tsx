import React from "react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

type Props = {
  client: Client;
};

const TestimonialComponent = ({ client }: Props) => {
  return (
    <div
      className="px-8 md:px-6 flex flex-col items-center justify-center gap-[96px] sm:gap-[42px]"
      id="Container-slide-item-11-31"
    >
      <div className="px-8 md:px-6 flex flex-col items-center justify-center gap-6 text-center">
        <div
          className="relative rounded-full w-[150px] h-[150px] sm:w-[100px] sm:h-[100px]"
          id="Container-image-11-31"
        >
          <Image
            className=" rounded-full object-cover"
            src={urlFor(client.avatar).url()}
            fill
            alt="client's avatar"
          />
        </div>
        <p className="max-w-xl text-lg font-normal sm:text-sm sm:max-w-[768px]">
          {client.quote}
        </p>
      </div>
      <div className="px-8 md:px-6 flex items-center justify-center flex-col gap-[8px]">
        <span className="text-xl font-bold sm:text-base">
          {client.name}
        </span>
        <span className="text-lg font-normal sm:text-xs">
          {client.role}
        </span>
      </div>
    </div>
  );
};

export default TestimonialComponent;
