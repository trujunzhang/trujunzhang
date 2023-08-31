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

  return (
    <div
      className="flex flex-col mx-auto items-center justify-center text-center "
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

export default Projects;
