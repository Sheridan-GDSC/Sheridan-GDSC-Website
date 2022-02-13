import React from "react";
import "../layout/navbar/list.jsx";
import "./text_input.css"
const Dropdown = ({fieldName, options}) => {

  return (
    <div className="div-TI">
      <label className="ti-lbl" name={fieldName}>{fieldName}</label>
      <select className="ti-input" id={fieldName} name={fieldName}>
        {
          options.map(option => 
            <option key={option} value={option}>{option}</option>
          )
        }
      </select>
      
    </div>
  )
}

export default Dropdown;