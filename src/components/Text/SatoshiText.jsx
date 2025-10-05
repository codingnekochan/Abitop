import React from "react";

function SatoshiText({ children, textSize, fontWeight, color, italic }) {
	return (
		<p
			className={`font-Satoshi leading-none ${fontWeight} ${textSize} ${color} ${
				italic ? "italic" : ""
			}`}
		>
			{children}
		</p>
	);
}

export default SatoshiText;
