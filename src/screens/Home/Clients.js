import React from "react";

import Title from "../../components/Title";
import ClientItems from "../../components/Clients";

const Clients = () => {
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

export default Clients;
