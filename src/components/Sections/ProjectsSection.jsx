import React, { useRef, useState } from "react";
import SectionTitlePill from "../SectionTitlePill";
import { projectsCopy } from "../../constants/copy";
import ChevronButton from "../Buttons/ChevronButton";

function ProjectsSection() {
  const [projectIndex, setProjectIndex] = useState(0);
  const scrollRef = useRef(null);
  console.log("projectIndex:", projectIndex);
  const handlePrevClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: window.innerWidth * -1,
        behavior: "smooth",
      });
    }
    if (projectIndex === 0) return;
    setProjectIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: window.innerWidth,
        behavior: "smooth",
      });
    }
    if (projectIndex === projectsCopy.projects_list.length - 1) return;
    setProjectIndex((prevIndex) => prevIndex + 1);
  };
  console.log("width:", window.innerWidth);

  return (
    <section id="projects" className="py-20 lg:py-[104px] bg-brand100">
      <div className="mx-6 lg:mx-20 flex flex-row justify-between items-center">
        <SectionTitlePill title={projectsCopy.title} />
        <div className="max-lg:hidden flex gap-2 items-center">
          <ChevronButton
            direction="left"
            onClick={handlePrevClick}
            active={projectIndex > 0}
          />
          <ChevronButton
            direction="right"
            onClick={handleNextClick}
            active={projectIndex < projectsCopy.projects_list.length - 1}
          />
        </div>
      </div>
      <div
        ref={scrollRef}
        className="mt-10 flex lg:flex-row  items-center w-full overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
      >
        {projectsCopy.projects_list.map((project, index) => {
          return (
            <div className="lg:mb-10 relative flex-none w-full snap-center">
              <div className="z-10 flex flex-col gap-[117px] items-center absolute top-4 lg:top-20 left-6 lg:left-20 right-6 lg:right-20">
                <div className="self-end">
                  <p className="text-white font-Inter font-semibold lg:text-[24px]">
                    {`${index + 1} / ${projectsCopy.projects_list.length}`}
                  </p>
                </div>
                <p className="text-white font-Inter font-semibold lg:text-[24px] mb-2 whitespace-pre-wrap">
                  {project.title}
                </p>
              </div>
              <img
                className="w-full min-h-[280px]  h-full object-cover object-center"
                src={project.image}
                alt={project.title}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
