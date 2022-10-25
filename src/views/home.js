import React from "react";
import Navbar from "../components/navbar";
import Landing from "../sections/landing";
import About from "../sections/about";
import Quality from "../sections/quality";
import Skills from "../sections/skills";
import Portfolio from "../sections/portfolio";
import Footer from "../sections/footer";

const Home = () => {
  return (
    <div id="home-page">
      <Navbar />
      <Landing />
      <About />
      <div className="container d-flex">
        <div>
          <Quality />
        </div>
        <div>
          <Skills />
        </div>
      </div>
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;
