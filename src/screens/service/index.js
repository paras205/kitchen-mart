import React from "react";

import Breadcrumb from "../../components/Breadcrumb";
import Testimonials from "../../components/testimonials";
import Client from "../../components/clients";
import Info from "./Info";
import serviceBgImg from "../../assets/images/services_bg.jpg";

const ServicePage = () => {
  return (
    <div className="innerpage-content">
      <Breadcrumb title="Our services" backgroundImage={serviceBgImg} />
      <Info />
      <Testimonials />
      <Client />
    </div>
  );
};

export default ServicePage;
