import React from "react"
import "./stat.css"

const Stat = (props) => {
return(
	<div className="Stat">
		<p className="statNumber">{props.number}</p>
		<p className="statName">{props.name}</p>
	</div>
);
}

export default Stat;