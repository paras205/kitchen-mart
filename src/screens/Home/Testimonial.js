import React from "react";

import Title from "../../components/Title";
import TestimonialItem from "../../components/Testimonial";

const Testimonial = () => {
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

export default Testimonial;
