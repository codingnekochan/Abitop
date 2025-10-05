import React from "react";
import KumarText from "../components/Text/KumarText";
import MaturaText from "../components/Text/MaturaText";
import SatoshiText from "../components/Text/SatoshiText";
import Button from "../components/Buttons/Button";

function TestComponent() {
	return (
		<div className="border-2  border-amber-300 flex-1">
			<KumarText textSize={"text-7xl"}>TestComponent</KumarText>
			<MaturaText>Hello World</MaturaText>
			<MaturaText underline>Hello World</MaturaText>
			<SatoshiText>Hello World</SatoshiText>
			<SatoshiText
				textSize={"text-3xl"}
				fontWeight={"font-bold"}
				color={"text-red-500"}
				italic
			>
				Hello World
			</SatoshiText>
			<Button
				onClick={() => alert("Button clicked!")}
				bgColor={"bg-brand100"}
				textColor={"text-accent"}
			>
				Click Me
			</Button>
			<Button bgColor={"bg-white"} textColor={"text-brand100"}>
				Default Button
			</Button>
		</div>
	);
}

export default TestComponent;
