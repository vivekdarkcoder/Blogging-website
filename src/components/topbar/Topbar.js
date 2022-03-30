import React from 'react'
import "./topbar.css"
import pimg from "./img1.jpg";
import {Link } from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';

export default function Topbar() {
  const user = false;
  return (
    <div className="Top">
      <div className="topLeft">Mr.darkcoder</div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
          <Link className="link" to="/write">
              WRITE
            </Link></li>
            {user && <li className="topListItem">LOGOUT</li>}
          
        </ul>
      </div>
      <div className="topRight">
      {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={pimg}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <SearchIcon className="searchicon" />
      </div>

    </div>
  )
}
