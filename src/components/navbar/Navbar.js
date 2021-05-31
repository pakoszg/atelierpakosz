import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import './Navbar.css'
import { useState } from 'react'
import { GrClose } from 'react-icons/gr'

const Navbar = ({ color, position, navbarLogoVisibility, showTopNavMenu }) => {
    const iconStyles = {
        fill: showTopNavMenu ? `${color}` : 'black',
        fontSize: '1.5em',
        flexDirection: 'flex-end',
    }
    const fontStyles = {
        color: showTopNavMenu ? `${color}` : 'black',
        flexDirection: 'flex-start',
    }

    const navbarStyle = {
        position: `${position}`,
    }

    const logoStyle = { visibility: `${navbarLogoVisibility}` }

    const navButtonStyle = {
        position: 'absolute',
        display: showTopNavMenu ? 'none' : 'flex',
        zIndex: '2',
    }

    const navButtonIconStyles = {
        fill: `${color}`,
        fontSize: '2em',
        flexDirection: 'flex-end',
    }

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    click
        ? document.body.classList.add('no-scroll')
        : document.body.classList.remove('no-scroll')

    return (
        <div className="navbar-wrapper">
            <nav
                className={click ? 'navbar active' : 'navbar'}
                style={navbarStyle}
            >
                <div className="navbar-logo-wrapper mobile" style={logoStyle}>
                    <Link className="navbar-logo-link" to="/">
                        <div className="navbar-logo-image-wrapper">
                            <img
                                src={logo}
                                alt=""
                                className="navbar-logo-image"
                            />
                        </div>
                    </Link>
                </div>

                <div className="links mobile">
                    <Link
                        className="navbar-links-text mobile"
                        style={fontStyles}
                        to="/Workshops"
                        onClick={closeMobileMenu}
                    >
                        Workshops
                    </Link>
                    <Link
                        className="navbar-links-text mobile"
                        style={fontStyles}
                        to="/About"
                        onClick={closeMobileMenu}
                    >
                        About
                    </Link>
                    <Link
                        className="navbar-links-text mobile"
                        style={fontStyles}
                        to="/Contact"
                        onClick={closeMobileMenu}
                    >
                        Contact
                    </Link>
                    <div className="navbar-icons mobile">
                        <Link to="https://www.instagram.com/atelier.pakosz/">
                            <AiOutlineInstagram style={iconStyles} />
                        </Link>
                        <Link to="https://www.facebook.com">
                            <FaFacebookF style={iconStyles} />
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="navbutton" style={navButtonStyle}>
                <div className="navButton-wrapper" onClick={handleClick}>
                    {click ? (
                        <GrClose style={navButtonIconStyles} />
                    ) : (
                        <GiHamburgerMenu style={navButtonIconStyles} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
