import React from "react";

import Banner from "./Banner";
import HomeAbout from "./About";
import FeaturedProducts from "./Featured";
import Testimonials from "../../components/testimonials";
import NewProducts from "./NewProducts";
import Clients from "../../components/clients";

const Home = () => {
  return (
    <>
      <Banner />
      <HomeAbout />
      <FeaturedProducts />
      <NewProducts />
      <Testimonials />
      <Clients />
    </>
  );
};

export default Home;
