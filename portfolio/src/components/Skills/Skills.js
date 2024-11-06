import React from "react";
import "./skills.css";
import UIDesign from "../../assets/UIDesign.png";
import WebDesign from "../../assets/WebDesign.png";
import AppDesign from "../../assets/AppDesign.png";

const Skills = () => {
  return (
    <section id="skills">
      <span class="skillTitle">What I do</span>
      <span class="skillDesc">
        I am a passionate and skilled web designer a passionate and skilled web
        designer a passionate and skilled web designer a passionate and skilled
        web designer a passionate and skilled web designer a passionate and
        skilled web designer
      </span>
      <div class="skillBars">
        <div class="skillBar">
          <img src={UIDesign} alt="" class="skillBarImg" />
          <div class="skillBarText">
            <h2>UX/UI Design</h2>
            <p>This is a demonstration</p>
          </div>
        </div>
        <div class="skillBar">
          <img src={WebDesign} alt="" class="skillBarImg" />
          <div class="skillBarText">
            <h2>Web Design</h2>
            <p>This is a demonstration</p>
          </div>
        </div>
        <div class="skillBar">
          <img src={AppDesign} alt="" class="skillBarImg" />
          <div class="skillBarText">
            <h2>App Design</h2>
            <p>This is a demonstration</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
