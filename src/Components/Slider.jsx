import React from 'react'
import Slider from "react-slick";
import "../Styles/Slider.css"
import banner from '../Assets/images/banner.jpg';
import banner2 from '../Assets/images/banner2.jpg';
import banner3 from '../Assets/images/banner3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderComp = () => {
    var settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
    };

    return (
        <div className='slider'>
            <Slider {...settings}>
                <div className='sliders'>
                    <img src={banner} />
                </div>
                <div className='sliders'>
                    <img src={banner2} />
                </div>
                <div className='sliders'>
                    <img src={banner3} />
                </div>
            </Slider>

        </div>
    )
}

export default SliderComp