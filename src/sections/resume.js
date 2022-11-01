import React from "react";
import ProgressBar from "../components/progress-bar";
import skillList from "../constants/skill-list";
import qualityList from "../constants/qualiy-list";

const Resume = () => {
  return (
    <div className="resume">
      <span className="bg-1"></span>
      <span className="bg-1"></span>
      <span className="bg-1"></span>
      <span className="bg-1"></span>
      <span className="bg-1"></span>
      <span className="bg-1"></span>
      <div className="container d-flex justify-content-between">
        <div className="resume__card resume--skills">
          <h3 className="text-secondary">My Skills</h3>
          <div className="skills--wrap">
            {skillList.map((skill) => (
              <ProgressBar {...skill} key={skill.name} />
            ))}
          </div>
        </div>
        <div className="resume--divider" />
        <div className="resume__card resume--experience">
          <h3 className="text-secondary">My Expericence</h3>
          <div className="border-left border-primary">
            {qualityList.map((el) => (
              <div key={el.company} className="text-secondary">
                <p className="resume--experience__header">
                  <strong>{el.company}</strong> | <small>{el.dates}</small>
                </p>
                <strong className=""></strong>
                <p className="mb-2 resume--experience__title">
                  <strong>{el.title}</strong>
                </p>
                <p className="resume--experience__description">
                  {el.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
