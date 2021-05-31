import { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Helmet from 'react-helmet'

const Header = ({ navbarColor, navbarLogoVisibility, navbarPosition }) => {
    const [width, setWindowWidth] = useState(0)
    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }

    window.addEventListener('resize', updateDimensions)

    useEffect(() => {
        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    const responsive = {
        showTopNavMenu: width > 1023,
    }

    return (
        <header>
            <Helmet>
                <title>My app</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                ></meta>
            </Helmet>
            <Navbar
                color={navbarColor}
                navbarLogoVisibility={navbarLogoVisibility}
                showTopNavMenu={responsive.showTopNavMenu}
                position={navbarPosition}
            />
        </header>
    )
}

export default Header
