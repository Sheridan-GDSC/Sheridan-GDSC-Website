import React from "react"
import { TextInputContainer, TextInputLabel, InputField, Asterisk } from "./TextInputStyles"


const TextInput = ({id, fieldName, isRequired}) => {

    return (
        <TextInputContainer id={id}>
            <TextInputLabel htmlFor={fieldName}>{fieldName}
                {
                    isRequired ?
                     <Asterisk>*</Asterisk>
                     :
                     ""
                }
            </TextInputLabel>
            <InputField type="text" id={fieldName} name={fieldName}></InputField>
        </TextInputContainer>
    ) 
}

export default TextInput;