import React from "react";

const About = () => {
  return (
    <div className="about container">
      <div className="about__title">
        <h1>About</h1>
      </div>
      <div className="wrap">
        <div className="about__caption text-center">
          <i className="about__emoji">🤓</i>
          <p className="about__caption--description ">
            Soy un apasionado desarrollador con 8 años de experiencia, tengo
            experiencia en todas las fases de un proyecto software, desde su
            etapa de análisis hasta su entrega.
          </p>
          <p className="about__caption--description">
            Siempre enfocado en la calidad y la mejora continua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
