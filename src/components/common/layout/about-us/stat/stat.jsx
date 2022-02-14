import React from "react"
import {StatContainer, StatNumber, StatName} from "./StatStyles";


const Stat = (props) => {
return(
	<StatContainer>
		<StatNumber>{props.number}</StatNumber>
		<StatName>{props.name}</StatName>
	</StatContainer>
);
}

export default Stat;