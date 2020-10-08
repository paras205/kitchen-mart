import React from "react";

import Background from "../assets/images/slider02.jpg";

const Breadcrumb = (props) => {
  return (
    <div
      className="innerpage_banner bg-cover overlay"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="container">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default Breadcrumb;
