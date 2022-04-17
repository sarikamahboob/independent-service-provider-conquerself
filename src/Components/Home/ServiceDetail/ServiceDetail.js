import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ServiceContext } from "../../../App";

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
      Detail
      <h1>{service?.name}</h1>
      <p>${service?.price}</p>
      <p>{service?.description}</p>
    </div>
  );
};

export default ServiceDetail;
