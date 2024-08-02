import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
