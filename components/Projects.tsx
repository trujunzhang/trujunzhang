"use client";

import urlFor from "@/lib/urlFor";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";
import ProjectComponent from "./ProjectComponent";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div
      className="flex justify-center items-center gap-[32px] flex-col"
      id="Container-project"
    >
      <h1 className="text-[48px] font-bold sm:text-[24px] text-[#374151]">
        <strong className="">Featured Work</strong>
      </h1>
      <div
        className="grid items-start  w-[100%] grid-cols-2 gap-[24px] md:gap-[12px] md:grid-cols-1"
        id="project-grid"
      >
        {projects.map((project: Project, index: number) => (
          <ProjectComponent key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
