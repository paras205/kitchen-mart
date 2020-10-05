import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className, type, action, label, linkTo, onClick }) => {
  const buttons = () => {
    let template = "";
    switch (type) {
      case "link":
        template = (
          <Link to={linkTo} className={`${className} button`}>
            {label}
          </Link>
        );
        break;
      case "button":
        template = (
          <button
            className={`${className} button`}
            type={action}
            onClick={onClick}
          >
            {label}
          </button>
        );
        break;
      default:
        template = "";
    }
    return template;
  };
  return <div className="btn-wrapper">{buttons()}</div>;
};

export default Button;
