import React from "react"
import TextInput from "../../input/text_input"
import TextArea from "../../input/text_area"
import Dropdown from "../../input/dropdown"
import Button from "../../buttons/button"
import "./contact-us-form.css"
import WomanTop from "../../../../../static/images/woman_on_computer.png"
import ManTop from "../../../../../static/images/man_pointing_down.png"
import ManBottom from "../../../../../static/images/man_holding_pencil.png"
import WomanBottom from "../../../../../static/images/woman_carrying_picture.png"

const ContactUsForm = () => {
    const options = ["1","2", "3"]

		const formSubmit = () => {
			console.log('submit form');

		}

    return (
        <div className="contact_us_form_div">
					<div className="personalInputs">
            <TextInput id="firstName" fieldName="First Name: " isRequired="true" />
            <TextInput id="lastName" fieldName="Last Name: " isRequired="true" />
            <TextInput id="email" fieldName="Email: " isRequired="true" />
            <Dropdown id="subject"
                fieldName="Select a Subject: " 
                isRequired="false"
                options={options}
            />
					</div>
          
            <TextArea id="message" fieldName="Message: " isRequired="true" />
						<Button id="submit" text="Submit" onClick={formSubmit}/>

						<div id="womanTop" className="personIcon">
              <img alt="cartoon girl typing on computer" src={WomanTop}></img>
						</div>

						<div id="manTop" className="personIcon">
              <img alt="cartoon man pointing downward" src={ManTop}></img>
						</div>

						<div id="manBottom" className="personIcon">
              <img alt="cartoon man holding a large pencil" src={ManBottom}></img>
						</div>
						
						<div id="womanBottom" className="personIcon">
              <img alt="cartoon woman carrying a picture" src={WomanBottom}></img>
						</div>
        </div>
    )
}

export default ContactUsForm