import React from "react";
import { string } from "prop-types";

const BtnSocial = ({ className }) => (
  <a className="btn btn-social" href="#">
    <i className={`fab ${className}`}></i>
  </a>
);

const SocialLinks = () => {
  return (
    <div>
      <BtnSocial className="fa-twitter tw" />
      <BtnSocial className="fa-facebook fb" />
      <BtnSocial className="fa-linkedin-in lk" />
      <BtnSocial className="fa-instagram in" />
    </div>
  );
};

BtnSocial.propTypes = {
  className: string.isRequired,
};

export default SocialLinks;
