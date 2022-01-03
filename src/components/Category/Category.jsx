import React from "react";
import { useNavigate } from "react-router-dom";
import './category.css';
import AC from '../../assets/category_icons/AC.svg';





const Category=()=>{

    const history= useNavigate();
    return(
        <>
        <div className="category_page section__padding">
            <div className="back_button">
                <button onClick={()=>history("/")}>Back</button>
            </div>
            <div className="category_page_title">
                <h2>All Categories</h2>
            </div>
        <CategoryCard icon={AC} name="AC Repair"/>
        <CategoryCard icon={AC} name="AC Repair"/>
        </div>
        </>
    )
}


const CategoryCard=(props)=>{
    return (
        <>
        <div className="longbox">
            <div className="cat_icon">
                <img src={props.icon} alt=""/>
            </div>
            <div className="cat_name">
                <h5>{props.name}</h5>
            </div>
        </div>
        </>
    )
}

export default Category;