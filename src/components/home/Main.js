import theSpace from '../../assets/images/space.jpg'
import privateWicon from '../../assets/images/privateWicon.jpg'
import publicWicon from '../../assets/images/publicWicon.jpg'
import usPhoto1 from '../../assets/images/usPhoto1.jpg'
import {
    PUBLIC_WORKSHOP_INTRO,
    PRIVATE_WORKSHOP_INTRO,
    ABOUT_INTRO,
    SPACE_INTRO,
} from '../../assets/Texts'
import ImageOnTop from '../imageOnTop/ImageOnTop'
import './Main.css'

const Main = () => {
    return (
        <div className="main">
            <div className="main-wrapper">
                <div className="content-wrapper">
                    <ImageOnTop
                        imageSrc={publicWicon}
                        imageLink={'/Workshops#publicW'}
                        textSrc={PUBLIC_WORKSHOP_INTRO} //links are inserted in text
                    />
                    <ImageOnTop
                        imageSrc={privateWicon}
                        imageLink={'/Workshops#privateW'}
                        textSrc={PRIVATE_WORKSHOP_INTRO}
                    />
                </div>
                <div className="content-wrapper">
                    <ImageOnTop
                        imageSrc={usPhoto1}
                        imageLink={'/About#aboutUs'} //hash-Link is being used
                        textSrc={ABOUT_INTRO}
                    />
                    <ImageOnTop
                        imageSrc={theSpace}
                        imageLink={'/About#theSpace'} //hash-Link is being used
                        textSrc={SPACE_INTRO}
                    />
                </div>
            </div>
        </div>
    )
}

export default Main
