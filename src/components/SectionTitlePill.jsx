import React from "react";
import MaturaText from "./Text/MaturaText";

function SectionTitlePill({ title, isUnderlined = true }) {
  return (
    <div className="py-2 px-6 rounded-[30px] bg-white10 justify-self-start">
      <h2>
        <MaturaText
          underline={isUnderlined}
          fontWeight={"font-regular"}
          textSize={"text-base"}
          color={"text-white"}
        >
          {title}
        </MaturaText>
      </h2>
    </div>
  );
}

export default SectionTitlePill;
