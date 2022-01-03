import React from "react";
import './IconCard.css';


const IconCard = (props) => {


  return (
    <div className="card">
      <div className="card__body">
         <div className="card_icon"> <img src={props.img} alt=""/></div>
        <div className="card__title"><p>{props.imgname}</p></div>
      </div>
    </div>
  );
};


export default IconCard;