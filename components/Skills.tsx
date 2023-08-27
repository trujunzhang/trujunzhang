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
      className='section-body bg-white rounded-lg shadow-md pt-20 pb-16'
    >

      <div className='grid grid-cols-1 md:grid-cols-3'>
        {skills.map((skill: Skill, index: number) => (
          <SkillComponent
            key={skill._id}
            skill={skill}
          />
        ))}
      </div>
    </div>
  )
}

export default Skills;
