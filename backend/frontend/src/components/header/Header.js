import React from "react";
import { Link } from "react-router-dom";
import '../header/Header.css';
import Logo from '../../Assets/Images/Logo.png';

function Header() {
    return (
      <nav className="navbar1">
        <div className="navbar1-logo">
            <img style={{width:'300px'}} src={Logo} alt="logo" />
        </div>
    
        <ul className="navbar1-links">
        <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>

          <li>
          <Link to="/login">
          <i class="fa-solid fa-user"></i>          
          </Link>
          </li>

          <li>
          <Link to="/login">
          <i class="fa-solid fa-user-tie"></i>
          </Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Header;