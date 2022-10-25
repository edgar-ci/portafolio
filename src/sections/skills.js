import React from "react";
const skillList = [
  {
    name: "HTML5",
    percent: "95",
  },
  {
    name: "Javascript",
    percent: "100",
  },
  {
    name: "ReactJs",
    percent: "75",
  },
  {
    name: "CSS3",
    percent: "95",
  },
  {
    name: "NodeJS",
    percent: "95",
  },
  {
    name: "TS",
    percent: "95",
  },
];

const Skills = () => {
  return (
    <div>
      <h1>My Skills</h1>
      <div className="row align-items-center">
        {skillList.map((skill) => (
          <div className="col-md-6" key={skill.name}>
            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow={skill.percent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
