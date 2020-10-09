import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Title from "../../components/Title";
import Products from "../../components/Products";

const AllProducts = () => {
  return (
    <section className="section product-section bg-gray">
      <div className="container">
        <Title
          title="Featured Products"
          className="text-center"
          bgTitle="Featured Product"
        />
        <div className="product_wrapper featured_tabs_product">
          <Tabs>
            <TabList>
              <Tab>Cooking Equipment</Tab>
              <Tab>Kitchen Equipment</Tab>
              <Tab>Cooking Equipment</Tab>
              <Tab>Kitchen Equipment</Tab>
            </TabList>
            <TabPanel>
              <Products slider />
            </TabPanel>
            <TabPanel>Tabs 2</TabPanel>
            <TabPanel>
              <Products slider />
            </TabPanel>
            <TabPanel>Tabs 2</TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
