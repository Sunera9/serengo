import React from "react";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Milestones from "./components/milestones";
import Downloads from "./components/documents";
import Team from "./components/team";
import ContactUs from "./components/contact";
import LiteratureReview from "./components/LiteratureReview";
import ProblemsSolutions from "./components/problemsolution";
import ResearchObjectives from "./components/objectives";
import MethodologySection from "./components/methodology";
import TechnologiesSection from "./components/tech"
import "./App.css";
import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <LiteratureReview />
      <ProblemsSolutions />
      <ResearchObjectives/>
      <MethodologySection/>
      <TechnologiesSection/>
      <Milestones />
      <Downloads />
      <Team />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
