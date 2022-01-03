import React from "react";
import Carousel from "react-bootstrap/Carousel";


const StaticB = (props) => {
  return (
    <>
      <Carousel variant="dark" interval={2000} controls={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={props.img} alt="Second slide" />

          <Carousel.Caption>
            <h3 style={{color:"white", fontWeight:"600"}}>{props.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={props.img2} alt="Second slide" />

          <Carousel.Caption>
            <h3 style={{color:"white", fontWeight:"600"}}>{props.title2}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default StaticB;
