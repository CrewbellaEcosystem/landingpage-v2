import React from 'react';
// COMPONENTS
import { ButtonAppStore, ButtonGooglePlay } from './Button';
// IMAGES
import logo from '../assets/images/logo.png';
// ICONS
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
// CSS
import '../styles/Footer.css';


const Footer = () => {

    return(
        <div className='footer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f8ff" fill-opacity="1" d="M0,224L60,218.7C120,213,240,203,360,202.7C480,203,600,213,720,202.7C840,192,960,160,1080,149.3C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            <div className='footer-div-content'>
                <div className='f-d-c-left'>
                    <h3>Pages</h3>
                    <div className='other-links'>
                        <span><a href='#'>Terms & Conditions</a></span>
                        <span><a href='#'>User Agreement</a></span>
                        <span><a href='#'>Privacy Policy</a></span>
                    </div>
                </div>
                <div className='f-d-c-middle'>
                    <h3>Download</h3>
                    <div className='f-download-btns'>
                        <ButtonGooglePlay/>
                        <ButtonAppStore/>
                    </div>
                </div>
                <div className='f-d-c-right'>
                    <img src={logo} alt='logo'/>
                    <div className='f-social-logos'>
                        <span><FaFacebook/></span>
                        <span><FaInstagram/></span>
                        <span><FaTwitter/></span>
                        <span><FaWhatsapp/></span>
                    </div>
                    <label className='f-ph'>+91 84728 02283</label>
                    <label className='f-mail'>query@crewbella.com</label>
                </div>
            </div>
        </div>
    )
}

export default Footer;