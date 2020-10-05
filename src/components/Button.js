import React from "react";

const Button = ({ className, type, label, onClick }) => {
  return (
    <button className={`${className} button`} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
