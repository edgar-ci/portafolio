import React from "react";

const menuItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Resume",
    link: "#resume",
  },
  {
    name: "Portfolio",
    link: "#portfolio",
  },
];

const Navbar = () => {
  return (
    <nav className="navbar shadow-sm navbar-expand-lg navbar-dark py-3 d-none">
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
        <div className="navbar-nav m-auto">
          {menuItems.map((item, index) => (
            <a
              href={item.link}
              className={`nav-item nav-link ${index === 0 && "active"}`}
              key={item.name}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
