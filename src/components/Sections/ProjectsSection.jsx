import React, { useState } from "react";
import SectionTitlePill from "../sectionTitlePill";
import { projectsCopy } from "../../constants/copy";

function ProjectsSection() {
  const [projectIndex, setProjectIndex] = useState(3);
  return (
    <section
      id="projects"
      className="lg:py-[104px] bg-brand100"
    >
      <div className="ml-20">
        <SectionTitlePill title={projectsCopy.title} />
      </div>
      <div className="lg:mt-10 flex lg:flex-row justify-center items-center w-full overflow-hidden">
        <div className="lg:mb-10 relative w-full">
          <div className="z-10 flex flex-col gap-[117px] items-center absolute lg:top-20 lg:left-20 lg:right-20">
            <div className="self-end">
              <p className="text-white font-Inter font-semibold lg:text-[24px]">
                {`${projectIndex + 1} / ${projectsCopy.projects_list.length}`}
              </p>
            </div>
            <p className="text-white font-Inter font-semibold lg:text-[24px] mb-2 whitespace-pre-wrap">
              {projectsCopy.projects_list[projectIndex].title}
            </p>
          </div>
          <img
          className="w-full h-full object-cover object-center"
            src={projectsCopy.projects_list[projectIndex].image}
            alt={projectsCopy.projects_list[projectIndex].title}
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
