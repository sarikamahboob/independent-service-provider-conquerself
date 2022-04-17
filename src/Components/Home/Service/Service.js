import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  // const [services, setServices] = useContext(ServiceContext);
  const { _id, name, price, description, img } = service;
  const navigate = useNavigate();

  // const navigateServiceDetail = (_id) => {
  //   navigate(`/service/${_id}`);
  // };

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <p>${price}</p>
        <p>
          {description.length < 600
            ? description.length
            : description.slice(0, 400)}
          <span onClick={() => navigate(`/service/${_id}`)}>...Read More</span>
        </p>
        <button>Book This Service</button>
      </div>
    </div>
  );
};

export default Service;
