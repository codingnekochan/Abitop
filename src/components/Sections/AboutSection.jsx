import React from "react";
import SectionTitlePill from "../sectionTitlePill";
import SatoshiText from "../Text/SatoshiText";
import { aboutSectionCopy } from "../../constants/copy";

function AboutSection() {
	return (
		<section className="bg-brand100">
			<div>
				<div>
					<SectionTitlePill title="About Us" />
					<SatoshiText>{aboutSectionCopy.title}</SatoshiText>
					<SatoshiText>{aboutSectionCopy.description}</SatoshiText>
				</div>
			</div>
			<div />
			<div></div>
		</section>
	);
}

export default AboutSection;
