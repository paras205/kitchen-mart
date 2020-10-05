import React from "react";

const Title = ({ className, title }) => {
  return (
    <div className={`${className} section-title`}>
      <h3 className="text-uppercase">{title}</h3>
    </div>
  );
};

export default Title;
