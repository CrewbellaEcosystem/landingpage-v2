import React from 'react';
import Slider from "react-slick";
// COMPONENTS
import TestimonialCard from './TestimonialCard';
// CSS
import '../styles/Carousel.css';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ccc", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ccc", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}


const Carousel = () => {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return(
        <div className='carousel-div'>
            <div className='c-items'>
                <Slider {...settings}>
                    <div class="item">
                        <TestimonialCard/>
                    </div>
                    <div class="item">
                        <TestimonialCard/>
                    </div>
                    <div class="item">
                        <TestimonialCard/>
                    </div>
                    <div class="item">
                        <TestimonialCard/>
                    </div>
                    <div class="item">
                        <TestimonialCard/>
                    </div>
                    <div class="item">
                        <TestimonialCard/>
                    </div>
                    <div class="item">
                        <TestimonialCard/>
                    </div>
                    <div class="item">
                        <TestimonialCard/>
                    </div>
                    <div class="item">
                        <TestimonialCard/>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Carousel;