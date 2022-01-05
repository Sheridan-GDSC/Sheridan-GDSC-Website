import React from "react";
import Stat from "./stat/stat"
import GCircle from "../../../../static/images/green_circle.png"
import BranchLeaves from "../../../../static/images/branch-leaves.png"
import ManPointing from "../../../../static/images/man_pointing.svg"
import WomanHoldingCard from "../../../../static/images/woman_holding_card.svg"
import MainMegaphone from "../../../../static/images/man_megaphone.svg"
import Clouds from "../../../../static/images/clouds.svg"
import "./about-us.css"
import DescriptionBubble from "./DescriptionBubble/DescriptionBubble";
import RedLoop from "../../../../static/images/red_loops.png"
// import Polygon from "../../../../static/images/polygon.png"

const AboutUs = () => {


	return (
		<div className="AboutUs">

			<div className="au-grid">

				<div id="extraDetail">
					<div className="dbContainer">
						<div id="dbImgContainer1">
							<img id="dbImg1" src={ManPointing} alt={"Man pointing"}/>
							<img id="dbImgClouds" src={Clouds} alt={"Clouds"}/>
						</div>
						<DescriptionBubble id="db1" title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolorem? Quos quod alias sunt ut laboriosam omnis a, sapiente veritatis." />
					</div>
					<div className="dbContainer">
						<DescriptionBubble id="db2" title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolorem? Quos quod alias sunt ut laboriosam omnis a, sapiente veritatis." />
						<img id="dbImg2" src={WomanHoldingCard} alt={"Woman holding card"}/>
					</div>
					<div className="dbContainer">
						<img id="dbImg3" src={MainMegaphone} alt={"Man holding megaphone"}/>
						<DescriptionBubble id="db3" title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolorem? Quos quod alias sunt ut laboriosam omnis a, sapiente veritatis." />
					</div>
				</div>

				<div id="info">
					<img id="redLoops" alt="grey polygon shape" src={RedLoop} />
					{/* <img id="polygon" alt="small triangle shape" src={Polygon}></img> */}
					<h1 className="au-heading">
						About Us
						{/*<div id="au-underline"></div>*/}
					</h1>

					<h2 id="subtitle">Preaesent mattis metus sit amet <span className="green">justo mattis.</span></h2>
					<p id="au-blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi reiciendis libero! Provident cumque natus animi ipsam ratione, impedit quas laudantium iste blanditiis asperiores necessitatibus soluta odit dignissimos corporis assumenda optio cum eligendi minima ex molestiae aliquam amet magni. Placeat.</p>
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