import React from "react";
import SocialLinks from "../components/social-links";

const Footer = () => {
  return (
    <footer className="footer">
      <SocialLinks />
      <p className="copy">
        <span>Made by</span> <strong className="ml-2">Edgar García</strong>
      </p>
    </footer>
  );
};

export default Footer;
