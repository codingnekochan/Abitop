import React, { useState } from "react";
import KumarText from "../Text/KumarText";
import SatoshiText from "../Text/SatoshiText";
import NavButton from "../Buttons/NavButton";

function NavigationSection() {
	const [focus, setFocus] = useState("home");

	return (
		<nav className="flex items-center justify-between mx-[112px] pt-4 pb-0.5 border-b border-white20">
			<KumarText color={"text-white"} textSize={"text-3xl"}>
				Abitop
			</KumarText>
			<ul className="flex gap-10 items-center">
				<li className="relative">
					<div className="mb-10">
						<a onClick={() => setFocus("home")} href="#home">
							<SatoshiText
								fontWeight={"font-regular"}
								textSize={"text-base"}
								color={focus === "home" ? "text-white" : "text-gray"}
							>
								Home
							</SatoshiText>
						</a>
					</div>
					<div
						className={`absolute -bottom-1 h-1 bg-white rounded-full transition-all duration-300 ease-in-out ${
							focus === "home" ? "w-full" : "w-0"
						}`}
					/>
				</li>
				<li className="relative">
					<div className="mb-10">
						<a onClick={() => setFocus("about")} href="#about">
							<SatoshiText
								fontWeight={"font-regular"}
								textSize={"text-base"}
								color={focus === "about" ? "text-white" : "text-gray"}
							>
								About us
							</SatoshiText>
						</a>
					</div>
					<div
						className={`absolute -bottom-1 h-1 bg-white rounded-full transition-all duration-300 ease-in-out ${
							focus === "about" ? "w-full" : "w-0"
						}`}
					/>
				</li>
				<li className="relative">
					<div className="mb-10">
						<a onClick={() => setFocus("services")} href="#services">
							<SatoshiText
								fontWeight={"font-regular"}
								textSize={"text-base"}
								color={focus === "services" ? "text-white" : "text-gray"}
							>
								Our services
							</SatoshiText>
						</a>
					</div>
					<div
						className={`absolute -bottom-1 h-1 bg-white rounded-full transition-all duration-300 ease-in-out ${
							focus === "services" ? "w-full" : "w-0"
						}`}
					/>
				</li>
				<li className="relative">
					<div className="mb-10">
						<a onClick={() => setFocus("projects")} href="#projects">
							<SatoshiText
								fontWeight={"font-regular"}
								textSize={"text-base"}
								color={focus === "projects" ? "text-white" : "text-gray"}
							>
								Projects
							</SatoshiText>
						</a>
					</div>
					<div
						className={`absolute -bottom-1 h-1 bg-white rounded-full transition-all duration-300 ease-in-out ${
							focus === "projects" ? "w-full" : "w-0"
						}`}
					/>
				</li>
			</ul>
			<NavButton
				onClick={() => setFocus("contact")}
				text="Talk to us"
				bgColor="bg-brand100"
				textColor="text-accent"
				href="#contact"
			/>
		</nav>
	);
}

export default NavigationSection;
