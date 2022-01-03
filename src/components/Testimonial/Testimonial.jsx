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
                title="I want you to know how much I appreciate the excellent service you provided.
                I won't hesitate to bring our future clients to your service to grow
                their business using your latest technology and great designs."
                name="Suresh Raj"
                company="Flixjar Founder"
              />
            </div>
            <div>
              <TesCarousel
                title="This company provides the best service in best price. We recently have built our online
                gaming mobile app from them and it's awesome. They even provide hosting and server services.
                You can fully rely on them and be relaxed"
                name="George Walter"
                company="SmartDent"
              />
            </div>
            <div>
              <TesCarousel
                title="Your company's hard work has not gone unnoticed. 
                I and the entire senior management would like to congratulate you on doing a great job.
                Keep working like this, and nothing will be able to stop you!"
                name="Anurag Bose"
                company="BeFixx"
              />
            </div>
            <div>
              <TesCarousel
                title="Our team members can always depend on your quality work and effort. Excellent work!
                You certainly are an industry expert in our niche.
                Your out-of-the-box ideas are always welcomed at the company meetings. Keep inspiring others."
                name="Jonathan Walls"
                company="Readmyecg"
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
