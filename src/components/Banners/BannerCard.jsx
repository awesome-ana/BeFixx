import React from "react";
import './banners.css';
import demo1 from '../../assets/bannerdemo1.svg';
import demo2 from '../../assets/bannerdemo2.svg';


const BannerCard = () => {


  return (
    <div className="bannercard">
      
         <div className="bannerimg"> <img src={demo1} alt=""/></div>
         <div className="bannerimg"> <img src={demo2} alt=""/></div>
      
    </div>
  );
};


export default BannerCard;