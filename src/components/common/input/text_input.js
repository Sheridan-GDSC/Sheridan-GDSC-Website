import React from "react"
import "./text_input.css"


const TextInput = ({fieldName, isRequired}) => {

    return (
        <div className="div-TI">
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