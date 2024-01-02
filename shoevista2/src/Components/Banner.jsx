import {Carousel} from "react-bootstrap";
import pic1 from "./Assets/pic1.jpg";
import pic2 from "./Assets/pic2.jpg";
import pic3 from "./Assets/pic3.jpg";
import "./Banner.css";
import React from "react";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src={pic1}
          className="d-block w-100 img-fluid"
          style={{ objectFit: "cover", maxHeight: "87vh" }}
          alt="ExampleImage"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pic2}
          className="d-block w-100 img-fluid"
          style={{ objectFit: "cover", maxHeight: "85vh" }}
          alt="ExampleImage"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pic3}
          className="d-block w-100 img-fluid"
          style={{ objectFit: "cover", maxHeight: "85vh" }}
          alt="ExampleImage"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    



    
  );
}

export default Banner;