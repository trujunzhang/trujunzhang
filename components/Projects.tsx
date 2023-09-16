"use client";



import React from "react";
import ProjectComponent from "./ProjectComponent";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div
      className="flex justify-center items-center gap-8 flex-col"
      id="Container-project"
    >
      <h1 className="text-5xl font-bold sm:text-2xl">
        <strong className="">Featured Work</strong>
      </h1>
      <div
        className="grid items-start w-[100%] grid-cols-2 gap-6 md:gap-3 md:grid-cols-1"
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
