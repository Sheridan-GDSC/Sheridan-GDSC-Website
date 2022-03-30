import React from "react"
import Form from "../form/contact-us-form.jsx"
import GCircle from "../../../../../static/images/green_circle.png"
import { content } from "../../../../services/content"
import {Container, ContactHeader, TitleUnderline, ContactDescription, GreenCircle,BlueBackground} from './ContactUsStyles.jsx'

const ContactUs = () => {

    const { contact } = content;

    return (
        <Container id="contactUs">
					<ContactHeader>
						Get in touch
						<TitleUnderline />
					</ContactHeader>
						
          <ContactDescription>{ contact.main }</ContactDescription>
          <Form></Form>

					<GreenCircle alt="green circle" src={GCircle} />
					<BlueBackground></BlueBackground>
        </Container>
    )
}

export default ContactUs