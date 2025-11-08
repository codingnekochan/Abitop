import React from "react";
import SectionTitlePill from "../sectionTitlePill";
import SatoshiText from "../Text/SatoshiText";
import { aboutSectionCopy, whoWeAreCopy } from "../../constants/copy";
import NavButton from "../Buttons/NavButton";

function AboutSection() {
  return (
    <section id="about" className="bg-brand100">
      <div className="flex flex-col lg:flex-row lg:gap-20 lg:mb-6 lg:py-[104px] lg:pr-20">
        <img
          src={aboutSectionCopy.image}
          alt="Decorative"
          className="w-3/5 h-auto"
        />
        <div className="flex flex-col lg:gap-6 justify-center items-start">
          <div className="lg:mb-4">
            <SectionTitlePill title="About Us" />
          </div>
          <h3>
            <SatoshiText
              color={"text-white90"}
              fontWeight={"font-bold"}
              textSize={"lg:text-[32px]"}
            >
              {aboutSectionCopy.title}
            </SatoshiText>
          </h3>
          <SatoshiText
            color={"text-accent"}
            fontWeight={"font-regular"}
            textSize={"lg:text-[22px]"}
          >
            {aboutSectionCopy.description}
          </SatoshiText>
          <NavButton
            text={"View portfolio"}
            bgColor={"bg-white"}
            textColor={"text-brand100"}
          />
        </div>
      </div>
      <div className="bg-white20 h-[1px] lg:mx-20" />
      <div className="flex flex-col lg:flex-row-reverse lg:gap-20  lg:py-[104px] lg:pl-20">
        <img
          src={whoWeAreCopy.image}
          alt="Decorative"
          className="lg:w-3/5 lg:h-auto"
        />
        <div className="flex flex-col lg:gap-4 justify-center items-start">
          <h3>
            <SatoshiText
              color={"text-white90"}
              fontWeight={"font-bold"}
              textSize={"lg:text-[32px]"}
            >
              {whoWeAreCopy.title}
            </SatoshiText>
          </h3>
          <SatoshiText
            color={"text-accent"}
            fontWeight={"font-regular"}
            textSize={"lg:text-[22px]"}
          >
            {aboutSectionCopy.description}
          </SatoshiText>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
