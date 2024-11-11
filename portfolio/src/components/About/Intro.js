import React from "react";
import "./intro.css";
import profilePic from "../../assets/profilePic.png";

const Intro = () => {
  return (
    <section id="intro" aria-labelledby="introTitle">
      <div className="introContent">
        <div className="textContainer">
          <h1 className="role">Frontend Developer</h1>
          <div className="introText">
            I'm <span className="introName">Andrea</span> Bruni from Italy
          </div>
        </div>
        <div className="imageContainer">
          <img
            src={profilePic}
            alt="Profile of Andrea Bruni"
            className="profilePic"
          />
        </div>
      </div>
      <p className="introPara">
        A skilled web developer with a passion for customer satisfaction, ready
        to fulfill your design and development needs.
      </p>
    </section>
  );
};

export default Intro;
