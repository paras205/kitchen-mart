import React from "react";

const Title = ({ className, title, bgTitle }) => {
  return (
    <div className={`${className} section-title`}>
      {bgTitle && <span>{bgTitle}</span>}
      <h3 className="text-uppercase">{title}</h3>
    </div>
  );
};

export default Title;
