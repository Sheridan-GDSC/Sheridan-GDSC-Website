import React from "react"
import "./text_input.css"


const TextInput = ({id, fieldName, isRequired}) => {
    return (
        <div id={id} className="div-TI">
            <label htmlFor={fieldName} className="ti-lbl">{fieldName}
                {
                    isRequired ?
                     <span>*</span>
                     :
                     ""
                }
            </label>
            <input type="text" id={id} name={id} className="ti-input"></input>
        </div>
    ) 
}

export default TextInput;