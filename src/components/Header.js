import {CDN_URL} from "./utils/constants";
import {useState} from "react";

const Header = () => {
    const[btnNameReact,setbtnNamereact] =useState("Login");
    return (
        <div className="header">
            <img className="logo" src={CDN_URL}/>
             <div className="nav-container">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login"
                    onClick={() => {
                        btnNameReact === "Login" ? setbtnNamereact("Logout") :setbtnNamereact("Login");
                    }} 
                    >{btnNameReact}</button>
                </ul>
            </div> 
        </div>
    )
}

export default Header;