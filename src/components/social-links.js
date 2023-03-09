import React from "react";
import { string } from "prop-types";

const BtnSocial = ({ className, icon, link }) => (
  <a
    className={`btn btn-social ${className}`}
    href={link}
    rel="noopener nofollow noreferrer"
    aria-label={icon}
    target="_blank"
  >
    <i className={`fab fa-${icon}`}></i>
  </a>
);

const SocialLinks = () => {
  return (
    <div className="social-links">
      <BtnSocial
        icon="linkedin-in"
        className="lk"
        link="https://www.linkedin.com/in/edgar-alberto-alvarez-garcia-10341292"
      />
      <a
        className="btn btn-social envelope"
        href="mailto:edgarlvzci@gmail.com"
        rel="noopener nofollow"
        aria-label="Contact"
      >
        <i className="far fa-envelope"></i>
      </a>
      <BtnSocial
        icon="codepen"
        className="pen"
        link="https://codepen.io/edgar-ci"
      />
    </div>
  );
};

BtnSocial.propTypes = {
  className: string.isRequired,
  icon: string.isRequired,
  link: string.isRequired,
};

export default SocialLinks;
