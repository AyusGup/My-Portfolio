import React from "react";
import Header from "./Header";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Footer from "./Footer";
import About from "./About/About";
import Skill from "./Skill/Skill";
import Project from "./Project/Project";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
