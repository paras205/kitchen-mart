import React from "react";

import Title from "../Title";
import TestimonialItem from "./Testimonial";

const index = () => {
  return (
    <section className="section testimonial-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-8">
            <Title
              title="our testimonials"
              className="text-center"
              bgTitle="our testimonials"
            />
            <TestimonialItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
