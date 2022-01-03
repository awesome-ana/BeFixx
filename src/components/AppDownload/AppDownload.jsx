import React from "react";
import './appdownload.css';
import {FaDownload} from 'react-icons/fa';
import mobile from '../../assets/mobile/app_download.png';


const AppDownload=()=>{
    return(
        <>
        <div className="appbackground">
        <div className="apppage section__padding">
            <div className="info">
                <div className="info_title">
                    <h2>Download The App Now</h2>
                    <p>It's simple, easy and fast</p>
                </div>
                <div className="info_button">
                    <button><FaDownload/> Download App</button>
                </div>
            </div>
            <div className="mobile_img">
                 <img src={mobile} alt=''/>
            </div>
        </div>
        </div>
        </>
    )
}

export default AppDownload;