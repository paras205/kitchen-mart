import React from "react";

import Title from "../../components/Title";
import ClientItems from "../../components/Clients";

const Clients = () => {
  return (
    <section className="section client-section bg-gray">
      <div className="container">
        <Title title="We work with" className="text-center" />
        <ClientItems />
      </div>
    </section>
  );
};

export default Clients;
