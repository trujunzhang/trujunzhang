"use client";

import { motion } from "framer-motion";
import React from "react";
import SkillComponent from "./SkillComponent";

type Props = {
  skills: Skill[];
};

const Skills = ({ skills }: Props) => {
  if(false){
  return (
    <div className="section-body">
      <div className="bg-white rounded-lg shadow-md py-12 md:py-0 mx-0 lg:mx-0 md:mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-0">
          {skills.map((skill: Skill, index: number) => (
            <SkillComponent key={skill._id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
  }

return (

      <div className="mt-[0] mb-[0] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] grid grid-cols-3 shadow-lg pl-[0px] pr-[0px] max-w-[auto] rounded-[24px] items-start ml-[96px] mr-[96px] md:ml-[32px] md:mr-[32px] sm:grid-cols-1 sm:ml-[24px] sm:mr-[24px] sm:pl-[4px] sm:pr-[4px] bg-[#ffffff]">
          {skills.map((skill: Skill, index: number) => (
            <SkillComponent key={skill._id} skill={skill} index={index} />
          ))}
      </div>


)


};

export default Skills;
