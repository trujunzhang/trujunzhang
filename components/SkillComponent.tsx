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

  return (
    <div
      className="space-y-[2px] flex flex-col items-center justify-center text-center p-[64px] p-[12px] gap-[32px] xl:p-[18px] md:p-[48px]"
      id="skill-column-6-17"
    >
      <div className="relative md:p-[24px] rounded-[9999px] w-[120px] h-[120px] bg-[#10b981]">
        <Image
          className="object-fill p-[28px] lg:p-[18px] sm:p-[28px]"
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
