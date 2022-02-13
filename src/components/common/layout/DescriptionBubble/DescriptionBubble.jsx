import React from 'react';
import "./DescriptionBubble.css"

const DescriptionBubble = (props) => {

	return(
		<div id={props.id} className="DescriptionBubble">
			<h3 className="descriptionTitle">{props.title}</h3>
			<p className="descriptionText">{props.text}</p>
		</div>
	);

}

export default DescriptionBubble;