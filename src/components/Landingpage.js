import React from 'react';
// COMPONENTS
import Header from './Header';
import Footer from './Footer';
import Professions from './Professions';
import { ButtonAppStore, ButtonGooglePlay } from './Button';
// ICONS
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
// IAMGE
import web_mobile_mockup1 from '../assets/images/web_mobile_mockup1.png';
import web_mobile_mockup2 from '../assets/images/web_mobile_mockup2.png';
// CSS
import '../styles/Landingpage.css';
import Carousel from './Carousel';


const Landingpage = () => {

    return(
        <div className='l-main-div'>
            <Header/>
            {/* main-top-welcome-section */}
            <div className='l-main-top-div'>
                <div className='l-content-div'>
                    <div className='main-text-content'>
                        <label className='welcome-text'>Welcome!</label>
                        <h1>Be an <span>Employee</span> get Hired by our visionary <span>Employers</span>.</h1>
                        <h3>It is a long established fact that a reader will be distracted by 
                            the readable content of a page when looking at its layout.</h3>
                        <div className='social-icon-div'>
                            <h4>Follow Us</h4>
                            <div className='icons-div'>
                                <span><FaFacebook/></span>
                                <span><FaTwitter/></span>
                                <span><FaInstagram/></span>
                                <span><FaWhatsapp/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Professional Section */}
            <Professions/>

            {/* Secondary app showcase - 1 */}
            <div className='secondary-showcase-div'>
                <div className='s-mockup-left'>
                    <img src={web_mobile_mockup1} alt='mobile mockup'/>
                </div>
                <div className='s-mockup-right'>
                    <h2>How a professional gets <span>Hired</span> here.</h2>
                    <label className='desc'>
                        It is a long established fact that a reader will be distracted 
                        by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less 
                        normal distribution of letters, as opposed.
                    </label>
                    <div className='contract-signing-div'>
                        <div className='contract-text'>
                            100+
                        </div>
                        <label>Daily Contract Signing</label>
                    </div>

                    <label className='promt'>Want to get Hired ? Download the crewbella app. :)</label>

                    <div className='app-btns-div'>
                        <ButtonGooglePlay/>
                        <ButtonAppStore/>
                    </div>
                </div>
            </div>


            {/* Secondary app showcase - 2 */}
            <div className='secondary-showcase-div-2'>
                <div className='s2-mockup-left'>
                    <h2>How an employer <span>Hires</span> Professionals.</h2>
                    <label className='desc'>
                        It is a long established fact that a reader will be distracted 
                        by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less 
                        normal distribution of letters, as opposed.
                    </label>
                    <div className='contract-signing-div'>
                        <div className='contract-text'>
                            70+
                        </div>
                        <label>Daily Contract Signing</label>
                    </div>

                    <label className='promt'>
                        Want to hire our skillfull proffesionals ? 
                        Download the crewbella app. :)
                    </label>

                    <div className='app-btns-div'>
                        <ButtonGooglePlay/>
                        <ButtonAppStore/>
                    </div>
                </div>

                <div className='s2-mockup-right'>
                    <img src={web_mobile_mockup2} alt='mobile mockup'/>
                </div>
            </div>

            {/* Testimonials */}

            <div className='testimonials-div'>
                <h3>Recommanded by our <span>Testimonials</span></h3>
                <Carousel/>
            </div>

            {/* Footer */}
            <div className='footer-main-div'>
                <Footer/>
            </div>

        </div>
    )
}

export default Landingpage;