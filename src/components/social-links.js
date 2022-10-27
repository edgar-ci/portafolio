import React from "react";
import { string } from "prop-types";

const BtnSocial = ({ className, icon }) => (
  <a className={`btn btn-social ${className}`} href="#">
    <i className={`fab fa-${icon}`}></i>
  </a>
);

const SocialLinks = () => {
  return (
    <div>
      <BtnSocial icon="twitter" className="tw" />
      <BtnSocial icon="facebook" className="fb" />
      <BtnSocial icon="linkedin-in" className="lk" />
      <BtnSocial icon="instagram" className="in" />
    </div>
  );
};

BtnSocial.propTypes = {
  className: string.isRequired,
  icon: string.isRequired,
};

export default SocialLinks;
