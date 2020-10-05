import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductItem from "./ProductItem";

const Products = ({ slider }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000
  };
  if (slider) {
    return (
      <div className="product_slider">
        <Slider {...settings}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </Slider>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col-md-3">
          <ProductItem />
        </div>
        <div className="col-md-3">
          <ProductItem />
        </div>
        <div className="col-md-3">
          <ProductItem />
        </div>
        <div className="col-md-3">
          <ProductItem />
        </div>
        <div className="col-md-3">
          <ProductItem />
        </div>
        <div className="col-md-3">
          <ProductItem />
        </div>
        <div className="col-md-3">
          <ProductItem />
        </div>
        <div className="col-md-3">
          <ProductItem />
        </div>
      </div>
    );
  }
};

export default Products;
