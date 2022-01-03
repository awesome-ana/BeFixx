import React from "react";
import Logo from "../../assets/BeFixx_Logo.svg";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding" id="footer">
    <div className="gpt3__footer-links_logo">
      <img src={Logo} alt="gpt3_logo" />
      <p>@{new Date().getFullYear()} BeFixx. All rights reserved.</p>
    </div>
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <a href="#home">
          <p>Home</p>
        </a>
        <a href="#about">
          <p>About Us</p>
        </a>
        <a href="#home">
          <p>Terms & Conditions</p>
        </a>
        <a href="#about">
          <p>Privacy Policy</p>
        </a>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Services</h4>
        <a href="#home">
          <p>Appliances Repair</p>
        </a>
        <a href="#about">
          <p>Home Repair</p>
        </a>
        <a href="#home">
          <p>Food Services</p>
        </a>
        <a href="#about">
          <p>Online Shop</p>
        </a>
        
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Services</h4>
        <a href="#home">
          <p>Events Services</p>
        </a>
        <a href="#about">
          <p>Vehicle Services</p>
        </a>
        <a href="#home">
          <p>Health Care</p>
        </a>
        <a href="#about">
          <p>Job Search</p>
        </a>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p><input type="text" placeholder="Enter your email"/></p>
        <p><button>Get in touch</button></p>
       
      </div>
    </div>
  </div>
);

export default Footer;
