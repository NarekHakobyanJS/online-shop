import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slider } from '../../db/db';
import './Home.css';

const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='sl'>
            <Slider {...settings}>
                {
                    slider.map((sl, i) => (
                        <div key={i} className='sl-block'>
                            <img src={sl} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Home
