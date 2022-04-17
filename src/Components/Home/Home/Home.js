import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ServiceContext } from "../../../App";

import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Services from "../Services/Services";

const Home = () => {
  const [services, setServices] = useContext(ServiceContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("servicesData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Banner />
      {services.slice(0, 3).map((service) => (
        <Service key={service._id} service={service}></Service>
      ))}
      <button onClick={() => navigate("/services")}>Show More Services</button>
    </div>
  );
};

export default Home;
