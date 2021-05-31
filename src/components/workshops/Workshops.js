import Header from '../navbar/Header'
import ImageText from '../imagetext/ImageText'
import './Workshops.css'
import privateWphoto from '../../assets/images/privateWphoto.jpg'
import publicWphoto from '../../assets/images/publicWphoto.jpg'
import giftCard from '../../assets/images/giftCard.jpeg'
import {
    PRIVATE_WORKSHOPS_TEXT,
    GIFT_CARD_TEXT,
    PUBLIC_WORKSHOP_TEXT,
} from '../../assets/Texts'
import Footer from '../footer/Footer'

const Workshops = () => {
    return (
        <div className="workshops" id="workshops">
            <Header navbarColor={'black'} />
            <div className="spacer-top"></div>
            <h1>OUR WORKSHOPS</h1>
            <div className="spacer-in-between"></div>
            <ImageText
                anchorTag={'privateW'}
                imageSrc={privateWphoto}
                textSrc={PRIVATE_WORKSHOPS_TEXT}
                marginLeftPixels={'100px'}
            />
            <ImageText
                anchorTag={'giftCard'}
                imageSrc={giftCard}
                textSrc={GIFT_CARD_TEXT}
                justifyFlex={'flex-end'}
                marginRightPixels={'100px'}
            />
            <ImageText
                anchorTag={'publicW'}
                imageSrc={publicWphoto}
                textSrc={PUBLIC_WORKSHOP_TEXT}
                marginLeftPixels={'100px'}
            />
            <div className="spacer-in-between"></div>
            <Footer gridPosition={''} />
        </div>
    )
}

export default Workshops
