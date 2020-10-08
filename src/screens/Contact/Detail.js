import React from "react";
import { BiMap, BiPhoneCall, BiEnvelopeOpen } from "react-icons/bi";

const Detail = () => {
  return (
    <div className="contact_info">
      <ul>
        <li className="box-shadow">
          <BiMap />
          <h3>Address</h3>
          <p>Kathmandu Nepal</p>
        </li>
        <li className="box-shadow">
          <BiPhoneCall />
          <h3>Phone</h3>
          <p>01 234 5678</p>
        </li>
        <li className="box-shadow">
          <BiEnvelopeOpen />
          <h3>Email</h3>
          <p>abc@gmail.com</p>
        </li>
      </ul>
    </div>
  );
};

export default Detail;
