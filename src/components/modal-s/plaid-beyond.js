import React from "react";

const BeyondLudicrous = () => {
  return (
    <section className="w-full h-screen">
      <div className="bg-small-plaid-performance md:bg-large-plaid-performance w-full h-3/5 bg-cover bg-center relative">
        <div className="absolute w-full md:w-4/5 lg:max-w-3xl xl:max-w-xl left-1/2 -translate-x-1/2 bottom-8 md:bottom-12 xl:bottom-6 px-8 md:px-20 lg:px-16 xl:px-0 text-white flex flex-wrap justify-between items-center">
          <div className="text-center">
            <p className="text-2xl md:text-3xl xl:font-bold  ">
              1020 <span className="font-normal text-xl">hp</span>
            </p>
            <p className="text-gray-300 xl:text-white text-xs md:text-sm ">
              Peak Power
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl xl:font-bold ">
              9.23 <span className="font-normal text-xl">s</span>
            </p>
            <p className="text-gray-300 xl:text-white text-xs md:text-sm ">
              155 mph 1/4 mile
            </p>
          </div>
          <div className=" text-center">
            <p className="text-2xl md:text-3xl xl:font-bold  ">
              1.99 <span className="font-normal text-xl">s</span>
            </p>
            <p className="text-gray-300 xl:text-white text-xs md:text-sm ">
              0-60 mphs
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 md:mt-14 lg:mt-28 xl:mt-10 lg:pb-0 lg:max-w-3xl xl:max-w-5xl lg:mx-auto lg:flex ">
        <div className="">
          <h3 className="font-light text-lg">Plaid</h3>
          <h2 className="text-3xl mb-5 whitespace-nowrap">Beyond Ludicrous</h2>
        </div>

        <p className="text-gray-700 lg:px-12 xl:px-28  tracking-wide">
          Model S Plaid has the quickest acceleration of any vehicle in
          production. Updated battery architecture for all Model S trims enables
          back-to-back track runs without performance degradation.
        </p>
      </div>
      <div className="px-3 m-3 md:mx-6 lg:max-w-3xl xl:max-w-5xl lg:mx-auto">
        <button className="w-full md:w-48 lg:w-2/6 xl:w-1/4 border-2 border-black rounded-3xl py-2  tracking-widest text-sm uppercase whitespace-nowrap">
          order now
        </button>
      </div>
    </section>
  );
};

export default BeyondLudicrous;
