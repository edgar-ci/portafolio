import React from "react";
import Navbar from "../components/navbar";
import Landing from "../sections/landing";
import About from "../sections/about";
import Resume from "../sections/resume";
import Portfolio from "../sections/portfolio";
import Footer from "../sections/footer";

const Home = () => {
  return (
    <div id="home-page">
      <Navbar />
      <Landing />
      <About />
      <Resume />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;
