import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="container footer-section">
        <div className="footer-div">
          <h1 className="footer-title">About Me</h1>
          <p className="about-me-footer">
            Assalamualaikum. My name is Sarika Mahboob. My born and brought up
            is in Dhaka. I completed my school and college as a Science student
            in Greenfield College which is situated in Mirpur. and I completed
            my graduation in CSE from Green University of Bangladesh{" "}
            <span onClick={() => navigate(`/about`)}>...Read More</span>
          </p>
        </div>
        <div className="footer-div special-div">
          <h1 className="footer-title">Quick Links</h1>
          <div className="footer-links">
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-div special-div2">
          <h1 className="footer-title">All Services</h1>
          <div className="footer-links">
            <a href="#" onClick={() => navigate(`/services`)}>
              Couples Therapy
            </a>
            <a href="#" onClick={() => navigate(`/services`)}>
              Depression Treatment
            </a>
            <a href="#" onClick={() => navigate(`/services`)}>
              Children Therapy
            </a>
            <a href="#" onClick={() => navigate(`/services`)}>
              Individual Treatment
            </a>
            <a href="#" onClick={() => navigate(`/services`)}>
              Anxiety Treatment
            </a>
            <a href="#" onClick={() => navigate(`/services`)}>
              Post-Divorce Recovery
            </a>
          </div>
        </div>
        <div className="footer-div">
          <h1 className="footer-title">Contact Us</h1>
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
      </div>
    </div>
  );
};

export default Footer;
