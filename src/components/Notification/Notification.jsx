import React from "react";
import './notification.css';
import { useNavigate } from "react-router-dom";
import {IoNotificationsSharp} from 'react-icons/io5';
import {MdOutlineMaximize} from 'react-icons/md';



const Notification=()=>{
    
    const history= useNavigate();
    return(
        <>
        <div className="notification_page section__padding">
            <div className="back_button">
                <button onClick={()=>history("/")}>Back</button>
            </div>
            <div className="notification_page_title">
                <h2>Notifications</h2>
            </div>
        <NotifyCard colors="orange" name="Happy Independence Day"/>
        <NotifyCard colors="#677fff" name="AC Repair"/>
        </div>
        </>
    )
}


const NotifyCard=(props)=>{

    
    return (
        <>
        <div className="notifield">
            
        <div className="noti_lineicon">
            <MdOutlineMaximize style={{transform:"rotate(90deg)", height:"3rem", width:"3rem" , color: props.colors}}/>
            </div>

            <div className="noti_icon">
                <IoNotificationsSharp style={{width:"1.5rem", height:"1.5rem", color:props.colors}}/>
            </div>
            
            <div className="noti_name">
                <p>{props.name}</p>
            </div>
        </div>
        </>
    )
}


export default Notification;