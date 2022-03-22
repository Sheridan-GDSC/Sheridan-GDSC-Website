import React from "react";
import "../layout/navbar/list.jsx";
import { TextInputContainer, DropDown, TextInputLabel } from "./TextInputStyles.jsx";


const Dropdown = ({id, fieldName, options}) => {

  return (
    <TextInputContainer>
      <TextInputLabel name={fieldName}>{fieldName}</TextInputLabel>
      <DropDown id={id} name={fieldName}>
        {
          options.map(option => 
            <option key={option} value={option}>{option}</option>
          )
        }
      </DropDown>  
    </TextInputContainer>
  )
}

export default Dropdown;