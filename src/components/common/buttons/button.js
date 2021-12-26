import React from "react"
import "./button.css"

const Button = (props) => {
	const btnClassName = "Button " + props.className; 

	return(
		<button className={btnClassName} onClick={props.onClick}>{props.text}</button>
	)

}

export default Button;