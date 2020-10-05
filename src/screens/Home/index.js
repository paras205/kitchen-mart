import React from "react";

import Banner from "../../components/Banner";
import HomeAbout from "./About";
import FeaturedProducts from "./Featured";
import NewProducts from "./NewProducts";
import Clients from "./Clients";

const Home = () => {
  return (
    <>
      <Banner />
      <HomeAbout />
      <FeaturedProducts />
      <NewProducts />
      <Clients />
    </>
  );
};

export default Home;
