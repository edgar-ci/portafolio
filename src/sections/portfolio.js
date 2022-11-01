import React from "react";
import PortfolioImg from "../assets/img/portfolio.jpg";

const listWorks = [
  {
    image: PortfolioImg,
    text: "Nombre",
    link: "#",
  },
  {
    image: PortfolioImg,
    text: "Nombre",
    link: "#",
  },
  {
    image: PortfolioImg,
    text: "Nombre",
    link: "#",
  },
  {
    image: PortfolioImg,
    text: "Nombre",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <div className="container portfolio">
      <h1 className="text-uppercase text-primary mb-5">My Portfolio</h1>

      <div className="portfolio--works">
        {listWorks.map((work, index) => (
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
