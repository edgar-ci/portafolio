import React from "react";
import PortfolioImg from "../assets/img/portfolio.jpg";

const Portfolio = () => {
  return (
    <div className="container-fluid pt-5 pb-3" id="portfolio">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1 className="position-absolute text-uppercase text-primary mb-5">
            My Portfolio
          </h1>
        </div>
        <div className="row portfolio-container mt-4">
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
            <div className="position-relative overflow-hidden mb-2">
              <img
                className="img-fluid rounded w-100"
                src={PortfolioImg}
                alt=""
              />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                <a href={PortfolioImg} data-lightbox="portfolio">
                  <i
                    className="fa fa-plus text-white"
                    style={{ fontSize: 60 }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
            <div className="position-relative overflow-hidden mb-2">
              <img
                className="img-fluid rounded w-100"
                src={PortfolioImg}
                alt=""
              />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                <a href={PortfolioImg} data-lightbox="portfolio">
                  <i
                    className="fa fa-plus text-white"
                    style={{ fontSize: 60 }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
            <div className="position-relative overflow-hidden mb-2">
              <img
                className="img-fluid rounded w-100"
                src={PortfolioImg}
                alt=""
              />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                <a href={PortfolioImg} data-lightbox="portfolio">
                  <i
                    className="fa fa-plus text-white"
                    style={{ fontSize: 60 }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
            <div className="position-relative overflow-hidden mb-2">
              <img
                className="img-fluid rounded w-100"
                src={PortfolioImg}
                alt=""
              />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                <a href={PortfolioImg} data-lightbox="portfolio">
                  <i
                    className="fa fa-plus text-white"
                    style={{ fontSize: 60 }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
            <div className="position-relative overflow-hidden mb-2">
              <img
                className="img-fluid rounded w-100"
                src={PortfolioImg}
                alt=""
              />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                <a href={PortfolioImg} data-lightbox="portfolio">
                  <i
                    className="fa fa-plus text-white"
                    style={{ fontSize: 60 }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
            <div className="position-relative overflow-hidden mb-2">
              <img
                className="img-fluid rounded w-100"
                src={PortfolioImg}
                alt=""
              />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                <a href={PortfolioImg} data-lightbox="portfolio">
                  <i
                    className="fa fa-plus text-white"
                    style={{ fontSize: 60 }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
