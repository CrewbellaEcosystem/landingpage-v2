import React from 'react';
// Buttons
import playstore from '../assets/images/playstore.svg';
import appstore from '../assets/images/appstore.svg';
// CSS
import '../styles/Button.css';


export const ButtonAppStore = () => {

    return(
        <div className='app-btn app-store-btn'>
            <img src={appstore} alt='app store button'/>
        </div>
    )
}

export const ButtonGooglePlay = () => {

    return(
        <div className='app-btn google-store-btn'>
            <img src={playstore} alt='app store button'/>
        </div>
    )
}