import React from "react";

function Button({ children, onClick, bgColor, textColor }) {
	return (
		<button
			onClick={onClick}
			className={`${bgColor} ${textColor} p-2 rounded-[5px] font-Satoshi text-base px-8 py-2`}
		>
			{children}
		</button>
	);
}

export default Button;
