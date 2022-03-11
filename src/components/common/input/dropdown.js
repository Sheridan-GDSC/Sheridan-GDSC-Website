import React from "react";
import "../layout/navbar/list.js";
import "./text_input.css"
const Dropdown = ({id, fieldName, options}) => {

  return (
    <div className="div-TI">
      <label className="ti-lbl">{fieldName}</label>
      <select className="ti-input" id={id} name={id}>
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