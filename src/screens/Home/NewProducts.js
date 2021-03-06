import React from "react";

import Title from "../../components/Title";
import Products from "../../components/Products";
import Button from "../../components/Button";

const NewProducts = () => {
  return (
    <section className="section product-section new_arrival_section">
      <div className="container">
        <Title
          title="New arrival Products"
          className="text-center"
          bgTitle="New Arrival"
        />
        <Products className="box-shadow" itemClass="3" />
        <Button type="link" label="View All" className="view_all" linkTo="/" />
      </div>
    </section>
  );
};

export default NewProducts;
