import React from "react";
import Section from "./../../components/home/section";
import Layout from "../../components/layout/layout";

const homeSections = [
  {
    model: "Model 3",
    bgImg: "bg-small-model-3 md:bg-large-model-3",
    type: "electronic-car",
  },
  {
    model: "Model Y",
    bgImg: "bg-small-model-y md:bg-large-model-y",
    type: "electronic-car",
  },
  {
    model: "Model S",
    bgImg: "bg-small-model-s md:bg-large-model-s",
    type: "electronic-car",
  },
  {
    model: "Model X",
    bgImg: "bg-small-model-x md:bg-large-model-x",
    type: "electronic-car",
  },
  {
    model: "Solar Panels",
    bgImg: "bg-small-solar-panels md:bg-large-solar-panels",
    type: "solar",
  },
  {
    model: "Solar Roof",
    bgImg: "bg-small-solar-roof md:bg-large-solar-roof",
    type: "solar",
  },
  {
    model: "Accrssories",
    bgImg: "bg-small-accessories md:bg-large-accessories",
    type: "accessories",
  },
];

const HomePage = () => {
  return (
      <Layout position="fixed">
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth">
          {homeSections.map((data) => (
              <Section
                  key={data.model}
                  model={data.model}
                  type={data.type}
                  bgImg={data.bgImg}
              />
          ))}
        </div>
      </Layout>

  );
};

export default HomePage;
