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
import SmallGear from "../../../../../static/images/small_gear.png"
import LargeGear from "../../../../../static/images/large_gear.png"
import LargeYlwGear from "../../../../../static/images/large_yellow_gear.png"

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

              <img id="womanTop" className="icons" alt="cartoon girl typing on computer" src={WomanTop} />
              <img id="manTop" className="icons" alt="cartoon man pointing downward" src={ManTop} />	
              <img id="manBottom" className="icons" alt="cartoon man holding a large pencil" src={ManBottom} />
              <img id="womanBottom" className="icons" alt="cartoon woman carrying a picture" src={WomanBottom} />
              <img id="small_gear" className="icons" alt="small gear icon" src={SmallGear} />
              <img id="large_gear" className="icons" alt="large gear icon" src={LargeGear} />
              <img id="large_ylw_gear" className="icons" alt="large yellow gear icon" src={LargeYlwGear} />
        </div>
    )
}

export default ContactUsForm