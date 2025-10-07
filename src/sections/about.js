import React from "react";

const About = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  return (
    <div className="about container">
      <div className="about__title">
        <h1>About</h1>
      </div>
      <div className="wrap">
        <div className="about__caption text-center">
          <i className="about__emoji">🤓</i>
          <p className="about__caption--description ">
            I'm a frontend developer with over a {currentYear - 2015} years of experience and {currentYear - 2023} years in technical leadership, passionate about solving complex problems and driving innovation.
          </p>
          <p className="about__caption--description">
            I bring strong problem-solving skills, a strategic mindset, and hands-on expertise in modern frontend technologies. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
