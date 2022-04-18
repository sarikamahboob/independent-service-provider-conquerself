import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ServiceContext } from "../../../App";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { id } = useParams();

  const [services, setServices] = useContext(ServiceContext);
  console.log(services.name);
  useEffect(() => {
    fetch("https://sarikamahboob.github.io/jsonapi/serviceData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [id]);

  const service = services.find((service) => service._id == id);

  return (
    <div className="container">
      <div className="service-detail">
        <div className="service-detail-image">
          <img src={service?.image} alt="" />
        </div>
        <h1 className="title">{service?.name}</h1>
        <p className="about-me">{service?.description}</p>
        <p className="service-detail-price">${service?.price}</p>
      </div>
    </div>
  );
};

export default ServiceDetail;
