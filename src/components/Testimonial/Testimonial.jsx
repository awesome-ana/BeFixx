import React from "react";
import pay from "../../assets/testimonial_icons/pay.png";
import touch from "../../assets/testimonial_icons/touch.png";
import vderify from "../../assets/testimonial_icons/vderify.png";
import Slider from "react-slick";
import TesCarousel from "./TesCarousel";
import "./testimonial.css";

const Testimonial = () => {
  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <div className="gpt3__testimonials" id="testimonials">
        <div className="dashboard-title section__padding">
          <h1 style={{ color: "white" }}>What our customers say</h1>
        </div>

        <div className="container">
          <Slider {...settings}>
            <div>
              <TesCarousel
                title="Lorem Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an unknown printer took a 
                galley of type and scrambled it to make a type specimen book."
                name="CEO name"
                company="Company name"
              />
            </div>
            <div>
              <TesCarousel
                title="Lorem Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an unknown printer took a 
                galley of type and scrambled it to make a type specimen book."
                name="Founder name"
                company="Company name"
              />
            </div>
            <div>
              <TesCarousel
                title="Lorem Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an unknown printer took a 
                galley of type and scrambled it to make a type specimen book."
                name="Owner name"
                company="Company name"
              />
            </div>
            <div>
              <TesCarousel
                title="Lorem Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an unknown printer took a 
                galley of type and scrambled it to make a type specimen book."
                name="CTO name"
                company="Company name"
              />
            </div>
          </Slider>
        </div>
      </div>
      {/* -----------------------------test-icons---------------------------------------------------------- */}

      <div className="tes_icons section__padding">
        <div className="tes_group">
          <div className="tes_icons_img">
            <img width="40px" src={vderify} alt="" />
          </div>
          <div className="tes_icons_text">
            <p>Verified Professional</p>
          </div>
        </div>

        <div className="tes_group">
          <div className="tes_icons_img">
            <img width="40px" src={touch} alt="" />
          </div>
          <div className="tes_icons_text">
            <p>Always In Touch</p>
          </div>
        </div>

        <div className="tes_group">
          <div className="tes_icons_img">
            <img width="40px" src={pay} alt="" />
          </div>
          <div className="tes_icons_text">
            <p>Pay After Work</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
