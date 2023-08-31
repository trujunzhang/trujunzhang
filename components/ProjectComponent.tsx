import React from "react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

type Props = {
  project: Project;
};

const ProjectComponent = ({ project }: Props) => {
  return (
    <div className="flex flex-col relative group">
      {/* Background View */}
      <div className="">
        <Image
          src={urlFor(project.desktopImage).url()}
          alt={project.title}
          width={1000}
          height={1000}
        />
      </div>

      {/* Foreground View */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 opacity-0 group-hover:opacity-100">
        <div className="flex items-center justify-between w-full h-full">
          {/* Left Image Container */}
          {project.mobileImage && (
            <div className="w-[240px] h-full relative">
              <Image
                className="object-cover"
                src={urlFor(project.mobileImage).url()}
                alt={project.title}
                fill
              />
            </div>
          )}

          {/* Right Info Container */}
          <div className="flex-1 flex-col items-center gap-4">
            <h1 className="text-2xl md:text-4xl font-bold">{project.title}</h1>
            <p className="text-sm md:text-base">{project.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
