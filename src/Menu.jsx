import React from "react";
import "./index.css";
import Logo from "./1.jpeg";

const Menu = () =>{
    return(
        <>
        <div className="menu_box">
        <img src={Logo} className="logo_img" alt="loading..."/>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
        </ul>
        </div>
        </>
    )
}

export default Menu;