import './ImageOnTop.css'
import { HashLink as Link } from 'react-router-hash-link'

const ImageOnTop = ({ imageSrc, textSrc, imageLink }) => {
    return (
        <div className="imageOnTop-outer-wrapper">
            <div className="imageOnTop-photo-outer">
                <div className="imageOnTop-photo-wrapper">
                    <Link to={imageLink}>
                        <img src={imageSrc} alt="" />
                    </Link>
                </div>
            </div>

            <div className="imageOnTop-text-wrapper">{textSrc}</div>
        </div>
    )
}

export default ImageOnTop
