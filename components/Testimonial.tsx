"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TestimonialComponent from "./TestimonialComponent";

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
                className="inline-block w-[16px] h-[16px] rounded-[9999px] bg-[#7c3aed] mx-1"
                id="Container-active-11-31"
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              ></li>
            );
          }
          return (
            <li
              className="inline-block w-[16px] h-[16px] rounded-[9999px] border-[2px] border-[#d1d5db] mx-1"
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
          <div key={index} className="pb-[48px] w-full">
            <TestimonialComponent client={client} />
          </div>
        ))}
      </Carousel>
    );
  };

  return (
    <div className="px-[32px] xl:mx-[148px] lg:mx-[0px] md:px-[24px] flex flex-col items-center gap-[56px]">
      <div
        className="max-w-[80rem]  px-[32px] md:px-[24px] flex flex-col items-center gap-[8px]"
        id="Container-top-11-31"
      >
        <h1 className="text-[48px] font-bold sm:text-[24px]">
          {testimonial.title}
        </h1>
        <p className="text-center text-[18px] max-w-[640px] sm:max-w-[300px] sm:text-[14px]">
          {testimonial.description}
        </p>
      </div>
      {/* Show client on desktop */}
      <div className="block md:hidden px-[32px] md:px-[24px]  flex flex-col items-center justify-center gap-[24px] sm:px-[12px]">
        {renderSlides()}
      </div>
      {/* Show client on mobile */}
      <div className="hidden md:block flex flex-col justify-center space-y-8">
        {testimonial.clients.map((client, index) => (
          <div key={index} className="">
            <TestimonialComponent client={client} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
