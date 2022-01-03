import React from 'react';
import './cta.css';
import {FaDownload} from 'react-icons/fa';
import {DiAndroid} from 'react-icons/di';
import {BsApple} from 'react-icons/bs';
import {FaWindows} from 'react-icons/fa';


const Cta = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>We help you grow your business and connect with customers. Available in <DiAndroid style={{width:"1.5rem", height:"1.5rem"}}/> 
      <BsApple style={{width:"2rem", height:"1.5rem"}}/>   
      <FaWindows style={{width:"1.5rem", height:"1.5rem"}}/></p>
      <h2>Are you a service provider? Register your business today with BeFixx.</h2>
    </div>
    <div className="gpt3__cta-btn">
      <a href="#contact"><button type="button"><FaDownload/>  Registered with BeFixx</button></a>
    </div>
  </div>
);

export default Cta;