import React from "react";
import PortFolioList from "../constants/portfolio-list";

const Portfolio = () => {
  return (
    <div className="container portfolio">
      <h1 className="mb-5 portfolio--title">Portfolio</h1>
      <div className="portfolio--works">
        {PortFolioList.map((work, index) => (
          <div className="portfolio--window" key={index}>
            <i className="portfolio--window__icon" />
            <i className="portfolio--window__icon" />
            <i className="portfolio--window__icon" />
            <a className="portfolio--item" href={work.link}>
              <h1>{work.text}</h1>
              <div className="portfolio--item__img">
                <img className="img-fluid" src={work.image} alt="" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
