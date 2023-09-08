import React from "react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

type Props = {
  project: Project;
};

const ProjectComponent = ({ project }: Props) => {
  return (
    <div className="relative group">
      {/* background container */}
      <div
        className="bg-[#a71ec9] w-[100%] max-w-[auto] h-[400px] md:h-[300px]"
        id="Project-background-7-24"
      >
        <div className="w-full h-full">
          <Image
            src={urlFor(project.desktopImage).url()}
            alt={project.title}
            fill
          />
        </div>
      </div>
      {/* foreground container */}
      <div
        className="w-[100%] absolute top-[0px] left-[0px] h-[100%] flex bg-[#000000] bg-opacity-[60%] opacity-0 group-hover:opacity-100"
        id="Project-foreground-7-24"
      >
          {/* Left Image Container */}
          {project.mobileImage && (
            <div className="shrink-0 w-[280px] sm:w-[180px] h-full max-w-[auto] relative">
              <Image
                className="h-[100%] w-[auto] max-w-[auto]"
                src={urlFor(project.mobileImage).url()}
                alt={project.title}
                fill
                sizes="200vw"
              />
            </div>
          )}

        <div
          className="flex-1 pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex-1 flex flex-col items-center justify-center gap-[12px] sm:pr-[8px] sm:pl-[8px]"
          id="Container-right-7-24"
        >
          <h1 className="font-bold text-[30px] md:text-[20px] md:text-center text-[#ffffff]">
            {project.title}
          </h1>
          <p className="text-center text-[14px] md:text-[12px] text-[#ffffff]">
            {project.summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
