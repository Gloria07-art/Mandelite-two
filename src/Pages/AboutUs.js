import { Footer } from "./Footer";
import img from '../assets/person-working-html-computer.jpg';
import png1 from '../assets/software-engineer.png';
import png2 from '../assets/user-experience.png';
import png3 from '../assets/cyber-security.png';
import png4 from '../assets/analytics.png';
import '../Styles/AboutUs.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



export const AboutUs = () => {


    return (


        <div id="about" className="About">

            <h1 className="abtHeading"> About Us</h1>

            <div className="about-content">

                <div className="about-left">
                    <img src={img} alt="" className="abtImg" />
                </div>

                <div className="about-right">

                    <p>Mandelite is a creative and innovative
                        technology consultancy. With a steadfast<br />
                        dedication to innovation and development, we
                        are experts in offering complete IT solutions<br />
                        to companies in a range of industries.
                        Software development, tech research,<br />
                        cybersecurity compliance, and UI/UX design<br />
                        are some of our main offerings.</p>


                    <p>The mission and vision is empowering businesses<br />
                        with cutting-edge technology solutions, fostering <br />
                        innovation, and contributing to the growth of  <br />
                        community through education and skill development.</p>
                </div>

            </div>
            <div className="abt">
                <h1 className="abtHeading">Our Services</h1>




                {/* <h3 className="subHeading">Our sponsors and collaborators are Awakening Creative Projects, National Film and Video Foundation, Heinrich Böll <br />
                        Stiftung Office Cape Town, Sunshine Cinema, The Workshop ko Kasi , Bethany Foundation and many more.</h3> */}
            </div>
            <div className="imgContainer">
                <div className="Service">
                    <img src={png1} alt="" className="ImgSponsor" />

                    <h2 className="ServiceTxt" >Software Development</h2>

                </div>
                <div className="Service">
                    <img src={png2} alt="" className="ImgSponsor" />

                    <h2 className="ServiceTxt" >UX/UI Design</h2>
                </div>
                <div className="Service">
                    <img src={png3} alt="" className="ImgSponsor" />

                    <h2 className="ServiceTxt" >Cybersecurity</h2> </div>
<div>
                <img src={png4} alt="" className="ImgSponsor" />

                <h2 className="ServiceTxt" >Research & Consultation</h2>

                </div>
            </div>
        </div>

    )
}