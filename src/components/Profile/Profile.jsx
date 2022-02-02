import React from "react";
import './profile.css';
import {CgList} from 'react-icons/cg';
import {MdOutlineFeedback} from 'react-icons/md';
import {BiHelpCircle} from 'react-icons/bi';
import {MdOutlineStarRate} from 'react-icons/md';
import {AiOutlineContacts} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";



const Profile=()=>{

    const history=useNavigate();
    return(
        <>
        <div className="profile section__padding">
            <div className="info_and_button">
        <div className="back_button">
                <button onClick={()=>history("/")}>Back</button>
            </div>
            <div className="profile_name">
                <h2>Username</h2>
                <p>email@gmail.com</p>
            </div>
            </div>
            <div className="profile_options">
                <div className="option_box">
                    <h5><CgList/></h5>
                    <p>List your Business & Services</p>
                </div>

                <div className="option_box">
                    <h5><MdOutlineFeedback/></h5>
                    <p>Feedback</p>
                </div>

                <div className="option_box">
                    <h5><BiHelpCircle/></h5>
                    <p>Help & Support</p>
                </div>

                <div className="option_box">
                    <h5><MdOutlineStarRate/></h5>
                    <p>Rate Us</p>
                </div>

                <div className="option_box">
                    <h5><AiOutlineContacts/></h5>
                    <p>Contact Us</p>
                </div>

                <div className="option_box">
                    <h5><BsInfoCircle/></h5>
                    <p>About Us</p>
                </div>

            </div>
        </div>
        </>
    )
}

export default Profile;