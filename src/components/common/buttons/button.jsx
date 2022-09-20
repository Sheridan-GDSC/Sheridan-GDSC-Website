import React from "react"
import "./button.css"

const Button = (props) => {
	const btnClassName = "Button " + props.className; 

	return(
		<button className={btnClassName} onClick={props.onClick} alt={props.text}>{props.text}</button>
	)

}

export default Button;