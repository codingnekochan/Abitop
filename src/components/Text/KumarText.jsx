import React from "react";

function KumarText({ children, textSize, color }) {
	return (
		<p className={`font-Kumar leading-none font-normal ${textSize} ${color}`}>
			{children}
		</p>
	);
}

export default KumarText;
