import React from "react";
import PortFolioList from "../constants/portfolio-list";

const Portfolio = () => {
  return (
    <div className="container portfolio">
      <h2 className="mb-5 portfolio--title">Portfolio</h2>
      <div className="portfolio--works">
        {PortFolioList.map((work, index) => (
          <div className="portfolio--window" key={index}>
            <i className="portfolio--window__icon" />
            <a
              className="portfolio--item"
              href={work.link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="portfolio--item__link">
                <i className="fas fa-link portfolio--item__icon" />
              </span>
              <span className="portfolio--item__img">
                <img className="img-fluid" src={work.image} alt="" />
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
