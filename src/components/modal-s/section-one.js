import React from "react";
import ResponsiveImage from "../ui/responsive-image";

const SectionOne = () => {
  return (
    <section id="Modal 3" className="relative h-screen w-full bg-black ">
      <div className="absolute top-28 md:top-32 lg:top-48 xl:top-20 left-1/2 -translate-x-1/2  mx-auto text-center">
        <h1 className="text-5xl lg:text-6xl xl:text-5xl mb-2">Model S</h1>
        <p className="text-sm lg:text-lg xl:text-sm tracking-wider whitespace-nowrap">
          Plaid
        </p>
      </div>

      {/* bg image */}
      {/* <div className="h-screen w-full bg-small-main-model-s md:bg-large-main-model-s bg-center bg-cover" /> */}

      <ResponsiveImage
        className="w-full h-full object-cover object-center"
        mobileSrc="/images/model-s/mobile/Model-S-Main-Mobile.webp"
        desktopSrc="/images/model-s/Model-S-Main.webp"
        alt="model s hero"
      />

      <div className="absolute w-full md:w-3/4 lg:w-full xl:w-4/6 left-1/2 -translate-x-1/2 bottom-16 md:bottom-30 lg:bottom-16 xl:bottom-14 px-10 md:px-20 lg:px-16 xl:px-0 text-white flex flex-wrap justify-between items-center">
        <div className="text-center">
          <p className="text-2xl md:text-3xl xl:text-2xl font-bold">396 mi</p>
          <p className="text-gray-300 text-xs md:text-sm mt-1">
            Range(EPA est.)
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-3xl xl:text-2xl font-bold">1.99s</p>
          <p className="text-gray-300 text-xs md:text-sm mt-1">0-60 mph</p>
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-3xl xl:text-2xl font-bold">200 mph</p>
          <p className="text-gray-300 text-xs md:text-sm mt-1">Top Speed</p>
        </div>
        <div className="hidden lg:block text-center">
          <p className="text-2xl md:text-3xl xl:text-2xl font-bold">1020 hp</p>
          <p className="text-gray-300 text-xs md:text-sm mt-1">Peak Power</p>
        </div>
        <div className="w-full lg:w-auto mt-8 md:mt-6 md:text-center lg:mt-0">
          <button className="w-full md:w-3/4 md:mx-auto lg:w-full border-4 lg:border-2 rounded-3xl py-1 mx:py-3 lg:py-2 lg:px-20 xl:px-16 tracking-widest text-sm font-bold xl:font-normal whitespace-nowrap">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
