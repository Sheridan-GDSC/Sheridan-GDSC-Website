import React from "react";
import Stat from "./stat/stat"
import GCircle from "../../../../static/images/green_circle.png"
import BranchLeaves from "../../../../static/images/branch-leaves.png"
import "./about-us.css"

const AboutUs = () => {


	return (
		<div className="AboutUs">

			<h1 className="au-heading">
			About Us
				<div id="au-underline"></div>
			</h1>

			<div class="au-grid">

				<div id="extraDetail">
					ppl icons and title/info blurbs
				</div>

				<div id="info">
					<h2 id="subtitle">Preaesent mattis metus sit amet <span class="green">justo mattis.</span></h2>
					<p id="au-blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi reiciendis libero! Provident cumque natus animi ipsam ratione, impedit quas laudantium iste blanditiis asperiores necessitatibus soluta odit dignissimos corporis assumenda optio cum eligendi minima ex molestiae aliquam amet magni. Placeat.</p>
					<div id="statContainer">
						<Stat number="56" name="Projects" />
						<Stat number="128" name="Members" />
						<Stat number="40" name="Current Projects" />
					</div>
					<img id="branchLeaves" alt="cartoon branch with some leaves on it " src={BranchLeaves} />
				</div>
			</div>


			<img id="greenIcon" alt="green circle" src={GCircle} />
		</div>
	)
}

export default AboutUs;