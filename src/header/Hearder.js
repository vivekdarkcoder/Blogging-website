import React from 'react'
import "./header.css";
import pimg from '../topbar/img1.jpg';
export default function Hearder () {
  return (
    <div>
    <div className="headertitles"> 
     <span className="headerSm"> React & node</span>
     <span className="headerLg"> Blog</span>
    </div>
    <img  className="headerImg" src={pimg} alt="" srcset="" />
    
    </div>
  )
}
