import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CheckOut.css";

const CheckOut = () => {
  const handleBooking = () => {
    toast("Your Desire Service is Booked. Thank Your for the Booking");
  };
  return (
    <div className="form-container">
      <h1 className="form-title">Service Booking Form </h1>
      <form className="form" onSubmit={handleBooking}>
        <input type="text" name="name" id="" placeholder="Enter Your Name" />
        <input type="email" name="email" id="" placeholder="Enter Your Email" />
        <input
          type="text"
          name="address"
          id=""
          placeholder="Enter Your Address"
        />
        <input
          type="number"
          name="phonenumber"
          id=""
          placeholder="Enter Your Phone Number"
        />
        <button>Book The Service</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CheckOut;
