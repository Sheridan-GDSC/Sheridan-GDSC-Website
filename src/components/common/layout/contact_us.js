import React from "react"
import "./contact_us.css"
import Form from "./form/contact-us-form.js"
import GCircle from "../../../../static/images/green_circle.png"

const ContactUs = () => {
    return (
        <div className="cu">
            <h1 className="cu-heading">
							Get in touch
							<div id="cu-underline"></div>
						</h1>
						
            <p className="cu-desc">Praesent mattis metus sit amet justo mattis eleifend. Suspendisse vel neque porta, tincidunt augue id, rhoncus dui. Sed molestie posuere nibh. In placerat est nibh, quis imperdiet quam iaculis et. Sed feugiat justo nec pharetra pharetra. Donec tortor augue, pharetra id.</p>
            <Form></Form>

					<img id="gCircleIcon" alt="green circle" src={GCircle} />
					<div id="blueBack"></div>
        </div>
    )
}

export default ContactUs