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
      className="flex flex-col items-center text-center gap-8 py-24 xl:py-16 md:py-12"
      id="skill-column"
    >
      <div className="relative md:p-6 rounded-full w-[120px] h-[120px] bg-emerald-500">
        <Image
          className="object-fill p-7 lg:p-[18px] sm:p-7"
          src={urlFor(skill?.icon).url()}
          alt={skill?.title}
          fill
        />
      </div>
      <div className="max-w-[80rem] mx-[auto] pl-8 md:px-6 flex flex-col gap-[12px]">
        <h1 className="text-xl font-semibold"> {skill.name}</h1>
        <p className="min-h-[74px] text-base font-normal max-w-[360px]">
          {skill.description}
        </p>
      </div>
      <div className="max-w-[80rem] mx-[auto] px-8 md:px-6 flex flex-col gap-[12px]">
        <h1 className="font-medium text-lg sm:text-lg text-primary-600">
          {skill.title}
        </h1>
        <p className="font-normal text-lg">{skill.subTitle}</p>
      </div>
      <div className="max-w-[80rem] mx-[auto] px-8 md:px-6 flex flex-col gap-[12px]">
        <h1 className="font-semibold text-lg text-primary-600">
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
