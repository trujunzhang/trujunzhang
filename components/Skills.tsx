"use client"

import { motion } from 'framer-motion';
import React from 'react';
import SkillComponent from './SkillComponent';

type Props = {
  skills: Skill[];
}

const Skills = ({ skills }: Props) => {
  return (
    <div
      className='flex relative flex-col text-center md:text-left items-center max-w-[2000px] xl:px-10 justify-center mx-auto gap-5 bg-primary'
    >

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {skills.map((skill: Skill, index: number) => (
          <SkillComponent
            key={skill._id}
            skill={skill}
            directionLeft={index < skills.length/2 ? true : false}
          />
        ))}
      </div>
    </div>
  )
}

export default Skills;
