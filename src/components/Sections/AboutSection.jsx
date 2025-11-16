import React from "react";
import SectionTitlePill from "../SectionTitlePill";
import SatoshiText from "../Text/SatoshiText";
import { aboutSectionCopy, whoWeAreCopy } from "../../constants/copy";
import NavButton from "../Buttons/NavButton";
import Divider from "../Divider";

function AboutSection() {
  return (
    <section id="about" className="bg-brand100">
      <div className="flex flex-col-reverse lg:flex-row gap-20 mb-10 lg:mb-6 pt-20 lg:pt-[136px] lg:pb-[104px] max-lg:px-6 lg:pr-20">
        <div
          aria-hidden={screen.width > 1024 ? true : false}
          className="flex justify-center lg:hidden mx-auto -mt-10"
        >
          <NavButton
            text={"View portfolio"}
            bgColor={"bg-white"}
            textColor={"text-brand100"}
          />
        </div>
        <img
          src={aboutSectionCopy.image}
          alt="Decorative"
          className="lg:w-[51.5%] h-[390px] lg:h-auto max-lg:rounded-[10px] rounded-r-[10px] object-cover"
        />
        <div className="flex flex-col lg:gap-6 justify-center items-start">
          <div className="mb-10  max-lg:self-center items-center lg:mb-4">
            <SectionTitlePill title="About Us" />
          </div>
          <p className="max-lg:text-center max-lg:text-accent max-lg:font-normal">
            <SatoshiText
              textDisplay={"max-lg:inline lg:mb-6"}
              color={"text-white90"}
              fontWeight={"lg:font-bold"}
              textSize={"text-lg lg:text-[32px]"}
              textAlign={"max-lg:text-center"}
            >
              {aboutSectionCopy.title}
              {", "}
            </SatoshiText>
            <SatoshiText
              textDisplay={"max-lg:inline"}
              color={"text-accent"}
              fontWeight={"font-normal"}
              textSize={"text-base lg:text-[18px] lg:leading-[30px]"}
              textAlign={"max-lg:text-center"}
              textTransform={"max-md:lowercase"}
            >
              {aboutSectionCopy.description}
            </SatoshiText>
          </p>
          <div
            aria-hidden={screen.width < 1024 ? true : false}
            className="hidden lg:flex flex-row justify-start"
          >
            <NavButton
              text={"View portfolio"}
              bgColor={"bg-white"}
              textColor={"text-brand100"}
            />
          </div>
        </div>
      </div>
      <Divider marginClass={"mx-6 lg:mx-20"} />
      <div className="bg-white20 h-[1px] mx-6 lg:mx-20" />
      <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 lg:gap-20 max-lg:px-6  pt-10 lg:py-[104px] lg:pl-20">
        <img
          src={whoWeAreCopy.image}
          alt="Decorative"
          className="lg:w-[51.5%] h-[390px] lg:h-auto max-lg:rounded-[10px] rounded-l-[10px]  object-cover"
        />
        <div className="flex flex-col gap-8 lg:gap-4 justify-center lg:items-start">
          <h3>
            <SatoshiText
              color={"text-white90"}
              fontWeight={"font-bold"}
              textSize={"text-lg lg:text-[32px]"}
              textAlign={"max-lg:text-center"}
            >
              {whoWeAreCopy.title}
            </SatoshiText>
          </h3>
          <SatoshiText
            color={"text-accent"}
            fontWeight={"font-normal"}
            textSize={"text-base lg:text-[18px] lg:leading-[30px]"}
            textAlign={"max-lg:text-center"}
          >
            {whoWeAreCopy.description}
          </SatoshiText>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
