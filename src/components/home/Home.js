import Greet from './Greet'
import Header from '../navbar/Header'
import Main from './Main'
import ContactSection from '../contact/ContactSection'
import Footer from '../footer/Footer'

const Home = () => {
    return (
        <div className="home">
            <Header
                navbarColor={'white'}
                navbarLogoVisibility={'hidden'}
                navbarPosition={'absolute'}
            />
            <Greet />
            <Main />
            <div className="spacer-in-between"></div>
            <ContactSection />
            <div className="spacer-in-between"></div>
            <Footer gridPosition={''} />
        </div>
    )
}

export default Home
