import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import hireMe from "../../assets/HireMe.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hi">Hi,</span>
        <span className="introText">
          I'm <span className="introName">Andrea</span>
          <br /> Bruni form Italy
        </span>
        <p className="introPara">
          skilled web developer with passion for customers happiness,
          <br /> who will help you to fullfill all the wishes you have
        </p>
        <Link>
          <div className="hireMeContainer">
            <button className="btn">
              <img src={hireMe} alt="Hire Me" className="btnImg" />
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
