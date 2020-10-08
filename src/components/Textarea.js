import React from "react";

const Textarea = ({ label, name, value, placeholder, onChange }) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <textarea
        className="form-control"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Textarea;
