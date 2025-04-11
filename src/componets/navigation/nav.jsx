import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../navigation/nav.css";
import main_logo from "../../assets/main_logo.png";
import menu_logo from "../../assets/menu.png";
const Header_n = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navbarClass = menuOpen ? "header_main nav-expanded" : "header_main";

  return (
    <div className="main-navigation-div">
      <div className={navbarClass}>
        <div className="header-child">
          <div className="main-logo" id="i-1">
            <a href="/">
              <img src={main_logo} href="/" className="m-logo" alt="logo" />
            </a>
          </div>
          <div className="menu-logo">
            <input
              type="checkbox"
              id="menu-toggle"
              checked={menuOpen}
              onChange={() => setMenuOpen(!menuOpen)}
            />
            <label htmlFor="menu-toggle" className="menu-icon">
              <img src={menu_logo} className="m-logo" alt="menu" />
            </label>
          </div>
          <div className={`link-nav ${menuOpen ? "nav-slide" : ""}`}>
            <Link to="/" className="links-nav" id="h-child">
              <span className="link-span-c">Home</span>
            </Link>
            <Link
              to="/about"
              className={`links-nav ${
                location.pathname === "/about" ? "active-link" : ""
              }`}
              id="h-child"
            >
              <span className="link-span-c">About</span>
            </Link>
          
            <Link
              to="/department"
              className={`links-nav ${
                location.pathname === "/department" ? "active-link" : ""
              }`}
              id="h-child"
            >
              <span className="link-span-c">Department</span>
            </Link>
            <Link
              to="/appoinment"
              className={`links-nav ${
                location.pathname === "/appoinment" ? "active-link" : ""
              }`}
              id="h-child"
            >
              <span className="link-span-c">Make Appointment</span>
            </Link>
            
            <Link
              to="/contact"
              className={`links-nav ${
                location.pathname === "/contact" ? "active-link" : ""
              }`}
              id="h-child"
            >
              <span className="link-span-c">Contact</span>
            </Link>
            <Link
              to="/membership"
              className={`links-nav ${
                location.pathname === "/membership" ? "active-link" : ""
              }`}
              id="h-child"
            >
              <span className="link-span-c">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header_n;
