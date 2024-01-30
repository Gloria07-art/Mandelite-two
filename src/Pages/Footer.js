import React from "react";
import '../Styles/Footer.css'


export const Footer = () => {


    return(
        <div className="footerMain">
            {/* <div className="footer-logo"><img src={logo2}
                        alt=""
                        style={{ width: '120px', height: '120px', margin:'20px' }}
                        className="logo" /></div> */}
          <div className="footer-text">Powered by Mandelite <br/>
          Copyright | All rights Reserved</div>
          <div className="footer-social-icons">
            {/* Add your social media icons and links here */}
          </div>
        </div>
    )
}