import ContactSection from './ContactSection'
import Header from '../navbar/Header'
import Maps from './Map'
import Footer from '../footer/Footer'
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-page">
            <Header navbarColor={'black'} />
            <div className="spacer-top"></div>
            <ContactSection />
            <div className="spacer-in-between"></div>
            <div className="contact-map-wrapper" style={{ gridRow: '3/4' }}>
                <Maps />
            </div>
            <div className="spacer-in-between"></div>
            <Footer gridPosition={'4/5'} />
        </div>
    )
}

export default Contact
