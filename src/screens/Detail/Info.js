import React from "react";

import Button from "../../components/Button";

const Info = () => {
  return (
    <div className="product-info-wrapper">
      <h3>Dummy product</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s Lorem Ipsum has been Lorem Ipsum has been Lorem Ipsum
        has been since the 1500s Lorem Ipsum has been Lorem Ipsum has been Lorem
      </p>
      <h5>Features</h5>
      <ul>
        <li> Lorem Ipsum is simply dummy text</li>
        <li> Lorem Ipsum is simply dummy text</li>
        <li> Lorem Ipsum is simply dummy text</li>
        <li> Lorem Ipsum is simply dummy text</li>
      </ul>
      <Button
        type="button"
        label="Enquiry Now"
        className="view_all"
        linkTo="/"
      />
    </div>
  );
};

export default Info;
