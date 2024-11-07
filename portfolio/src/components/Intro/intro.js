import React from "react";
import { Link } from "react-scroll";
import "./intro.css";
import hireMe from "../../assets/HireMe.png";

const Intro = () => {
  return (
    <section id="intro" aria-labelledby="introTitle">
      <div className="introContent">
        <h1 className="hi" id="introTitle">
          Hi,
        </h1>
        <div className="introText">
          I'm <span className="introName">Andrea</span> Bruni from Italy
        </div>
        <p className="introPara">
          A skilled web developer with a passion for customer satisfaction,
          ready to fulfill your design and development needs.
        </p>
        <Link to="contact" spy smooth offset={-70} duration={500}>
          <div className="hireMeContainer">
            <button className="btn" aria-label="Hire Me Button">
              <img src={hireMe} alt="Hire Me" className="btnImg" />
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
