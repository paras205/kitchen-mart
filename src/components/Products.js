import React from "react";
import Slider from "react-slick";

import ProductItem from "./ProductItem";

const Products = ({ slider, itemClass }) => {
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
        <div className={`col-md-${itemClass ? itemClass : 4}`}>
          <ProductItem />
        </div>
        <div className={`col-md-${itemClass ? itemClass : 4}`}>
          <ProductItem />
        </div>
        <div className={`col-md-${itemClass ? itemClass : 4}`}>
          <ProductItem />
        </div>
        <div className={`col-md-${itemClass ? itemClass : 4}`}>
          <ProductItem />
        </div>
        <div className={`col-md-${itemClass ? itemClass : 4}`}>
          <ProductItem />
        </div>
        <div className={`col-md-${itemClass ? itemClass : 4}`}>
          <ProductItem />
        </div>
        <div className={`col-md-${itemClass ? itemClass : 4}`}>
          <ProductItem />
        </div>
        <div className={`col-md-${itemClass ? itemClass : 4}`}>
          <ProductItem />
        </div>
      </div>
    );
  }
};

export default Products;
