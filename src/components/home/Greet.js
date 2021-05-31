import atelierPhoto from '../../assets/images/atelier.jpg' // with import
import atelierLogo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Greet = () => {
    const darkenImg = 'linear-gradient(rgb(0 0 0 / 42%), rgb(0 0 0 / 14%))'
    return (
        <div
            className="greet"
            style={{
                backgroundImage: `${darkenImg},url(${atelierPhoto})`,
            }}
        >
            <div className="greet-middle">
                <img src={`${atelierLogo}`} alt="" className="logo" />
                <h2>A creative space for having fun</h2>
                <Link to="/About">
                    <button className="about-button">About us</button>
                </Link>
            </div>
        </div>
    )
}

export default Greet
