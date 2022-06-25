import React from "react";
import Section from "./section";

const HomePage = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth">
      <Section />
      <Section />
      <Section />
    </div>
  );
};

export default HomePage;
