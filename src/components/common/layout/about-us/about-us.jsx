import React from "react";
import Stat from "./stat/stat"
import GCircle from "../../../../../static/images/green_circle.png"
import YCircle from "../../../../../static/images/yellow_circle.svg"
import BranchLeaves from "../../../../../static/images/branch-leaves.png"
import ManPointing from "../../../../../static/images/man_pointing.svg"
import WomanHoldingCard from "../../../../../static/images/woman_holding_card.svg"
import MainMegaphone from "../../../../../static/images/man_megaphone.svg"
import Clouds from "../../../../../static/images/clouds.svg"
import RedLoops from "../../../../../static/images/red_loops.png"
import "./about-us.css"
import DescriptionBubble from "../DescriptionBubble/DescriptionBubble";
import { content } from "../../../../services/content";

const AboutUs = () => {

	const { about } = content

	function createDiscordLinkParagraph() {
		return {__html: about.main.third};
	}

	return (
		<div id="aboutUs" className="AboutUs">
			<div className="au-grid">
				<div id="extraDetail">
					<div className="dbContainer">
						<div id="dbImgContainer1">
							<img id="dbImg1" src={ManPointing} alt={"Man pointing"}/>
							<img id="dbImgClouds" src={Clouds} alt={"Clouds"}/>
						</div>
						<DescriptionBubble style={{maxWidth: '446px'}} id="db1" title={ about.bubbleOne.title } text={ about.bubbleOne.main } />
					</div>
					<div className="dbContainer">
						<DescriptionBubble style={{maxWidth: '522px'}} id="db2" title={ about.bubbleTwo.title } text={ about.bubbleTwo.main } />
						<img id="dbImg2" src={WomanHoldingCard} alt={"Woman holding card"}/>
					</div>
					<div className="dbContainer">
						<img id="dbImg3" src={MainMegaphone} alt={"Man holding megaphone"}/>
						<DescriptionBubble style={{maxWidth: '460px'}} id="db3" title={ about.bubbleThree.title } text={ about.bubbleThree.main } />
					</div>
					<img id="yellowIcon" alt="yellow circle" src={YCircle} />
				</div>

				<div id="info">
					<h1 className="au-heading">
						About Us
						<div id="au-underline"></div>
					</h1>
					<img id="redLoops" alt="red loops background" src={RedLoops} />

					<h2 id="subtitle">Preaesent mattis metus sit amet <span className="green">justo mattis.</span></h2>
					<p id="au-blurb">{ about.main.first }</p>
					<p id="au-blurb">{ about.main.second }</p>
					<p id="au-blurb" dangerouslySetInnerHTML={createDiscordLinkParagraph()}></p>
					<div id="statContainer">
						<Stat number="56" name="Projects" />
						<Stat number="128" name="Members" />
						<Stat number="40" name="Current Projects" />
					</div>
					<img id="branchLeaves" alt="cartoon branch with some leaves on it" src={BranchLeaves} />
				</div>
			</div>

			<img id="greenIcon" alt="green circle" src={GCircle} />
		</div>
	)
}

export default AboutUs;