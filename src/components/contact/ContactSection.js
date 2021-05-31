import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import FormSuccess from './FormSuccess'
import { useState } from 'react'

const ContactSection = () => {
    const [isSubmited, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

    return (
        <div className="contact" id={'contactUs'}>
            <div className="contact-wrapper">
                <ContactInfo />
                {!isSubmited ? (
                    <ContactForm submitForm={submitForm} />
                ) : (
                    <FormSuccess />
                )}
            </div>
        </div>
    )
}

export default ContactSection
