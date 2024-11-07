import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.gif";
import contactImg from "../../assets/contactImg.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={-170}
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
          offset={-90}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          to="works"
          spy={true}
          offset={5}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          to="clients"
          spy={true}
          offset={-12}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          Clients
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <img src={contactImg} alt="Button Icon" className="desktopMenuImg" />
      </button>

      {/* Mobile Menu Icon */}
      <img
        src={menu}
        alt="Menu Icon"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />

      {/* Mobile Navigation Menu */}
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={-170}
          smooth={true}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          offset={-90}
          smooth={true}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          to="works"
          spy={true}
          offset={5}
          smooth={true}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          to="clients"
          spy={true}
          offset={-12}
          smooth={true}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Clients
        </Link>
        <Link
          to="contact"
          spy={true}
          offset={-12}
          smooth={true}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
