import ImageText from '../imagetext/ImageText'
import usPhoto2 from '../../assets/images/usPhoto2.jpg'
import spacePhoto from '../../assets/images/space.jpg'
import { ABOUT_THE_SPACE, ABOUT_US } from '../../assets/Texts'
import Footer from '../footer/Footer'
import './About.css'
import { HashLink as Link } from 'react-router-hash-link'
import Header from '../navbar/Header'

const About = () => {
    return (
        <div className="about">
            <Header navbarColor={'black'} />
            <div className="spacer-top"></div>
            <ImageText
                anchorTag={'aboutUs'}
                imageSrc={usPhoto2}
                textSrc={ABOUT_US}
                marginLeftPixels={'100px'}
            />
            <ImageText
                anchorTag={'theSpace'}
                imageSrc={spacePhoto}
                textSrc={ABOUT_THE_SPACE}
                direction={'row-reverse'}
                justifyFlex={'flex-end'}
                marginRightPixels={'100px'}
            />
            <div className="spacer-in-between"></div>
            <div className="about-workshops-button">
                <Link to="/Workshops#workshops">
                    <button>Our Workshops</button>
                </Link>
            </div>
            <div className="spacer-in-between"></div>
            <Footer gridPosition={''} />
        </div>
    )
}

export default About
