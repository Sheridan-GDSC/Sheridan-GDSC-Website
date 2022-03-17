import React from "react"
import "./contact_us.css"
import Form from "../form/contact-us-form.jsx"
import GCircle from "../../../../../static/images/green_circle.png"
import { content } from "../../../../services/content"

const ContactUs = () => {

    const { contact } = content;

    return (
        <div id="contactUs" className="cu">
            <h1 className="cu-heading">
							Get in touch
							<div id="cu-underline"></div>
						</h1>
						
            <p className="cu-desc">{ contact.main }</p>
            <Form></Form>

					<img id="gCircleIcon" alt="green circle" src={GCircle} />
					<div id="blueBack"></div>
        </div>
    )
}

export default ContactUs