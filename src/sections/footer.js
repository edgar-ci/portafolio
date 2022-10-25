import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white mt-5">
      <div className="container py-3">
        <div className="d-flex justify-content-between">
          <div className="col mt-2 d-flex justify-content-start">
            <span>Made by</span>
            <strong className="ml-2">Edgar AG</strong>
          </div>
          <div className="col d-flex justify-content-end">
            <a className="btn mr-2" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn mr-2" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn mr-2" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="btn" href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
