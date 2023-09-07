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
  const renderSlides= () => {
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
            className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex flex-col items-center justify-center gap-[96px] sm:gap-[42px] sm:pl-[0px] sm:pr-[0px]"
            id="Container-slide-item-11-31"
          >
            <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex flex-col items-center justify-center gap-[24px] text-center sm:pl-[0px] sm:pr-[0px]">
              <div
                className="mt-[0] mb-[0] pt-[0] pb-[0] max-w-[auto] pl-[0px] pr-[0px] ml-[0px] mr-[0px] rounded-[9999px] w-[150px] h-[150px] md:pl-[0px] md:pr-[0px] sm:w-[100px] sm:h-[100px]"
                id="Container-image-11-31"
              >
                <img
                  className="max-w-[auto] w-[100%] h-[100%] rounded-[9999px]"
                  src="https://assets.ycodeapp.com/assets/app15854/images/lHtJryOOgfPSJBQ8NgaKg9WkSBkKqQEwl29vj0pD-published.png"
                  sizes="9600px"
                />
              </div>
              <p className="max-w-[768px] text-[18px] font-normal sm:text-[12px] sm:max-w-[768px]">
                We have the fortune of working with zhang on a very regular
                basis. Every single project is done in a timely fashion and is
                delivered exactly as is outlined. Beyond that, his development
                skills and expertise make him an invaluable part of our process.
                We absolutely offer our highest possible recommendation.
              </p>
            </div>
            <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex items-center justify-center flex-col gap-[8px] sm:pl-[0px] sm:pr-[0px]">
              <span className="text-[20px] font-bold sm:text-[14px]">
                Alvin Engler
              </span>{" "}
              <span className="text-[18px] font-normal sm:text-[12px]">
                CEO, West Third Enterprises, Inc.
              </span>
            </div>
          </div>

        ))}
      </Carousel>
    )
  }
  const renderSlidesxxx= () => {

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
            className="flex flex-col items-center justify-center pb-12 md:pb-20"
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
              <p className="max-w-[300px] md:max-w-[800px] md:h-[130px] text-base md:text-xl text-gray-700 font-normal px-12 lg:px-0">
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


    )

  }


  if(false) {

  return (
    <div className="section-body section-padding-top flex flex-col mx-auto items-center justify-center text-center mb-36">
      {/* Title Container */}
      <div className="text-black flex flex-col items-center justify-center gap-4 md:gap-6 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold">{testimonial.title}</h1>
        <p className="max-w-[420px] md:max-w-[620px] text-base md:text-xl text-gray-700 font-normal px-8 md:px-0">
          {testimonial.description}
        </p>
      </div>
      {/* Client's Quotes */}
        {renderSlides()}
    </div>
  );
  }

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


  )
};

export default Testimonials;
