import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BannerOne from "../assets/images/slider02.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="banner-wrapper">
      <Slider {...settings}>
        <div>
          <div
            className="banner-item bg-cover overlay"
            style={{ backgroundImage: `url(${BannerOne})` }}
          >
            <div className="container">asdasd</div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
