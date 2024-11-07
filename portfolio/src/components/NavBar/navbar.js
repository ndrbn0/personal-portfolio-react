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
          activeClass="active"
          to="intro"
          spy={true}
          offset={-100}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          to="works"
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          to="clients"
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          Clients
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} alt="Button Icon" className="desktopMenuImg" />
      </button>
    </nav>
  );
};

export default Navbar;
