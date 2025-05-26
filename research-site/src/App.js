import React from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Footer from "./components/footer";
import Milestones from "./components/milestones";
import Downloads from "./components/documents";
import Team from "./components/team";
import ContactUs from "./components/contact";
import LiteratureReview from "./components/LiteratureReview";
import ProblemsSolutions from "./components/problemsolution";
import ResearchObjectives from "./components/objectives";
import MethodologySection from "./components/methodology";
import TechnologiesSection from "./components/tech";

function App() {
  return (
    <>
      <Hero />
      <LiteratureReview />
      <ProblemsSolutions />
      <ResearchObjectives/>
      <MethodologySection/>
      <TechnologiesSection/>
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
