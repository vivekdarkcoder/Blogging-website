import { NavLink } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        {/* <ul className="sidebarList">
          <li className="sidebarListItem">
            <NavLink className="link" to="/posts?cat=Life">
              Life
            </NavLink>
          </li>
          <li className="sidebarListItem">
            <NavLink className="link" to="/posts?cat=Music">
              Music
            </NavLink>
          </li>
          <li className="sidebarListItem">
            <NavLink className="link" to="/posts?cat=Sport">
              Sport
            </NavLink>
          </li>
          <li className="sidebarListItem">
            <NavLink className="link" to="/posts?cat=Style">
              Style
            </NavLink>
          </li>
          <li className="sidebarListItem">
            <NavLink className="link" to="/posts?cat=Tech">
              Tech
            </NavLink>
          </li>
          <li className="sidebarListItem">
            <NavLink className="link" to="/posts?cat=Cinema">
              Cinema
            </NavLink>
          </li>
        </ul> */}
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
