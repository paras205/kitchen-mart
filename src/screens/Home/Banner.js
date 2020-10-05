import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "../../components/Button";
import BannerOne from "../../assets/images/slider02.jpg";
import BannerTwo from "../../assets/images/slider03.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <i className="fa  fa-long-arrow-right" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <i className="fa  fa-long-arrow-right" />
    </div>
  );
}

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="banner-wrapper">
      <Slider {...settings}>
        <div>
          <div
            className="banner-item bg-cover overlay"
            style={{ backgroundImage: `url(${BannerOne})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="banner-content">
                    <h1>COOKING EQUIPMENT</h1>
                    <h3>
                      Nepal's leading manufacturer of Food Preparation Equipment
                    </h3>
                    <Button
                      type="link"
                      label="View All"
                      className="view_all"
                      linkTo="/"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="banner-item bg-cover overlay"
            style={{ backgroundImage: `url(${BannerTwo})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="banner-content">
                    <h1>COOKING EQUIPMENT</h1>
                    <h3>
                      Nepal's leading manufacturer of Food Preparation Equipment
                    </h3>
                    <Button
                      type="link"
                      label="View All"
                      className="view_all"
                      linkTo="/"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
