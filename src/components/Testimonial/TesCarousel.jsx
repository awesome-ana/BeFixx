import React from "react";
import "./testimonial.css";
import { FaQuoteLeft } from "react-icons/fa";

const TesCarousel = (props) => {
  const style = { color: "white", fontSize: "2rem", marginBottom:"0.5rem" };

  return (
    <>
      <div className="gpt3__carousel">
        <div className="compliment">
          <FaQuoteLeft style={style} />
          <p>{props.title}</p>
        </div>
        <div className="person__name">
          <h2>{props.name}</h2>
          <h3>{props.company}</h3>
        </div>
      </div>
    </>
  );
};

export default TesCarousel;