import {CDN_URL} from "./utils/constants";
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={CDN_URL}/>
             <div className="nav-container">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div> 
        </div>
    )
}

export default Header;