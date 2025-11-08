import React from "react";
import KumarText from "../Text/KumarText";
import SectionTitlePill from "../sectionTitlePill";
import { contactCopy } from "../../constants/copy";
import SatoshiText from "../Text/SatoshiText";

function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative lg:pt-[104px] lg:pb-10 pl-20 pr-[120px] bg-brand100 "
    >
      <div className="z-50 flex lg:flex-row justify-between items-center">
        <div className="lg:w-[45%]">
          <SectionTitlePill title={contactCopy.title} />
          <div className=" mt-10 flex flex-col md:flex-wrap lg:gap-y-12 lg:h-[246px] lg:gap-x-[200px] justify-between">
            {contactCopy.contact_links.map((link, index) => (
              <div key={index}>
                <SatoshiText color={"text-accent"} textSize={"text-xl"}>
                  {link.type}
                </SatoshiText>
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  <SatoshiText color={"text-gray"} textSize={"text-sm"} italic>
                    {link.value}
                  </SatoshiText>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
          <KumarText color={"text-white"} textSize={"text-7xl"}>
            Abitop
          </KumarText>
        </div>
      </div>
      <div className="lg:mt-[200px] z-50">
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
