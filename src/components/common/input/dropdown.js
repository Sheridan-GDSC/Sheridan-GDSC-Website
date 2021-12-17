import React from "react";
import "../layout/list.js";

const Dropdown = ({fieldName, options}) => {

  return (
    <div>
      <label name={fieldName}>{fieldName}</label>
      <select id={fieldName} name={fieldName}>
        {
          options.map(option => 
            <option value={option}>{option}</option>
          )
        }
      </select>
      
    </div>
  )
}

export default Dropdown;