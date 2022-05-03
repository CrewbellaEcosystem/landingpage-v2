import React from 'react';
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive'
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

    const Desktop = useMediaQuery({ minWidth: 1025, maxWidth: 1280 })
    const Tablets = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
    const lowTablets = useMediaQuery({ minWidth: 481, maxWidth: 767 })
    const smartphone = useMediaQuery({ maxWidth: 480 })

    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: smartphone ? 1 : lowTablets ? 1 : Tablets ? 2 : Desktop ? 3 : 3,
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