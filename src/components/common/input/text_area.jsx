import React from "react";
import "../layout/navbar/list.jsx";
import { Asterisk, TextAreaContainer, TextAreaInput, TextInputLabel } from "./TextInputStyles.jsx";


const TextArea = ({fieldName, isRequired}) => {

  return (
    <TextAreaContainer>
      <TextInputLabel htmlFor={fieldName}>{fieldName}
					{
						isRequired ?
              <Asterisk>*</Asterisk>
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