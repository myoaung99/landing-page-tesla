import React from "react";

const HomePage = () => {
  return (
    <div id="modalS" className="home h-screen w-full relative">
      <div className="absolute left-1/2 top-32 sm:top-20 text-center -translate-x-1/2 z-10">
        <h1 className="text-5xl mb-2">Model 3</h1>
        <p className="text-sm tracking-widest">
          Order Online for{" "}
          <span className="underline underline-offset-4">
            Touchless Delivery
          </span>
        </p>
      </div>
      <div className="image h-screen w-full">
        <img
          className="w-full h-screen object-cover object-center"
          src="/images/M3-Homepage.jpg"
          alt="Modal S"
        />
      </div>

      <div className="absolute left-1/2 bottom-28 lg:bottom-20 -translate-x-1/2 sm:px-0  sm:w-1/2 lg:w-1/3 flex justify-around z-10">
        <button className="rounded-full bg-slate-600 px-6 sm:px-14 py-2 uppercase text-white mr-6 text-xs sm:text-sm font-bold whitespace-nowrap">
          customer order
        </button>
        <button className="rounded-full bg-slate-100 px-6 sm:px-14 py-2 uppercase text-xs sm:text-sm font-bold whitespace-nowrap">
          existing inventory
        </button>
      </div>
    </div>
  );
};

export default HomePage;
