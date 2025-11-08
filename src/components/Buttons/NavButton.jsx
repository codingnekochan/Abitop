import React from "react";
import SatoshiText from "../Text/SatoshiText";

function NavButton({ bgColor, textColor, text, href = "#", onClick }) {
	return (
		<a href={href} className={`${bgColor} rounded-[5px] px-8 py-2 inline-block`} onClick={onClick}>
			<SatoshiText
				color={textColor}
				fontWeight={"font-medium"}
				textSize={"text-base"}
			>
				{text}
			</SatoshiText>
		</a>
	);
}

export default NavButton;
