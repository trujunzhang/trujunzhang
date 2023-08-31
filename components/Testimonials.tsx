"use client";

import React from "react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

type Props = {
  testimonial: Testimonial;
};

const Testimonials = ({ testimonial }: Props) => {
  return (
    <div className="section-body section-padding-top flex flex-col mx-auto items-center justify-center text-center ">
      {/* Title Container */}
      <div className="text-black flex flex-col items-center justify-center gap-3 md:gap-6 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold">{testimonial.title}</h1>
        <p className="max-w-[620px] text-base md:text-xl text-gray-700 font-normal">
          {testimonial.description}
        </p>
      </div>
      {/* Client's Quotes */}
      <Carousel
        showArrows={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={6000}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                className="inline-block w-[12px] h-[12px] rounded-full bg-primary-700 mx-1"
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              className="inline-block w-[12px] h-[12px] rounded-full bg-gray-400 mx-1"
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        {testimonial.clients.map((client, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative rounded-full w-[100px] h-[100px] my-4 md:my-12">
              <Image
                className=" rounded-full object-cover"
                src={urlFor(client.avatar).url()}
                fill
                alt="client's avatar"
              />
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <p className="max-w-[600px] md:max-w-[800px] md:h-[130px] text-base md:text-xl text-gray-700 font-normal">
                {client.quote}
              </p>
              <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                <h3 className="text-base md:text-2xl text-gray-900 font-medium font-bold">
                  {client.name}
                </h3>
                <p className="text-sm md:text-base text-gray-700 font-normal">
                  {client.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
