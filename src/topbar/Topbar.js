import React from 'react'
import "./topbar.css"
import  pimg from "./img1.jpg";
import SearchIcon from '@mui/icons-material/Search';

export default function Topbar() {
  return (
    <div className="Top">
         <div className="topLeft">Mr.darkcoder</div>
         <div className="topCenter">
             <ul className="topList">
                 <li className="topListItem">Home</li>
                 <li className="topListItem">About</li>
                 <li className="topListItem">CONTACT</li>
                 <li className="topListItem">WRITE</li>
                 <li className="topListItem">LOGOUT</li>
             </ul>
         </div>
         <div className="topRight">
             <img className="topImg" src={pimg } alt="hello" srcset="" />
             <SearchIcon className="searchicon"/>
         </div>
         
    </div>
  )
}
