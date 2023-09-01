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

const SkillComponent = ({ skill,index }: Props) => {
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
      className={`flex flex-col items-center text-center gap-8 text-gray-800 pt-0 md:pt-8 sm:pt-20 pb-0 md:pb-8 sm:pb-16 ${index !==2 && 'border-r-0 lg:border-r-1'}`}>
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
        <p className="max-w-[320px] text-sm font-base sm:px-0 md:px-6 lg:px-0">{skill?.description}</p>
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
};

export default SkillComponent;
