import React, { useState } from "react";
import Slider from "react-slick";
// import TMDPoster from '../TMDPoster';

function SlickSlider ({children}) {
    const [sliderSetting] = useState({
        dots: true,
        speed: 500,
        slidesToShow: 2,
        draggable: false,
        arrows: false
    });

    return (
        <Slider {...sliderSetting}>
            {children}
        </Slider>
    );

}

export default SlickSlider;