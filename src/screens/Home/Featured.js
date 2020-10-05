import React from "react";

import Title from "../../components/Title";
import Products from "../../components/Products";

const AllProducts = () => {
  return (
    <section className="section product-section bg-gray">
      <div className="container">
        <Title title="Featured Products" className="text-center" />
        <div className="product_wrapper">
          <Products />
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
