import React from "react";
import "./home.css";

import appliance_one from "../../assets/appliance_banner1.svg";
import appliance_two from '../../assets/appliance_banner2.svg';
import homerepair_one from '../../assets/homerepair_banner1.svg';
import homerepair_two from '../../assets/homerepair_banner2.svg';
import foodservice from '../../assets/foodservice_banner1.svg';
import foodservice_two from '../../assets/foodservice_banner2.svg';
import shop_one from '../../assets/shopbanner_one.svg';
import shop_two from '../../assets/shopbanner_two.svg';
import health_one from '../../assets/health_one.svg';
import health_two from '../../assets/health_two.svg';
import academy1 from '../../assets/academy_one.svg';
import academy2 from '../../assets/academy_two.svg';
import event1 from '../../assets/event_one.svg';
import event2 from '../../assets/event_two.svg';

import Form from "react-bootstrap/Form";
import { TiLocation } from "react-icons/ti";
import { Link } from "react-router-dom";
import Carousel_Container from "./Carousel_Container";
import Navbar from "../Navbar/Navbar";
import IconCard from "../IconCards/IconCard";
import Banners from "../Banners/Banners";
import CountUp from "react-countup";
import Cta from "../cta/Cta";
import Footer from '../footer/Footer';

import TV from "../../assets/category_icons/TV.svg";
import StaticB from "../StaticCat_banners/StaticB";
import AppDownload from "../AppDownload/AppDownload";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* //------------------------------background with two buttons------------------------------------------//  */}
      <div className="befixx_home">
        <div className="background_info">
          <div className="title">
            <h2>Find any services you need</h2>
            <p>We provide world's best services</p>
          </div>
          <div className="title_buttons">
            <button>Membership plan</button>
            <button>Contact us</button>
          </div>
        </div>
        {/* //------------------------------location select and input search------------------------------------------//  */}
        <div className="all_inputs  input__padding">
          <div className="location_option">
            <div className="icon">
              <TiLocation
                style={{ color: "black", width: "2rem", height: "2rem" }}
              />
            </div>
            <div className="form_select">
              <Form.Select aria-label="Default select example">
                <option>Select your location</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </div>
          <div className="search_field">
            <div className="search">
              <input type="text" placeholder="search a service" />
            </div>
            <div className="search_button">
              <button>Search</button>
            </div>
          </div>
        </div>

        {/* //---------------------countup--------------------------------------------------------------------// */}

        <div className="countup section__padding">
          <div class="group">
            <div class="number">
              <CountUp
                style={{ fontSize: "25px", fontWeight: "700" }}
                end={12360}
                suffix="+"
                duration={2}
              />
            </div>
            <div class="txt" style={{ fontSize: "15px", fontWeight: "600" }}>
              Our Happy Users
            </div>
          </div>
          <div class="group">
            <div class="number">
              <CountUp
                style={{ fontSize: "25px", fontWeight: "700" }}
                end={1055}
                suffix="+"
                duration={2}
              />
            </div>
            <div class="txt" style={{ fontSize: "15px", fontWeight: "600" }}>
              Verified Expert
            </div>
          </div>
          <div class="group">
            <div class="number">
              <CountUp
                style={{ fontSize: "25px", fontWeight: "700" }}
                end={1009}
                suffix="+"
                duration={2}
              />
            </div>
            <div class="txt" style={{ fontSize: "15px", fontWeight: "600" }}>
              All Services
            </div>
          </div>
        </div>

        {/* //------------------------------carousel banners------------------------------------------//  */}

        <Carousel_Container />
      </div>

      {/* //--------------frequently used services icons------------------------------------------------------------------------// */}

      <div className="befixx__dashboard section__padding" id="home">
        <div className="dashboard-title">
          <h1>Frequently used services</h1>
        </div>
        <div className="dent__dashboard-wrapper">
          <IconCard img={TV} imgname="Biryani" />
          <IconCard imgname="Dance Academy" />
          <IconCard imgname="Electrician" />
          <IconCard imgname="Computer Institute" />
          <IconCard imgname="Restaurants" />
          <IconCard imgname="Kirana Shop" />
          <IconCard imgname="Accountant" />
          <IconCard imgname="Charity" />
        </div>
        <div className="category_button">
          <Link to="/home/category">View all categories</Link>
        </div>
        <Banners />
      </div>

      {/* //*-----------------------------appliances repair service with static banners---------------------------*/}

      <StaticB img={appliance_one} title="Appliances Repair" img2={appliance_two} title2="TV Repair"/>
      <div className="befixx__dashboard section__padding" id="home">
        <div className="dashboard-title">
          <h1>Appliances Repair Services</h1>
        </div>
        <div className="dent__dashboard-wrapper">
          <IconCard img={TV} imgname="Microwave" />
          <IconCard imgname="Water Purifier" />
          <IconCard imgname="Refrigerator" />
          <IconCard imgname="Washing Machine" />
          <IconCard imgname="Gas Chulha" />
          <IconCard imgname="Inverter/Battery" />
          <IconCard imgname="CCTV Camera" />
          <IconCard imgname="Sewing Machine" />
        </div>
      </div>

      {/* //*-----------------------------home repair service with static banners---------------------------*/}
      
      <StaticB img={homerepair_one} title="Home Services" img2={homerepair_two} title2="Repair Experts"/>
      <div className="befixx__dashboard section__padding" id="home">
        <div className="dashboard-title">
          <h1>Home Repair Services</h1>
        </div>
        <div className="dent__dashboard-wrapper">
          <IconCard img={TV} imgname="Microwave" />
          <IconCard imgname="Water Purifier" />
          <IconCard imgname="Refrigerator" />
          <IconCard imgname="Washing Machine" />
          <IconCard imgname="Gas Chulha" />
          <IconCard imgname="Inverter/Battery" />
          <IconCard imgname="CCTV Camera" />
          <IconCard imgname="Sewing Machine" />
        </div>
      </div>

      {/* //*-----------------------------food service with static banners---------------------------*/}
      
      <StaticB img={foodservice} title="Order Food" img2={foodservice_two} title2="Restaurant Food"/>
      <div className="befixx__dashboard section__padding" id="home">
        <div className="dashboard-title">
          <h1>Food Services</h1>
        </div>
        <div className="dent__dashboard-wrapper">
          <IconCard img={TV} imgname="Microwave" />
          <IconCard imgname="Water Purifier" />
          <IconCard imgname="Refrigerator" />
          <IconCard imgname="Washing Machine" />
        </div>
      </div>

   {/* //*-----------------------------online shop with static banners---------------------------*/}
      
            <StaticB img={shop_one} title="Jewellery Shop" img2={shop_two} title2="Book Store"/>
      <div className="befixx__dashboard section__padding" id="home">
        <div className="dashboard-title">
          <h1>Online Shop Services</h1>
        </div>
        <div className="dent__dashboard-wrapper">
          <IconCard img={TV} imgname="Microwave" />
          <IconCard imgname="Water Purifier" />
          <IconCard imgname="Refrigerator" />
          <IconCard imgname="Washing Machine" />
          <IconCard img={TV} imgname="Microwave" />
          <IconCard imgname="Water Purifier" />
          <IconCard imgname="Refrigerator" />
          <IconCard imgname="Washing Machine" />
        </div>
      </div>

      <Cta/>

    {/* //*-----------------------------health care with static banners---------------------------*/}
      
          <StaticB img={health_one} title="Pathology Lab" img2={health_two} title2="Medicine Shop"/>
      <div className="befixx__dashboard section__padding" id="home">
        <div className="dashboard-title">
          <h1>Health Care Services</h1>
        </div>
        <div className="dent__dashboard-wrapper">
          <IconCard img={TV} imgname="Microwave" />
          <IconCard imgname="Water Purifier" />
          <IconCard imgname="Refrigerator" />
          <IconCard imgname="Washing Machine" />
          <IconCard img={TV} imgname="Microwave" />
          <IconCard imgname="Water Purifier" />
          <IconCard imgname="Refrigerator" />
          <IconCard imgname="Washing Machine" />
        </div>
      </div>

    {/* //*-----------------------------academy with static banners---------------------------*/}
      
                <StaticB img={academy1} title="Gym Center" img2={academy2} title2="Silai Center"/>
      <div className="befixx__dashboard section__padding" id="home">
        <div className="dashboard-title">
          <h1>Academy Services</h1>
        </div>
        <div className="dent__dashboard-wrapper">
          <IconCard img={TV} imgname="Microwave" />
          <IconCard imgname="Water Purifier" />
          <IconCard imgname="Refrigerator" />
          <IconCard imgname="Washing Machine" />
          <IconCard img={TV} imgname="Microwave" />
          <IconCard imgname="Water Purifier" />
          <IconCard imgname="Refrigerator" />
          <IconCard imgname="Washing Machine" />
        </div>
      </div>

          {/* //*-----------------------------Other services---------------------------*/}
      
      <div className="befixx__dashboard section__padding" id="home">
        <div className="dashboard-title">
          <h1>Other Services</h1>
        </div>
        <div className="dent__dashboard-wrapper">
          <IconCard img={TV} imgname="Microwave" />
          <IconCard imgname="Water Purifier" />
          <IconCard imgname="Refrigerator" />
          <IconCard imgname="Washing Machine" />
          <IconCard img={TV} imgname="Microwave" />
          <IconCard imgname="Water Purifier" />
          <IconCard imgname="Refrigerator" />
          <IconCard imgname="Washing Machine" />
        </div>
      </div>

 {/* //*-----------------------------Essential services for events with static banners---------------------------*/}
      
          <StaticB img={event1} title="Book Marriage Hall" img2={event2} title2="DJ Booking"/>
      <div className="befixx__dashboard section__padding" id="home">
        <div className="dashboard-title">
          <h1>Essential Services For Events</h1>
        </div>
        <div className="dent__dashboard-wrapper">
          <IconCard img={TV} imgname="Microwave" />
          <IconCard imgname="Water Purifier" />
          <IconCard imgname="Refrigerator" />
          <IconCard imgname="Washing Machine" />
          <IconCard img={TV} imgname="Microwave" />
          <IconCard imgname="Water Purifier" />
          <IconCard imgname="Refrigerator" />
          <IconCard imgname="Washing Machine" />
        </div>
      </div>

 {/* //*-----------------------------Vehicles services---------------------------*/}
    
      <div className="befixx__dashboard section__padding" id="home">
        <div className="dashboard-title">
          <h1>Vehicles Services</h1>
          <p>For Rent</p>
        </div>
        <div className="dent__dashboard-wrapper">
          <IconCard img={TV} imgname="Microwave" />
          <IconCard imgname="Water Purifier" />
          <IconCard imgname="Refrigerator" />
          <IconCard imgname="Washing Machine" />
        </div>
      </div>

{/* //*-----------------------------Job Vacancy------------------------------------------*/}
    
       <div className="befixx__dashboard section__padding" id="home">
        <div className="dashboard-title">
          <h1>Job Vacancy</h1>
          <p>Urgent Need</p>
        </div>
        <div className="dent__dashboard-wrapper">
          <IconCard img={TV} imgname="Microwave" />
          <IconCard imgname="Water Purifier" />
        </div>
      </div>

 {/* //*-----------------------------Download App------------------------------------------*/}    
     <Testimonial/> 
     <AppDownload/>
     <Footer/>
    </>
  );
};

export default Home;
