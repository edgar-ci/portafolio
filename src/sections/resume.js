import React from "react";
import Skills from "./skills";
import Quality from "./quality";

const Wave = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 800" {...props}>
    <g fill="#0d0d0dff">
      <path
        d="M-4.176 288.188c85.416 12.708 241.25 70.166 410 61 168.75-9.167 233.333-96.042 400-105 166.666-8.959 233.333 60.75 400 62 166.666 1.25 233.333-64.75 400-56 166.666 8.75 233.333 98.833 400 98 166.666-.834 264.583-170.75 400-102 135.416 68.75 854.166 237.833 250 432-604.167 194.166-2493.75 395.833-3150 500"
        opacity={0.05}
      />
      <path
        d="M-4.176 336.188c85.416 12.708 241.25 70.166 410 61 168.75-9.167 233.333-96.042 400-105 166.666-8.959 233.333 60.75 400 62 166.666 1.25 233.333-64.75 400-56 166.666 8.75 233.333 98.833 400 98 166.666-.834 264.583-170.75 400-102 135.416 68.75 854.166 237.833 250 432-604.167 194.166-2493.75 395.833-3150 500"
        opacity={0.29}
      />
      <path
        d="M-4.176 384.188c85.416 12.708 241.25 70.166 410 61 168.75-9.167 233.333-96.042 400-105 166.666-8.959 233.333 60.75 400 62 166.666 1.25 233.333-64.75 400-56 166.666 8.75 233.333 98.833 400 98 166.666-.834 264.583-170.75 400-102 135.416 68.75 854.166 237.833 250 432-604.167 194.166-2493.75 395.833-3150 500"
        opacity={0.53}
      />
      <path
        d="M-4.176 432.188c85.416 12.708 241.25 70.166 410 61 168.75-9.167 233.333-96.042 400-105 166.666-8.959 233.333 60.75 400 62 166.666 1.25 233.333-64.75 400-56 166.666 8.75 233.333 98.833 400 98 166.666-.834 264.583-170.75 400-102 135.416 68.75 854.166 237.833 250 432-604.167 194.166-2493.75 395.833-3150 500"
        opacity={0.76}
      />
      <path d="M-4.176 480.188c85.416 12.708 241.25 70.166 410 61 168.75-9.167 233.333-96.042 400-105 166.666-8.959 233.333 60.75 400 62 166.666 1.25 233.333-64.75 400-56 166.666 8.75 233.333 98.833 400 98 166.666-.834 264.583-170.75 400-102 135.416 68.75 854.166 237.833 250 432-604.167 194.166-2493.75 395.833-3150 500" />
    </g>
  </svg>
);

const Resume = () => {
  return (
    <div className="resume">
      <Wave id="wave" />
      <div className="container d-flex justify-content-between">
        <div className="resume__card">
          <Skills />
        </div>
        <div className="resume__card">
          <Quality />
        </div>
      </div>
      <Wave />
    </div>
  );
};

export default Resume;