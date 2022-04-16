import React from "react";
import useService from "../../../Hooks/useService";

const Service = ({ service }) => {
  const [services, setServices] = useService();
  const { name, price, description, img } = service;
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <p>${price}</p>
        <p>{description}</p>
        <button>Book This Service</button>
      </div>
    </div>
  );
};

export default Service;
