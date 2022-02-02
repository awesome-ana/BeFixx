import React from "react";
import {IoNotificationsSharp} from 'react-icons/io5';
import logo from "../../assets/BeFixx_Logo.svg";
import { NavLink } from "react-router-dom";
import "./navbar.css";


const Navbar = () => {
  return (
    <div className="befixx__navbar section__padding" >
    <div className="befixx__navbar-links">
      <div className="befixx__navbar-links_logo">
        <img alt={""} src={logo} />
      </div>
      <div className="befixx__navbar-links_container">
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <NavLink to="/home/favourites">Favourites</NavLink>
        </p>
        <p>
          <NavLink to="/home/profile">Sign up</NavLink>
        </p>
        <p>
          <NavLink to="/home/notification"><IoNotificationsSharp style={{width:"1.5rem", height:"1.5rem", color:"white"}}></IoNotificationsSharp></NavLink>
        </p>
        {/* <button className="notify_btn">Profile
        </button> */}
      </div>
    </div>

  </div>
  );
};

export default Navbar;
