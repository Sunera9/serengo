import React from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Footer from "./components/footer";
import Milestones from "./components/milestones";
import Downloads from "./components/documents";
import Team from "./components/team";
import ContactUs from "./components/contact";

import "./App.css";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Milestones />
      <Downloads />
      <Team />
      <ContactUs />
      {/* <Objectives /> */}
      {/* <Methodology /> */}
      {/* <Tools /> */}
      <Footer />
    </>
  );
}

export default App;
