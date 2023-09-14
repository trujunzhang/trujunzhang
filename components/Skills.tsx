"use client";

import { motion } from "framer-motion";
import React from "react";
import SkillComponent from "./SkillComponent";

type Props = {
  skills: Skill[];
};

const Skills = ({ skills }: Props) => {
  return (
    <div className="md:p-6 grid grid-cols-3 shadow-lg rounded-3xl m-24 xl:m-8 md:grid-cols-1 sm:m-3.5 sm:p-1 bg-white">
      {skills.map((skill: Skill, index: number) => (
        <SkillComponent key={skill._id} skill={skill} index={index} />
      ))}
    </div>
  );
};

export default Skills;
