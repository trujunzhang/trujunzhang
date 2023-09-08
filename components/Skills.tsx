"use client";

import { motion } from "framer-motion";
import React from "react";
import SkillComponent from "./SkillComponent";

type Props = {
  skills: Skill[];
};

const Skills = ({ skills }: Props) => {
  return (
    <div className="md:p-[24px] grid grid-cols-3 shadow-lg rounded-[24px] m-[96px]  xl:m-[32px] sm:grid-cols-1 sm:m-[14px] sm:p-[4px] bg-[#ffffff]">
      {skills.map((skill: Skill, index: number) => (
        <SkillComponent key={skill._id} skill={skill} index={index} />
      ))}
    </div>
  );
};

export default Skills;
