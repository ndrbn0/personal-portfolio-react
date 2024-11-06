import React from "react";
import "./work.css";
import FlavionLogo from "../../assets/FlavionLogo.gif";
import ArtGallery from "../../assets/ArtGallery.gif";
import Wormhole from "../../assets/Wormhole.gif";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and
      </span>
      <div className="worksImgs">
        <img src={FlavionLogo} alt="Flavion App" class="worksImg" />
        <img src={ArtGallery} alt="Art Gallery App" class="worksImg" />
        <img src={Wormhole} alt="Wormhole App" class="worksImg" />
      </div>
      <button class="workBtn">See More</button>
    </section>
  );
};

export default Works;
