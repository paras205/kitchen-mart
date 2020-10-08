import React from "react";

import Breadcrumb from "../../components/Breadcrumb";
import Testimonials from "../../components/testimonials";
import Client from "../../components/clients";
import Info from "./Info";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb title="About us" />
      <Info />
      <Testimonials />
      <Client />
    </>
  );
};

export default AboutPage;
