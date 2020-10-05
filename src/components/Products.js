import React from "react";

import ProductItem from "./ProductItem";

const Products = ({ className }) => {
  return (
    <div className="row">
      <ProductItem className={className} />
    </div>
  );
};

export default Products;
