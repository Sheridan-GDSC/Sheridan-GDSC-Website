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
import Clouds from "../../../../../static/images/clouds.png"
import fetch from "node-fetch"
import ReCAPTCHA from "react-google-recaptcha"


const ContactUsForm = () => {
  const options = ["collaboration","Executive Team", "Other"]
  const recaptchaRef = React.createRef()

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // Get recaptcha value
    const recaptchaValue = recaptchaRef.current.getValue()
    
    // Submit form if recaptcha is valid
    if (recaptchaValue) {
      let formData = new FormData();
      const form = e.currentTarget.elements;
      console.log(form)
  
      for (let i = 0; i < form.length; i++) {
        formData.append(form[i].name, form[i].value);
      }
  
      fetch("https://getform.io/f/e1351c0b-e0c7-433c-85f1-7d5f3e4c57d8", {
        method: "POST",
        body: formData,
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
    } else {
      console.log("ReCAPTCHA not verified. Please try again.")
    }
  }

  return (
      <form className="contact_us_form_div" onSubmit={handleOnSubmit}>
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

        <div id="recaptcha">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LfH6s0eAAAAALzYmSPr4bbJymQeEH18dOhA1GWp"
            onChange={() => console.log("Captcha verified")}
          />
        </div>

        <Button text="Submit" type="submit"/>
        <img id="womanTop" className="icons" alt="cartoon girl typing on computer" src={WomanTop} />
        <img id="manTop" className="icons" alt="cartoon man pointing downward" src={ManTop} />	
        <img id="manBottom" className="icons" alt="cartoon man holding a large pencil" src={ManBottom} />
        <img id="womanBottom" className="icons" alt="cartoon woman carrying a polaroid" src={WomanBottom} />
        <img id="small_gear" className="icons" alt="small gear icon" src={SmallGear} />
        <img id="large_gear" className="icons" alt="large gear icon" src={LargeGear} />
        <img id="large_ylw_gear" className="icons" alt="large yellow gear icon" src={LargeYlwGear} />
        <img alt="clouds" src={Clouds} id="clouds" />
      </form>
  )
}

export default ContactUsForm