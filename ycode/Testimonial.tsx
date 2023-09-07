import React from "react";

const Testimonial = () => {
  return (
    <section
      className="pb-[80px] pt-[80px] mb-[120px]"
      id="section-Testimonials"
    >
      <div className="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex flex-col items-center gap-[56px] max-w-[auto]">
        <div
          className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex flex-col items-center gap-[8px]"
          id="Container-top-11-31"
        >
          <h1 className="text-[48px] font-bold sm:text-[24px] text-[#374151]">
            Testimonials{" "}
          </h1>
          <p className="text-center text-[18px] max-w-[640px] sm:text-[14px] text-[#4b5563]">
            I have 12 years of experience helping clients, small businesses, and
            individuals create successful web/mobile apps.
          </p>
        </div>
        <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex flex-col items-center justify-center gap-[24px] sm:pl-[12px] sm:pr-[12px]">
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
          <div className="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] max-w-[auto] flex gap-[12px]">
            <div
              className="w-[16px] h-[16px] rounded-[9999px] bg-[#7c3aed]"
              id="Container-active-11-31"
            ></div>
            <div
              className="w-[16px] h-[16px] rounded-[9999px] border-[2px] border-[#d1d5db]"
              id="Container-deactive-11-31"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
