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
      className='section-body bg-white rounded-lg shadow-md py-12 md:py-0'
    >

      <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0'>
        {skills.map((skill: Skill, index: number) => (
          <SkillComponent
            key={skill._id}
            skill={skill}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Skills;
