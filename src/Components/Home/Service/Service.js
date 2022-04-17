import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  // const [services, setServices] = useContext(ServiceContext);
  const { _id, name, price, description, image } = service;
  const navigate = useNavigate();

  return (
    <div>
      <div className="card-container">
        <div className="image">
          <img src={image} alt="" fluid />
        </div>
        <h1>{name}</h1>

        <p>
          {description.length < 600
            ? description.length
            : description.slice(0, 320)}
          <span onClick={() => navigate(`/service/${_id}`)}>...Read More</span>
        </p>
        <h5>Price: ${price}</h5>
        <button
          className="service-btn"
          onClick={() => navigate(`/bookedservice/${_id}`)}
        >
          Book This Service
        </button>
      </div>
    </div>
  );
};

export default Service;
