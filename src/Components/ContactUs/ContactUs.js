import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./ContactUs.css";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="container">
      <div className="contact-section" data-aos="fade-left">
        <div className="contact">
          <div className="contact-div">
            <span className="icon">
              <MdEmail />
            </span>
            <span>sarika@gmail.com</span>
          </div>
          <div className="contact-div">
            <span className="icon">
              <BsFillPhoneFill />
            </span>
            <span>01700000000</span>
          </div>
          <div className="contact-div">
            <span className="icon">
              <FaMapMarkerAlt />
            </span>
            <span>Pallabi, Mirpur, Dhaka 1216</span>
          </div>
        </div>
        <div data-aos="fade-right">
          <MapContainer center={[51.505, -0.09]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
