import React from "react";
import "../layout/navbar/list.jsx";
import { TextAreaContainer, TextAreaInput, TextInputLabel } from "./TextInputStyles.jsx";


const TextArea = ({fieldName, isRequired}) => {

  return (
    <TextAreaContainer>
      <TextInputLabel htmlFor={fieldName}>{fieldName}
					{
						isRequired ?
							<span>*</span>
							:
							""
				}
			</TextInputLabel>
      <TextAreaInput 
        id={fieldName}
        name={fieldName}
        rows="10" cols="30"
      />
    </TextAreaContainer>
  )
}

export default TextArea;