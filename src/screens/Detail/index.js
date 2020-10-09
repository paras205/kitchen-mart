import React, { useEffect } from "react";

import Breadcrumb from "../../components/Breadcrumb";
import Detail from "./Detail";
import Specification from "./Specification";
import RelatedProducts from "./RelatedProducts";
import detail_bg from "../../assets/images/detail_bg.jpg";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="innerpage-wrapper">
      <Breadcrumb title="Product Detail" backgroundImage={detail_bg} />
      <Detail />
      <Specification />
      <RelatedProducts />
    </div>
  );
};

export default ProductDetail;
