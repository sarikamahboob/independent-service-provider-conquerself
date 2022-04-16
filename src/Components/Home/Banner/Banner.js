import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import banner1 from "../../../Images/banner1.png";
import banner2 from "../../../Images/banner2.png";
import banner3 from "../../../Images/banner3.png";
import banner4 from "../../../Images/banner4.png";
import "./Banner.css";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="banner">
      <Carousel activeIndex={index} onSelect={handleSelect} fade>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>"Be smart, help yourself now.</h2>
            <p>– Mahatma Gandhi</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption>
            <h2>"Mental illness is no myth."</h2>
            <p>– Nelson Mandela</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
          <Carousel.Caption>
            <h2>"Life is too short for long term grudges."</h2>
            <p>- Elon Musk</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner4} alt="First slide" />
          <Carousel.Caption>
            <h2>
              "Life is an opportunity, benefit from it. Life is beauty, admire
              it. Life is a dream, realize it."
            </h2>
            <p>- Mother Teresa</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
