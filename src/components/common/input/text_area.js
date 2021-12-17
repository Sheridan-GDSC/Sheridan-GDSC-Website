import React from "react";
import "../layout/list.js";

const TextArea = ({fieldName}) => {

  return (
    <div>
      <label for={fieldName}>{fieldName}</label>
      <textarea 
        id={fieldName}
        name={fieldName}
        rows="10" cols="30"
      />
    </div>
  )
}

export default TextArea;