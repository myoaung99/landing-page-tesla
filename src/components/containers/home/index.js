import React from "react";
import FirstSection from "./first-section";
import Section from "./section";

const HomePage = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth">
      <FirstSection />
      <Section />
      <Section />
    </div>
  );
};

export default HomePage;
