import React from "react";
import KumarText from "../Text/KumarText";
import SectionTitlePill from "../SectionTitlePill";
import { contactCopy } from "../../constants/copy";
import SatoshiText from "../Text/SatoshiText";

function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative pt-10 lg:pt-[104px] pb-6 lg:pb-10 pl-6 lg:pl-20 lg:pr-[120px] bg-brand100 "
    >
      <div className="z-50 flex flex-row justify-between items-center">
        <div className="lg:w-[45%]">
          <SectionTitlePill title={contactCopy.title} />
          <div className="max-md:pr-[68px] mt-10 flex flex-col flex-wrap gap-y-10 lg:gap-y-12 h-[218px] lg:h-[246px] gap-x-[70px] lg:gap-x-25 xl:gap-x-[200px] justify-between">
            {contactCopy.contact_links.map((link, index) => (
              <div key={index} className="max-md:max-w-[118px]">
                <SatoshiText
                  color={"text-accent"}
                  textSize={"text-base lg:text-xl"}
                >
                  {link.type}
                </SatoshiText>
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  <SatoshiText
                    color={"text-gray"}
                    textSize={"text-xs lg:text-sm"}
                    italic
                  >
                    {link.value}
                  </SatoshiText>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <KumarText color={"text-white"} textSize={"text-7xl"}>
            Abitop
          </KumarText>
        </div>
      </div>
      <div className="mt-25 lg:mt-[200px] z-50">
        <SatoshiText
          color={"text-accent"}
          fontWeight={"font-medium"}
          textSize={"lg:text-xl"}
          textAlign={"text-center"}
        >
          {contactCopy.copyright}
        </SatoshiText>
      </div>
      <div className="absolute z-10 bottom-0 left-0 right-0 h-1/2 w-full  bg-linear-to-t from-white90 to-transparent" />
    </footer>
  );
}

export default FooterSection;
