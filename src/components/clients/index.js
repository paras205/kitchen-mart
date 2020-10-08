import React from "react";

import Title from "../Title";
import ClientItems from "./Clients";

const index = () => {
  return (
    <section className="section client-section">
      <div className="container">
        <Title
          title="We work with"
          className="text-center"
          bgTitle="We work with"
        />
        <ClientItems />
      </div>
    </section>
  );
};

export default index;
