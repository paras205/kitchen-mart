import React from "react";

import Slider from "./Slider";
import Info from "./Info";

const Detail = () => {
  return (
    <section className="section product_detail_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Slider />
          </div>
          <div className="col-md-6">
            <Info />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
