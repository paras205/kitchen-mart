import React from "react";

import Breadcrumb from "../../components/Breadcrumb";
import Testimonials from "../../components/testimonials";
import Client from "../../components/clients";
import Info from "./Info";

import aboutBgImg from "../../assets/images/about_bg.jpg";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb title="About us" backgroundImage={aboutBgImg} />
      <Info />
      <Testimonials />
      <Client />
    </>
  );
};

export default AboutPage;
