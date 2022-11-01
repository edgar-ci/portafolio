import React from "react";
import SocialLinks from "../components/social-links";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <span>Made by</span> <strong className="ml-2">Edgar AG</strong>
      </div>
      <div className="col d-flex justify-content-end">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;
