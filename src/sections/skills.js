import React from "react";
import ProgressBar from "../components/progress-bar";
import skillList from "../constants/skill-list";

const Skill = () => {
  return (
    <div className="skills">
      <div className="container">
        <div className="skills__wrapper">
          <h2 className="text-secondary">Skills</h2>
          <div className="skills--wrap">
            {skillList.map((skill) => (
              <ProgressBar {...skill} key={skill.name} />
            ))}
          </div>
        </div>
      </div>
      <span className="bg-1">
        <i />
        <i />
        <i />
        <i />
      </span>
    </div>
  );
};

export default Skill;
