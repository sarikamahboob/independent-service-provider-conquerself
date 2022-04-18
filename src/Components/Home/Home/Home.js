import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ServiceContext } from "../../../App";
import FAQ from "../../FAQ/FAQ";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Services from "../Services/Services";
import "./Home.css";

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
      <div className="home-services-section">
        <h1 className="title">Provided Services</h1>
        <div className="services">
          {services.slice(0, 3).map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
        <div className="show-more-services">
          <button className="service-btn" onClick={() => navigate("/services")}>
            Show More Services
          </button>
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default Home;
