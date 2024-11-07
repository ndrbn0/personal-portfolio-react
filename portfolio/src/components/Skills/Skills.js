import React from "react";
import "./skills.css";
import UIDesign from "../../assets/UIDesign.png";
import WebDesign from "../../assets/WebDesign.png";
import AppDesign from "../../assets/AppDesign.png";

const Skills = () => {
  return (
    <section id="skills" aria-labelledby="skillTitle">
      <h2 id="skillTitle" className="skillTitle">
        What I Do
      </h2>
      <p className="skillDesc">
        I am a passionate and skilled web designer, dedicated to bringing your
        ideas to life with a meticulous attention to detail.
      </p>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UX/UI Design icon" className="skillBarImg" />
          <div className="skillBarText">
            <h3>UX/UI Design</h3>
            <p>This is a demonstration of my skills in UX/UI design.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="Web Design icon" className="skillBarImg" />
          <div className="skillBarText">
            <h3>Web Design</h3>
            <p>This is a demonstration of my skills in web design.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="App Design icon" className="skillBarImg" />
          <div className="skillBarText">
            <h3>App Design</h3>
            <p>This is a demonstration of my skills in app design.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
