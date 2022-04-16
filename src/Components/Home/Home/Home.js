import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useService from "../../../Hooks/useService";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Services from "../Services/Services";

const Home = () => {
  const [services, setServices] = useService();
  const navigate = useNavigate();
  return (
    <div>
      <Banner />
      {services.slice(0, 3).map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
      <button onClick={() => navigate("/services")}>Show More Services</button>
    </div>
  );
};

export default Home;
