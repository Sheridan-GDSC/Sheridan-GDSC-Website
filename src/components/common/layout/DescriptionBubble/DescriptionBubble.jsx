import React from 'react';
import {Container, DescriptionTitle, DescriptionText} from "./DescriptionBubbleStyles";


const DescriptionBubble = (props) => {

	return(
		<Container maxWidth={props.maxWidth} id={props.id}>
			<DescriptionTitle>{props.title}</DescriptionTitle>
			<DescriptionText>{props.text}</DescriptionText>
		</Container>
	);

}

export default DescriptionBubble;