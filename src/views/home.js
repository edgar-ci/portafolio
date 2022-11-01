import React from "react";
import Navbar from "../components/navbar";
import Landing from "../sections/landing";
import About from "../sections/about";
import Skills from "../sections/skills";
import Experience from "../sections/experience";
import Portfolio from "../sections/portfolio";
import Footer from "../sections/footer";

const Home = () => {
  return (
    <div id="home-page">
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;
