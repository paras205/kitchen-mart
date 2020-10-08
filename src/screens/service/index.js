import React from "react";

import Breadcrumb from "../../components/Breadcrumb";
import Testimonials from "../../components/testimonials";
import Client from "../../components/clients";
import Info from "./Info";

const ServicePage = () => {
  return (
    <div className="innerpage-content">
      <Breadcrumb title="Our services" />
      <Info />
      <Testimonials />
      <Client />
    </div>
  );
};

export default ServicePage;
