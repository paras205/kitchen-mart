import React from "react";

import Breadcrumb from "../../components/Breadcrumb";
import Products from "./Products";
import Sidebar from "./Sidebar";
import productBgImg from "../../assets/images/product_bg.jpg";

const ProductPage = () => {
  return (
    <div className="innerpage-content">
      <Breadcrumb title="All products" backgroundImage={productBgImg} />
      <section className="section product_page_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Products />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
