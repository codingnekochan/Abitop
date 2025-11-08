import React from "react";

function SatoshiText({ children, textSize, fontWeight, color, italic, textAlign }) {
  return (
    <p
      className={`whitespace-pre-wrap font-Satoshi leading-none ${textAlign} ${fontWeight} ${textSize} ${color} ${
        italic ? "italic" : ""
      }`}
    >
      {children}
    </p>
  );
}

export default SatoshiText;
