"use client";

import React from "react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

type Props = {
  testimonial: Testimonial;
};

const Testimonial = ({ testimonial }: Props) => {
  const renderSlides = () => {
    return (
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={6000}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                className="inline-block w-[16px] h-[16px] rounded-[9999px] bg-[#7c3aed]"
                id="Container-active-11-31"
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              ></li>
            );
          }
          return (
            <li
              className="inline-block w-[16px] h-[16px] rounded-[9999px] border-[2px] border-[#d1d5db]"
              id="Container-deactive-11-31"
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            ></li>
          );
        }}
      >
        {testimonial.clients.map((client, index) => (
          <div
            key={index}
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
        ))}
      </Carousel>
    );
  };

  return (
    <div className="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex flex-col items-center gap-[56px] max-w-[auto]">
      <div
        className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex flex-col items-center gap-[8px]"
        id="Container-top-11-31"
      >
        <h1 className="text-[48px] font-bold sm:text-[24px]">
          {testimonial.title}
        </h1>
        <p className="text-center text-[18px] max-w-[640px] sm:text-[14px]">
          {testimonial.description}
        </p>
      </div>
      <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex flex-col items-center justify-center gap-[24px] sm:pl-[12px] sm:pr-[12px]">
        {renderSlides()}
      </div>
    </div>
  );
};

export default Testimonial;
