import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <h2>CONTACT US.</h2>
            <p>atelier.pakosz@gmail.com</p>
            <br />
            <p>12 József Nádor Tér</p>
            <p> 1051 Budapest </p>
            <p> Hungary</p>
            <div className="social-contacts">
                <a href="https://www.instagram.com/atelier.pakosz/">
                    <AiOutlineInstagram />
                </a>
                <a href="https://www.facebook.com">
                    <FaFacebookF />
                </a>
            </div>
        </div>
    )
}
export default ContactInfo
