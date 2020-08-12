import React from "react";

const Footer = () =>{
    const year = new Date().getFullYear();

    return(
        <>
        <footer className="footer">
            <p>copyright &copy; {year} Abhishek Note App</p>
        </footer>

        </>
    )
}

export default Footer;