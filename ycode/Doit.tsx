import React from "react";

const Doit = () => {
  return (
    <section
      className="pb-[80px] pt-[80px] ml-[auto] mr-[auto] max-w-[auto] bg-[#7c3aed]"
      id="Section-doit"
    >
      <div
        className="mb-[0] bg-[#020202] bg-opacity-[100%] rounded-[24px] flex pl-[48px] pr-[48px] gap-[24px] items-center justify-between pt-[56px] pb-[56px] max-w-[1280px] ml-[auto] mr-[auto] mt-[-160px] lg:ml-[32px] lg:mr-[32px] md:pt-[36px] md:pb-[36px] md:ml-[16px] md:mr-[16px] md:pl-[32px] md:pr-[32px] sm:flex-col sm:items-center sm:justify-center sm:text-center"
        id="Container-doit"
      >
        <h1 className="font-bold w-[340px] text-[30px] md:text-[24px] text-[#ffffff]">
          <strong className="">Start a project</strong>
        </h1>
        <div>
          <p className="text-center text-[18px] max-w-[480px] md:text-[14px] md:max-w-[460px] sm:max-w-[260px] text-[#ffffff]">
            Interested in working together? We should queue up a time to chat.
            I’ll buy the coffee.
          </p>
        </div>
        <div className="mt-[0] mr-[auto] mb-[0] ml-[auto] pr-[32px] pl-[32px] md:pr-[24px] md:pl-[24px] flex gap-[16px] pt-[16px] pb-[16px] border-[1px] rounded-[16px] w-[240px] md:pt-[12px] md:pb-[12px] max-w-[auto] sm:w-[180px] sm:justify-center border-[#10b981]">
          <img
            className="w-[auto] h-[auto] max-w-[100%]"
            src="https://assets.ycodeapp.com/assets/app15854/images/uOKLzzcfetVEpL3DsWEaIDQeum6ygTlYHtczPI6k-published.svg"
            sizes="480px"
          />
          <h1 className="font-bold text-[20px] md:text-[14px] text-[#ffffff]">
            {" "}
            Let's do it{" "}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Doit;
