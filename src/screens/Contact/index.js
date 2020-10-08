import React, { useEffect } from "react";

import Breadcrumb from "../../components/Breadcrumb";
import Detail from "./Detail";
import Form from "./Form";
import Map from "../../components/Map";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="innerpage_wrapper">
      <Breadcrumb title="Contact us" />
      <section className="section contact_detail_wrapper bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <Detail />
            </div>
            <div className="col-md-7">
              <Form />
            </div>
          </div>
        </div>
      </section>
      <div className="map_wrapper">
        <Map />
      </div>
    </div>
  );
};

export default ContactPage;
