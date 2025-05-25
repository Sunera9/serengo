import React from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Footer from "./components/footer";
// Later: import Objectives, Methodology, Tools, etc.

import "./App.css";

function App() {
  return (
    <>
      <Hero />
      <About />
      {/* <Objectives /> */}
      {/* <Methodology /> */}
      {/* <Tools /> */}
      <Footer />
    </>
  );
}

export default App;
