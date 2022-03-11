import React from "react";
import "../layout/navbar/list.js";
import "./text_input.css"

const TextArea = ({id, fieldName, isRequired}) => {

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
        id={id}
        name={id}
        rows="10" cols="30"
      />
    </div>
  )
}

export default TextArea;