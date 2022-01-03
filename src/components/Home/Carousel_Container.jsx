import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carousel_one from "../../assets/carousel1.svg";
import carousel_two from "../../assets/carousel2.svg";
import carousel_three from "../../assets/carousel3.svg";
import carousel_four from "../../assets/carousel4.svg";
import carousel_five from "../../assets/carousel5.svg";
import carousel_six from "../../assets/carousel6.svg";

const Carousel_Container = () => {
  return (
    <>
      <Carousel variant="dark" interval={2000}>
        <Carousel.Item >
          <img className="d-block w-100" src={carousel_one} alt="First slide" />
          <Carousel.Caption>
            <h1 style={{ color: "white", fontWeight: "700" }}>
              Pathological Tests
            </h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item >
          <img
            className="d-block w-100"
            src={carousel_two}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 style={{ color: "white", fontWeight: "700" }}>
              Great Offers On Pizza
            </h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item >
          <img
            className="d-block w-100"
            src={carousel_three}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 style={{ color: "white", fontWeight: "700" }}>
              Plumbing Services
            </h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item >
          <img
            className="d-block w-100"
            src={carousel_four}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 style={{ color: "white", fontWeight: "700" }}>
              Event Hall Bookings
            </h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item >
          <img
            className="d-block w-100"
            src={carousel_five}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 style={{ color: "white", fontWeight: "700" }}>
              Interior Decor
            </h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item >
          <img className="d-block w-100" src={carousel_six} alt="Third slide" />
          <Carousel.Caption>
            <h1 style={{ color: "white", fontWeight: "700" }}>
              Kirana Store Online
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousel_Container;
