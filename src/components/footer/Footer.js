import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

const Footer = ({ gridPosition }) => {
    const customStyle = { gridRow: `${gridPosition}` }
    return (
        <footer className="footer" style={customStyle}>
            <div className="footer-wrapper">
                <div className="footer-address">
                    <p>12 József Nádor Tér</p>
                    <p> 1051 Budapest </p>
                    <p> Hungary</p>
                </div>
                <div className="footer-menu">
                    <a href="/Workshops">Workshops</a>
                    <a href="/About">About</a>
                    <a href="/Contact">Contact</a>
                </div>
                <div className="footer-social">
                    <a href="https://www.instagram.com/atelier.pakosz/">
                        <AiOutlineInstagram />
                    </a>
                    <a href="https://www.facebook.com">
                        <FaFacebookF />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
