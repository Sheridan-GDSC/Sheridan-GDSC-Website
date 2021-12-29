import React from "react"
import "./text_input.css"


const TextInput = ({id, fieldName, isRequired}) => {

    return (
        <div id={id} className="div-TI">
            <label for={fieldName} className="ti-lbl">{fieldName}

                {
                    isRequired ?
                     <span>*</span>
                     :
                     ""
                }
            </label>
            <input type="text" id={fieldName} name={fieldName} className="ti-input"></input>
        </div>
    ) 
}

export default TextInput;