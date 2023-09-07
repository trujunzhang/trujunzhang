"use client"

import urlFor from '@/lib/urlFor';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import React from 'react';
import ProjectComponent from './ProjectComponent';

type Props = {
    projects: Project[];
}

const Projects = ({ projects }: Props) => {
if(false){

  return (
    <div
      className="flex flex-col mx-auto items-center justify-center text-center px-3 lg:px-0"
    >
      <h3 className="my-12 text-gray-700 text-2xl md:text-4xl font-bold">
        Featured Work
      </h3>

      <div className="flex grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {projects.map((project: Project, index: number) => (
          <ProjectComponent key={project._id} project={project} />
        ))}
     </div>

    </div>
  );
  }

  return (

      <div
        className="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pb-[0] flex justify-center items-center max-w-[auto] h-[auto] gap-[32px] flex-col rounded-[0px] pl-[0px] pr-[0px] shadow-none md:pl-[0px] md:pr-[0px]"
        id="Container-project"
      >
        <h1 className="text-[48px] font-bold sm:text-[24px] text-[#374151]">
          <strong className="">Featured Work</strong>
        </h1>
        <div
          className="mt-[0] mb-[0] pt-[0] pb-[0] grid max-w-[auto] ml-[0px] mr-[0px] items-start content-stretch w-[100%] grid-cols-2 grid-rows-none grid-flow-row pl-[0px] pr-[0px] gap-[24px] md:pl-[0px] md:pr-[0px] md:gap-[12px] sm:grid-cols-1"
          id="project-grid"
        >


        {projects.map((project: Project, index: number) => (
          <ProjectComponent key={project._id} project={project} />
        ))}

        </div>
      </div>
  )
}

export default Projects;
