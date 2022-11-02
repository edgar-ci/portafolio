import React from "react";
import { string } from "prop-types";

const ProgressBar = ({ name, percent }) => {
  return (
    <div className="progress">
      <div className="progress__description">
        <strong className="progress__name">{name}</strong>
      </div>
      <div className="progress--bar">
        <div
          className="progress__item"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{
            width: `${percent}%`,
          }}
        >
          <strong className="progress__percent">{percent}%</strong>
        </div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  name: string.isRequired,
  percent: string.isRequired,
};

export default ProgressBar;
