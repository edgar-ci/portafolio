import React from "react";
import ProfileImg from "../assets/img/profile.jpg";
import SocialLinks from "../components/social-links";
import Particles from "../components/particles";

const Landing = () => {
  return (
    <div className="wrap landing ">
      <Particles />
      <div className="landing--wrapped">
        <div className="profile-img">
          <img
            className="img-fluid rounded-circle shadow-sm"
            src={ProfileImg}
            alt=""
          />
        </div>
        <div>
          <h1 className="landing__name">Edgar García</h1>
          <h2 className="landing__description">Full Stack Developer.</h2>
        </div>
        <SocialLinks />
        <a
          target="_blank"
          className="btn landing__cv--btn"
          href="https://drive.google.com/file/d/1pBqWM83PDOB9_ZUS-R3K6jhPQ5FfaME2/view?usp=sharing"
          rel="noreferrer"
        >
          <span></span>
          <i className="far fa-arrow-alt-circle-down"></i>
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Landing;
