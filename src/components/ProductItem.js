import React from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";

import ProductOne from "../assets/images/product_one.jpg";
import ProductTwo from "../assets/images/product_two.jpg";
import ProductThree from "../assets/images/product_three.jpg";
import ProductFour from "../assets/images/product_four.jpg";

const ProductItem = (props) => {
  return (
    <>
      <div className="col-md-3">
        <div className={`${props.className} product-item`}>
          <Link to="/">
            <figure>
              <img src={ProductOne} alt="" />
            </figure>
            <div className="product-content">
              <h5>A kitchen equipment</h5>
              <Button label="View Detail" className="view_btn" type="link" />
            </div>
          </Link>
        </div>
      </div>
      <div className="col-md-3">
        <div className={`${props.className} product-item`}>
          <Link to="/">
            <figure>
              <img src={ProductTwo} alt="" />
            </figure>
            <div className="product-content">
              <h5>A kitchen equipment</h5>
              <Button label="View Detail" className="view_btn" type="link" />
            </div>
          </Link>
        </div>
      </div>
      <div className="col-md-3">
        <div className={`${props.className} product-item`}>
          <Link to="/">
            <figure>
              <img src={ProductThree} alt="" />
            </figure>
            <div className="product-content">
              <h5>A kitchen equipment</h5>
              <Button label="View Detail" className="view_btn" type="link" />
            </div>
          </Link>
        </div>
      </div>
      <div className="col-md-3">
        <div className={`${props.className} product-item`}>
          <Link to="/">
            <figure>
              <img src={ProductFour} alt="" />
            </figure>
            <div className="product-content">
              <h5>A kitchen equipment</h5>
              <Button label="View Detail" className="view_btn" type="link" />
            </div>
          </Link>
        </div>
      </div>
      <div className="col-md-3">
        <div className={`${props.className} product-item`}>
          <Link to="/">
            <figure>
              <img src={ProductOne} alt="" />
            </figure>
            <div className="product-content">
              <h5>A kitchen equipment</h5>
              <Button label="View Detail" className="view_btn" type="link" />
            </div>
          </Link>
        </div>
      </div>
      <div className="col-md-3">
        <div className={`${props.className} product-item`}>
          <Link to="/">
            <figure>
              <img src={ProductTwo} alt="" />
            </figure>
            <div className="product-content">
              <h5>A kitchen equipment</h5>
              <Button label="View Detail" className="view_btn" type="link" />
            </div>
          </Link>
        </div>
      </div>
      <div className="col-md-3">
        <div className={`${props.className} product-item`}>
          <Link to="/">
            <figure>
              <img src={ProductThree} alt="" />
            </figure>
            <div className="product-content">
              <h5>A kitchen equipment</h5>
              <Button label="View Detail" className="view_btn" type="link" />
            </div>
          </Link>
        </div>
      </div>
      <div className="col-md-3">
        <div className={`${props.className} product-item`}>
          <Link to="/">
            <figure>
              <img src={ProductFour} alt="" />
            </figure>
            <div className="product-content">
              <h5>A kitchen equipment</h5>
              <Button label="View Detail" className="view_btn" type="link" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
