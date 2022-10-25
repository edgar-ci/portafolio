import React from "react";

const experiencieList = [
  {
    title: "Web Designer",
    company: "Mercado Libre",
    dates: "2022 - 2023",
    description:
      "eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem",
  },
  {
    title: "Web Designer",
    company: "Mercado Libre",
    dates: "2022 - 2023",
    description:
      "eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem",
  },
  {
    title: "Web Designer",
    company: "Mercado Libre",
    dates: "2022 - 2023",
    description:
      "eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem",
  },
];

const Quality = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <h3 className="mb-4">My Expericence</h3>
      </div>
      <div className="col-lg-6">
        <div className="border-left border-primary pt-2 pl-4 ml-2">
          {experiencieList.map((el) => (
            <div key={el.company}>
              <i className="far fa-dot-circle"></i>
              <strong className=" mb-1">{el.title}</strong>
              <p className="mb-2">
                <strong>{el.company}</strong> | <small>{el.dates}</small>
              </p>
              <p>{el.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quality;
