import React from "react"
import TextInput from "../../input/text_input"
import TextArea from "../../input/text_area"
import Dropdown from "../../input/dropdown"
import "./contact-us-form.css"

const ContactUsForm = () => {
    const options = ["1","2", "3"]
    return (
        <div className="contact_us_form_div">
            <TextInput fieldName="First Name: " isRequired />
            <TextInput fieldName="Last Name: " isRequired />
            <TextInput fieldName="Email: " isRequired />
            <Dropdown 
                fieldName="Select a Subject: " 
                isRequired 
                options={options}
            />
            <TextArea fieldName="Message: " isRequired />
        </div>
    )
}

export default ContactUsForm