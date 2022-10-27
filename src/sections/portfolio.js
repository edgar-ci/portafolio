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
    <div className="container-fluid pt-5 pb-3" id="portfolio">
      <div className="container">
        <h1 className="position-absolute text-uppercase text-primary mb-5">
          My Portfolio
        </h1>
        <div className="portfolio--works">
          {listWorks.map((work, index) => (
            <a className="portfolio--item" href={work.link} key={index}>
              <h1>{work.text}</h1>
              <img
                className="img-fluid rounded w-100"
                src={work.image}
                alt=""
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
