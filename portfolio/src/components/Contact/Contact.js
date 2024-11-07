import React from "react";
import "./contact.css";
import FB from "../../assets/facebook.png";
import FBIcon from "../../assets/FBIcon.png";
import InstaIcon from "../../assets/Insta.png";
import GitHubIcon from "../../assets/GitHub.png";
import LinkedInIcon from "../../assets/IN.png";

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have the opportunity to work with a diverse group of companies. Some
          of the notable companies I have worked with includes:
        </p>
        <div className="clilentImgs">
          <img src={FB} alt="Facebook" className="clientImg" />
          <img src={FB} alt="Facebook" className="clientImg" />
          <img src={FB} alt="Facebook" className="clientImg" />
          <img src={FB} alt="Facebook" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            name="message"
            className="msg"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="submitBtn" value="send">
            Submit
          </button>
          <div className="links">
            <img src={FBIcon} alt="Facebook" className="link" />
            <img src={InstaIcon} alt="Instagram" className="link" />
            <img src={GitHubIcon} alt="GitHub" className="link" />
            <img src={LinkedInIcon} alt="LinkedIn" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
