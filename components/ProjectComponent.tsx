import React from "react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

type Props = {
  project: Project;
};

const ProjectComponent = ({ project }: Props) => {
if(false){
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

  }

  return (

          <div className="mt-[0] mb-[0] pt-[0] pb-[0] ml-[0px] mr-[0px] max-w-[auto] pl-[0px] pr-[0px] relative md:pl-[0px] md:pr-[0px]">
            <div
              className="mt-[0] mb-[0] pt-[0] pb-[0] ml-[0px] mr-[0px] bg-opacity-[100%] bg-[#a71ec9] w-[100%] max-w-[auto] h-[400px] pl-[0px] pr-[0px] md:h-[300px] md:pl-[0px] md:pr-[0px]"
              id="Project-background-7-24"
              data-collection-id="7"
              data-collection-type="local"
              data-record-id="24"
            >
              <img
                className="max-w-[auto] w-[100%] h-[100%]"
                src="https://assets.ycodeapp.com/assets/app15854/images/Nt1hj20qBIXUKZJHs9eRRPrJdLmMaQ7LdSeXojn3-published.webp"
                sizes="200vw"
              />
            </div>
            <div
              className="mt-[0] mb-[0] pt-[0] pb-[0] w-[100%] absolute top-[0px] left-[0px] ml-[0px] mr-[0px] pl-[0px] pr-[0px] h-[100%] max-w-[auto] flex md:pl-[0px] md:pr-[0px] bg-[#000000] bg-opacity-[60%]"
              id="Project-foreground-7-24"
              data-collection-id="7"
              data-collection-type="local"
              data-record-id="24"
            >
              <div
                className="mt-[0] mb-[0] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] h-[100%] max-w-[auto] pl-[0px] pr-[0px] ml-[0px] mr-[0px] w-[auto] sm:pl-[0px] sm:pr-[0px]"
                id="Container-left-7-24"
                data-collection-id="7"
                data-collection-type="local"
                data-record-id="24"
              >
                <img
                  className="h-[100%] w-[auto] max-w-[auto]"
                  src="https://assets.ycodeapp.com/assets/app15854/images/fujsmvGfmNCu5nyvMz4lhGZZMsebDexcLYyEJ8fI-published.webp"
                  sizes="200vw"
                />
              </div>
              <div
                className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex-1 flex flex-col items-center justify-center gap-[12px] sm:pr-[8px] sm:pl-[8px]"
                id="Container-right-7-24"
                data-collection-id="7"
                data-collection-type="local"
                data-record-id="24"
              >
                <h1 className="font-bold text-[30px] md:text-[20px] md:text-center text-[#ffffff]">
                  {" "}
                  Pet Plate{" "}
                </h1>
                <p className="text-center text-[14px] md:text-[12px] text-[#ffffff]">
                  The new standard for dog food
                </p>
              </div>
            </div>
          </div>
  )
};

export default ProjectComponent;
