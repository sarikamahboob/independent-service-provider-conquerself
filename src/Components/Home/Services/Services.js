import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ServiceContext } from "../../../App";

import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useContext(ServiceContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("servicesData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h1>Services</h1>
      {services.map((service) => (
        <Service key={service._id} service={service}></Service>
      ))}
    </div>
  );
};

export default Services;