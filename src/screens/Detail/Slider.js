import React from "react";
import Slider from "react-slick";
import Magnifier from "react-magnifier";

import sliderImg from "../../assets/images/product_five.jpg";

const ProductSlider = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <div className="dots-wrapper">
          <img src={sliderImg} alt="" />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots product-img-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="product_slider_wrapper">
      <Slider {...settings}>
        <div>
          <div className="detail-product-img">
            <Magnifier src={sliderImg} />
          </div>
        </div>
        <div>
          <div className="detail-product-img">
            <Magnifier src={sliderImg} />
          </div>
        </div>
        <div>
          <div className="detail-product-img">
            <Magnifier src={sliderImg} />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ProductSlider;
