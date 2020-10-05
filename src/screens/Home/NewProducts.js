import React from "react";

import Title from "../../components/Title";
import Products from "../../components/Products";

const NewProducts = () => {
  return (
    <section className="section bg-gray product-section new_arrival_section">
      <div className="container">
        <Title
          title="New arrival Products"
          className="text-center"
          bgTitle="New Arrival"
        />
        <Products className="box-shadow" />
      </div>
    </section>
  );
};

export default NewProducts;
