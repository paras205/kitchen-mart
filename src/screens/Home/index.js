import React from "react";

import Banner from "./Banner";
import HomeAbout from "./About";
import FeaturedProducts from "./Featured";
import Testimonials from "./Testimonial";
import NewProducts from "./NewProducts";
import Clients from "./Clients";

const Home = () => {
  return (
    <>
      <Banner />
      <HomeAbout />
      <FeaturedProducts />
      <Testimonials />
      <NewProducts />
      <Clients />
    </>
  );
};

export default Home;
