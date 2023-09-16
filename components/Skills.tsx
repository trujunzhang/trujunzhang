"use client";

import React from "react";
import SkillComponent from "./SkillComponent";

type Props = {
  skills: Skill[];
};

const Skills = ({ skills }: Props) => {
  return (
    <div className="md:p-6 grid grid-cols-3 md:grid-cols-1 shadow-lg rounded-3xl m-24 xl:m-8 sm:m-3.5 sm:p-1 bg-white">
      {skills.map((skill: Skill, index: number) => (
        <div
          key={skill._id}
          className={index !== 2 ? "border-r border-gray-100 md:border-0" : ""}
        >
          <SkillComponent skill={skill} index={index} />
        </div>
      ))}
    </div>
  );
};

export default Skills;
