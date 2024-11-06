import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.gif";
import contactImg from "../../assets/contactImg.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          Clients
        </Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactImg} alt="Button Icon" className="desktopMenuImg" />
      </button>
    </nav>
  );
};

export default Navbar;
