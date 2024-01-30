import React from "react";
import '../Styles/Home.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/Mandel(logo).png'
import icon1 from '../assets/Vector.png'
import icon2 from '../assets/Instagram (1).png';
import icon3 from '../assets/linkedin-svgrepo-com 1.png';

import { useState } from "react";

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

export const Home = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);

    };
    return (
        <div id="home" className="main">
        <div className="header">
            <div className="logo">

                <img src={logo}
                    alt=""
                    style={{ width: '80px', height: '70px' }}
                    className="logo" />
            </div>
            

            <nav >
                < a href="#" className="tabs">Home</a>

                <a  href="#about" className="tabs">About</a>
                
                <a href="#contact" className="tabs">Contact</a>

                {/* <a href="#gallery" className="tabs">Gallery</a> */}
                {/* <NavLink exact to="/" activeClassName="active" className="tabs" onClick={toggleNav}>Home</NavLink>
                <NavLink to="/aboutus" activeClassName="active" className="tabs" onClick={toggleNav}>About</NavLink>
                <NavLink to="/gallery" activeClassName="active" className="tabs" onClick={toggleNav}>Gallery</NavLink>
                <NavLink to="/contactus" activeClassName="active" className="tabs" onClick={toggleNav}>Contact</NavLink> */}
            </nav>



            <div className="social-icons">
                {/* Add your social media icons and links here */}
                <div>
                    <a href="https://www.facebook.com/profile.php?id=100078856128389">
                        <img src={icon1}
                            alt=""
                            style={{ width: '19px', height: '29px', margin: '5px' }}

                            className="logo" /> </a></div>
                <div>
                    <a href="https://www.instagram.com/mandelite_sa/">
                        <img src={icon2}
                            alt=""
                            style={{ width: '29px', height: '29px', margin: '5px' }}
                            className="logo" /> </a></div>
                <div>
                    <a href="https://www.linkedin.com/company/mandelite/">
                        <img src={icon3}
                            alt=""
                            style={{ width: '31px', height: '29px', margin: '5px' }}
                            className="logo" /> </a></div>

            </div>
            {/* <div className="menu-toggle" onClick={toggleNav}>
                <div className={`bar ${navOpen ? 'open' : ''}`}></div>
                <div className={`bar ${navOpen ? 'open' : ''}`}></div>
                <div className={`bar ${navOpen ? 'open' : ''}`}></div>
            </div> */}
        </div>

      
        <div className="Hero">

            <div className="txt">
                <h1 className="Title">Mandelite</h1>
                 <h2 className="subTitle">Illuminating Pathways to Innovation and Security</h2> 
                 {/* <h3 className="subText">Illuminating Pathways to Innovation and Security</h3>  */}
            </div>



        </div>

    </div>

    )}