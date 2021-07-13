import React, { useState } from "react";
import useOrderMutation from "../components/query";

import "./CarPage.scss";

function CarPage({ chosen }) {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const submitCustomerEmail = (e) => {
    setCustomerEmail(e.target.value);
  };

  const submitCustomerName = (e) => {
    setCustomerName(e.target.value);
  };

  const useSubmitOrder = (e) => {
    e.preventDefault();
    useOrderMutation({ customerName, customerEmail, vehicleId: chosen.id });
  };

  return (
    <div className="container">
      <div className="img__row">
        <img src={chosen.image.url} alt={chosen.image.fileName} />
        <form className="img__side__form" onSubmit={useSubmitOrder}>
          <input
            type="text"
            placeholder="Name"
            value={customerName}
            onChange={submitCustomerName}
          />
          <input
            type="email"
            placeholder="Email"
            value={customerEmail}
            onChange={submitCustomerEmail}
          />

          <button type="submit">Order</button>
        </form>
      </div>
      <div className="description__row">
        <h1>{chosen.name}</h1>
        <h3>Km. {chosen.mileage}</h3>
        <p>{chosen.description}</p>
      </div>
    </div>
  );
}

export default CarPage;
