import { HashLink as Link } from 'react-router-hash-link'

export const PRIVATE_WORKSHOPS_TEXT = (
    <div>
        <h2>PRIVATE PAINTING WORKSHOP</h2>
        <p>
            HUF 35.000 for 2 people. <br /> For every additional guest: + HUF
            10.000/person <br />
            <br /> The standard price includes a 30x40cm stretched canvas,
            additional painting papers, and gauche paint. <br />
            <br /> This event is 3 hours long. For additional requests please
            contact us.
        </p>
        <h2>PRIVATE COLLAGE WORKSHOP</h2>
        <p>
            HUF 8.000/person min. HUF 24.000
            <br />
            We provide subjects, direction, and all necessary materials.
            <br /> <br />
            This event is 3 hours long.
        </p>
        <Link to="/Contact#contactUs">
            <button>Book a workshop</button>
        </Link>
    </div>
)

export const GIFT_CARD_TEXT = (
    <div>
        <h2>GIFT CARD</h2>
        <p>Gift a painting studio experience to your friends and family.</p>

        <Link to="/Contact#contactUs">
            <button>Contact Us</button>
        </Link>
    </div>
)

export const PUBLIC_WORKSHOP_TEXT = (
    <div>
        <h2>THE PUBLIC WORKSHOP</h2>
        <p>
            We host one public workshop Saturday from 16:00 with a certain
            subject. The topics and dates are posted on our instagram story
            weekly. Everybody can join in, it is an open event.
            <br /> <br /> We like to have warm-up exercises in the form of
            dance, movement, meditations, etc.
            <br /> <br />
            The price is dependant on the weekly subject. Usually there are
            painting and collage workshops. <br /> <br />
            Max 10 person per event.
            <br /> <br />
            First come first served. This event is also 3 hours long.
            <br /> <br />
            Please note that same-day cancellations are not appreciated.
        </p>
    </div>
)

export const ABOUT_US = (
    <div>
        <h2>HI THERE</h2>
        <p>
            We are Anna and Geri Pakosz, brother and sister. We started the
            Atelier Pakosz in 2020 as a creative space for hosting workshops,
            events and also as our private studio. Since we like to have fun and
            we like people we wanted a studio where others can experience the
            joy of creation as well. <br /> <br />
            Anna moved back to Budapest from Tel-Aviv in 2020 where she studied
            movement, dance, and painting. Geri studied painting in Budapest and
            when Anna came back we decided to rent a huge space where we can
            host all our creative ideas for adventurous individuals.
            <br /> <br /> If you are interested we would be happy to get to know
            you. Contact us here. Check out our workshops by clicking the button
            below. Can’t wait to meet you! <br /> <br />
            Anna and Geri
        </p>
    </div>
)
export const ABOUT_THE_SPACE = (
    <div>
        <h2>ATELIER SPACE</h2>
        <p>
            The Atelier space consists of two rooms: The “livingroom” where the
            workshops happen. It is a cozy space with a table that can fit up to
            10-12 people comfortably if everyone sits around the table. <br />
            <br />
            The other room of the Atelier is our studio where we paint and can
            be also a place for workshops if the need arises. It is a more
            private space and used only in certain cases (special painting
            requests, etc.)
        </p>
    </div>
)

export const PUBLIC_WORKSHOP_INTRO = (
    <div>
        <div className="imageOnTop-text-header-wrapper">
            <Link to="/Workshops#privateW">
                <h2>PUBLIC WORKSHOP</h2>
            </Link>
        </div>
        <p>
            We host one public workshop Saturday from 16:00 with a certain
            subject. The topics and dates are posted on our instagram story
            weekly. Everybody can join in, it is an open event :)
        </p>
    </div>
)
export const PRIVATE_WORKSHOP_INTRO = (
    <div>
        <div className="imageOnTop-text-header-wrapper">
            <Link to="/Workshops#publicW">
                <h2>PRIVATE WORKSHOP</h2>
            </Link>
        </div>
        <p>
            Private workshops can be booked from groups of 2 throughout the
            week. The subject of the workshop can be set by the group which
            gives the participants greater flexibility.
        </p>
    </div>
)
export const ABOUT_INTRO = (
    <div>
        <div className="imageOnTop-text-header-wrapper">
            <Link to="/About#aboutUs">
                <h2>WHO ARE WE?</h2>
            </Link>
        </div>

        <p>
            We have started the Atelier Pakosz as brother and sister in 2020. It
            is our studio and also a space where we can experiment and involve
            others in various artistic events.
        </p>
    </div>
)
export const SPACE_INTRO = (
    <div>
        <div className="imageOnTop-text-header-wrapper">
            <Link to="/About#theSpace">
                <h2>THE SPACE</h2>
            </Link>
        </div>

        <p>
            The Atelier Space consist of two rooms. The “living room” is where
            the workshops happen. It can fit 10-12 sitting people comfortably.
            The other part of the Atelier is our studio.
        </p>
    </div>
)
