import React from "react";
import "./work.css";
import FlavionLogo from "../../assets/FlavionLogo.gif";
import ArtGallery from "../../assets/ArtGallery.gif";
import Wormhole from "../../assets/Wormhole.gif";

const Works = () => {
  return (
    <section id="works" aria-labelledby="worksTitle">
      <h2 id="worksTitle" className="worksTitle">
        My Portfolio
      </h2>
      <p className="worksDesc">
        I take pride in paying attention to the smallest details in my projects.
      </p>
      <div className="worksImgs">
        <img
          src={FlavionLogo}
          alt="Flavion App project thumbnail"
          className="worksImg"
        />
        <img
          src={ArtGallery}
          alt="Art Gallery App project thumbnail"
          className="worksImg"
        />
        <img
          src={Wormhole}
          alt="Wormhole App project thumbnail"
          className="worksImg"
        />
      </div>
      <button className="workBtn" aria-label="See More Projects">
        See More
      </button>
    </section>
  );
};

export default Works;
