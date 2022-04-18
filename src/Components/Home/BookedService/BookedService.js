import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ServiceContext } from "../../../App";
import "./BookedService.css";

const BookedService = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [services, setServices] = useContext(ServiceContext);
  console.log(services.name);
  useEffect(() => {
    fetch("https://sarikamahboob.github.io/jsonapi/serviceData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [id]);

  const service = services.find((service) => service._id == id);
  return (
    <div className="booked-service">
      <p className="title">Booked Service Name</p>
      <h1 className="service-name">{service?.name}</h1>
      <button className="checkout-button" onClick={() => navigate(`/checkout`)}>
        Proceed to Check Out
      </button>
    </div>
  );
};

export default BookedService;
