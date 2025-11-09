import React from "react";

function MaturaText({ children, textSize, fontWeight, color,underline }) {
	return (
		<p
			className={`font-Matura leading-none ${fontWeight} ${textSize} ${color} ${underline ? "underline" : ""}`}
		>
			{children}
		</p>
	);
}

export default MaturaText;
