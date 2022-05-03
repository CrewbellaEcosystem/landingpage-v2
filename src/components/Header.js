import React from 'react';
// LOGO
import logo from '../assets/images/logo.png';
// CSS
import '../styles/Header.css';


const Header = () => {

    return(
        <div className='header-main-div'>
            <span><img src={logo} alt='header-logo'/></span>
            <div className='nav-bar'>
                <span><a href='#'>Terms & Conditions</a></span>
                <span><a href='#'>User agreement</a></span>
                <span><a href='#'>Privacy Policy</a></span>
            </div>
        </div>
    )
}

export default Header;