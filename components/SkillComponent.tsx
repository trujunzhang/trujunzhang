import { PortableText } from "@portabletext/react";
import urlFor from "@/lib/urlFor";
import React from "react";
import Image from "next/image";

type Props = {
  skill: Skill;
  index: number;
};

type PortableTextProps = {
  children: React.ReactNode;
};

const SkillComponent = ({ skill, index }: Props) => {
  const components = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }: PortableTextProps) => (
        <h1 className="text-2xl">{children}</h1>
      ),
      // Ex. 2: rendering custom styles
      customHeading: ({ children }: PortableTextProps) => (
        <h2 className="text-lg text-primary-700">{children}</h2>
      ),
    },
  };

  if (false) {
    return (
      <div
        className={`flex flex-col items-center text-center gap-8 text-gray-800 pt-0 md:pt-8 sm:pt-20 pb-0 md:pb-8 sm:pb-16 ${
          index !== 2 && "border-r-0 lg:border-r-1"
        }`}
      >
        {/* skill header */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-24 h-24 rounded-full bg-green-500 my-4">
            <Image
              src={urlFor(skill?.icon).url()}
              alt={skill?.title}
              className="object-center p-5"
              fill
            />
          </div>
          <h1 className="text-2xl font-bold">{skill?.name}</h1>
          <p className="max-w-[320px] text-sm font-base sm:px-0 md:px-6 lg:px-0">
            {skill?.description}
          </p>
        </div>

        {/* skill title*/}
        <div className="flex flex-col items-center gap-3">
          <h3 className="font-normal text-primary-600">{skill.title}</h3>
          <p>{skill.subTitle}</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h3 className="font-normal text-primary-600 pb-1">
            {skill.skillTitle}
          </h3>
          <PortableText
            value={skill.skill}
            onMissingComponent={false}
            components={components as any}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="list-disc space-y-[2px] flex flex-col items-center justify-center text-center pt-[64px] pb-[64px] pr-[12px] gap-[32px] pl-[12px] sm:pt-[48px] sm:pb-[48px] sm:pl-[0px] sm:pr-[0px]"
      id="skill-column-6-17"
    >
      <div className="relative mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] pl-[0px] pr-[0px] max-w-[auto] rounded-[9999px] w-[120px] h-[120px] bg-[#10b981] bg-opacity-[100%]">
        <Image
          className="w-[100%] h-[100%] object-fill max-w-[auto] pt-[28px] pb-[28px] pl-[28px] pr-[28px] md:pl-[8px] md:pr-[8px] md:pt-[8px] md:pb-[8px]"
          src={urlFor(skill?.icon).url()}
          alt={skill?.title}
          fill
        />
      </div>
      <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex flex-col gap-[12px]">
        <h1 className="text-[20px] font-semibold"> {skill.name}</h1>
        <p className="min-h-[74px] text-[14px] font-normal max-w-[400px]">
          {skill.description}
        </p>
      </div>
      <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex flex-col gap-[12px]">
        <h1 className="font-medium text-[18px] sm:text-[18px] text-[#7c3aed]">
          {skill.title}
        </h1>
        <p className="font-normal text-[18px]">{skill.subTitle}</p>
      </div>
      <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex flex-col gap-[12px]">
        <h1 className="font-semibold text-[18px] text-[#7c3aed]">
          {skill.skillTitle}
        </h1>
        <PortableText
          value={skill.skill}
          onMissingComponent={false}
          components={components as any}
        />
      </div>
    </div>
  );
};

export default SkillComponent;
