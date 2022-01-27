import React from "react";
import "../layout/list.js";
import "./text_input.css"

const TextArea = ({fieldName, isRequired}) => {

  return (
    <div className="div-TI ta-div">
      <label className="ti-lbl" htmlFor={fieldName}>{fieldName}
					{
						isRequired ?
							<span>*</span>
							:
							""
				}
			</label>
      <textarea 
				className="ti-input text-area"
        id={fieldName}
        name={fieldName}
        rows="10" cols="30"
      />
    </div>
  )
}

export default TextArea;