import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useService from "../../../Hooks/useService";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useService();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Services</h1>
      {services.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
    </div>
  );
};

export default Services;
