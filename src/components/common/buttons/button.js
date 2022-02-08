import React from "react"
import "./button.css"

const Button = (props) => {
	const btnClassName = "Button " + props.className; 

	return(
		<button className={btnClassName}><a alt={props.text} href={props.onClick}>{props.text}</a></button>
	)

}

export default Button;