import React from "react";
import qualityList from "../constants/qualiy-list";

const Experience = () => {
  return (
    <div className="experience">
      <div className="container experience__wrapper">
        <h3 className="text-secondary">Expericence</h3>
        {qualityList.map((el) => (
          <div key={el.company} className="text-secondary experience__item">
            <small>{el.dates}</small>
            <p className="experience__header">
              <strong>{el.title}</strong>
            </p>
            <div className="experience__subheader">
              <strong>{el.company}</strong>
            </div>
            <p className="experience__description">{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
