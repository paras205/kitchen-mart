import React from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import ProductOne from "../assets/images/product_one.jpg";

const ProductItem = () => {
  return (
    <div className="product-item">
      <Link to="/product/1">
        <figure>
          <img src={ProductOne} alt="" />
        </figure>
        <div className="product-content">
          <h5>A kitchen equipment</h5>
        </div>
      </Link>
      <Button
        linkTo="/product/1"
        label="View Detail"
        className="view_btn"
        type="link"
      />
    </div>
  );
};

export default ProductItem;
