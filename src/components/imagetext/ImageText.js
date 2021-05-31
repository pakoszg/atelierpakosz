import './ImageText.css'
import { HashLink as Link } from 'react-router-hash-link'

const ImageText = ({
    imageSrc,
    textSrc,
    justifyFlex,
    anchorTag,
    imageLink,
}) => {
    const photoStyle = {
        justifyContent: `${justifyFlex}`,
    }

    return (
        <div className="imageText-outer-wrapper" id={anchorTag}>
            <div className="imageText-photo-outer" style={photoStyle}>
                <div className="imageText-photo-wrapper">
                    <Link to={imageLink}>
                        <img src={imageSrc} alt="" />
                    </Link>
                </div>
            </div>
            <div className="imageText-text-wrapper">{textSrc}</div>
        </div>
    )
}

export default ImageText
