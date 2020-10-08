import React from "react";

import Title from "../../components/Title";
import Products from "../../components/Products";

const RelatedProducts = () => {
  return (
    <section className="section related_products_section">
      <div className="container">
        <Title
          title="Related Products"
          className="text-center"
          bgTitle="Related Products"
        />
        <Products slider />
      </div>
    </section>
  );
};

export default RelatedProducts;
