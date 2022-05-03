import React from 'react';
// ICONS
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// CSS
import '../styles/TestimonialCard.css';
// IMAGES
import testimonial_1 from '../assets/images/testimonial_1.png';


const TestimonialCard = () => {
    
    return(
        <div className='testimonial-card'>
            <div className='t-c-top-div'>
                <div className='card-profile'>
                    <img src={testimonial_1} alt='testimonial1'/>
                    <div className='t-overlay'></div> 
                </div>
                <div className='card-label'>
                    <label>Mallik Jain</label>
                </div>
            </div>
            <div className='t-c-middle-div'>
                <span className='desc'>
                    It is a long established fact that a reader will be distracted by the readable 
                    content of a page when looking at its layout. The point of using Lorem Ipsum
                     is that it has a more-or-less normal distribution of letters, as opposed.
                </span>
            </div>
            <div className='t-c-bottom-div'>
                <label>Follow</label>
                <div className='t-social-icons'>
                    <span><FaFacebook/></span>
                    <span><FaInstagram/></span>
                    <span><FaTwitter/></span>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;