import React from "react";

const Breadcrumb = (props) => {
  return (
    <div
      className="innerpage_banner bg-cover overlay"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <div className="container">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default Breadcrumb;
