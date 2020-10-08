import React from "react";

const Input = ({ label, type, name, value, placeholder, onChange }) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input
        className="form-control"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
