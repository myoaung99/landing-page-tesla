import React from "react";
import ResponsiveImage from "../ui/responsive-image";

const EfficientDesign = () => {
  return (
    <section className="w-full h-screen bg-black pb-36">
      <ResponsiveImage
        className="w-full h-4/5 object-cover object-center"
        mobileSrc="/images/model-s/mobile/Model-S-Performance-Mobile.webp"
        desktopSrc="/images/model-s/Model-S-Exterior-Hero-Desktop.jpg"
        alt="model s performance"
      />

      <div className="p-6 md:mt-14 lg:mt-28 xl:mt-10 lg:pb-0 lg:max-w-3xl xl:max-w-5xl lg:mx-auto lg:flex ">
        <div className="xl:mr-10 text-white">
          <h3 className="font-light text-lg">Exterior</h3>
          <h2 className="text-3xl mb-5 whitespace-nowrap">
            Designed for Efficiency
          </h2>
        </div>

        <p className="text-gray-300 lg:px-12 xl:px-10 tracking-wide">
          With a drag coefficient of just .208 Cd, the lowest on the planet,
          Model S is built for speed, endurance and range. Improved aerodynamics
          and a wider chassis offer more responsive performance so you can take
          corners quicker and with more confidence.
        </p>
      </div>
      <div className=" text-white px-3 m-3 md:mx-6 lg:max-w-3xl xl:max-w-5xl lg:mx-auto">
        <button className="w-full md:w-48 lg:w-2/6 xl:w-1/4 xl:ml-3 border-2 border-white rounded-3xl py-2  tracking-widest text-sm uppercase whitespace-nowrap">
          order now
        </button>
      </div>
    </section>
  );
};

export default EfficientDesign;
