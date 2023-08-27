import BaseBlockContent from '@sanity/block-content-to-react'
import urlFor from '@/lib/urlFor';
import React from 'react';
import Image from 'next/image';

type Props = {
    skill: Skill;
}

const SkillComponent = ({ skill}: Props) => {
    // Need to fix framer motion animation on mobile devices
  return (
    <div className='group relative flex cursor-pointer'>
        <Image
            src={urlFor(skill?.icon).url()}
            alt={skill?.title}
            className='rounded-full object-cover object-center w-14 h-14 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out'
        fill
        />
            <div className='flex justify-center items-center h-full'>
                <p className='text-[9px] md:text-xs font-bold text-black opacity-100 text-center'>{skill.title}</p>
            </div>
    </div>
  )
}

export default SkillComponent;
