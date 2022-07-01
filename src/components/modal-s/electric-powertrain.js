import React, { useEffect, useState } from "react";

const ElectricPowertrain = () => {
  const [isDualEngine, setIsDualEngine] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDualEngine((prev) => !prev);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [isDualEngine]);

  const imgClasses = isDualEngine
    ? "w-full h-48 S md:h-96 xl:h-full  rounded-lg bg-small-dual-engine lg:bg-large-dual-engine my-10 bg-cover bg-center"
    : "w-full h-48 S md:h-96 xl:h-full  rounded-lg bg-small-tri-engine lg:bg-large-tri-engine my-10 bg-cover bg-center";

  const selectDualEngineHandler = () => {
    setIsDualEngine(true);
  };
  const selectTriEngineHandler = () => {
    setIsDualEngine(false);
  };

  return (
    <section className="bg-gray-100 py-16 px-6 ">
      <div>
        <h2 className="text-3xl mb-5">Electric Powertrain</h2>
        <p className="text-gray-700 xl:w-4/5 tracking-wide">
          Model S platforms unite powertrain and battery technologies for
          unrivaled performance, range and efficiency. New module and pack
          thermal architecture allows faster charging and gives you more power
          and endurance in all conditions.
        </p>
      </div>
      <div className="w-full xl:h-screen my-5">
        <div className={imgClasses} />
        <div className="flex justify-between xl:hidden ">
          <div
            onClick={selectDualEngineHandler}
            className={`${
              isDualEngine ? "" : "opacity-30"
            } border-2 mx-2 p-2 rounded border-t-4 border-t-black hover:cursor-pointer transition-opacity ease-in-out`}
          >
            <h3 className="">Model S</h3>
            <p className="py-4 text-gray-700 tracking-wide hidden md:block">
              Dual Motor All-Wheel Drive unlocks more range than any other
              vehicle in our current lineup, with insane power and maximum
              control.
            </p>
            <div className="mt-5 md:mt-0 md:flex md:items-center">
              <div className="md:text-center">
                <p className="text-2xl font-semibold">3.1s</p>
                <p className="text-gray-700">0-60 mph</p>
              </div>
              <div className="py-4 md:mx-6 md:text-center">
                <p className="text-2xl font-semibold">405 mi</p>
                <p className="text-gray-700">Range (EPA est.)</p>
              </div>
              <div className="md:text-center">
                <p className="text-2xl font-semibold">670 hp</p>
                <p className="text-gray-700">Peak Power</p>
              </div>
            </div>
          </div>

          <div
            onClick={selectTriEngineHandler}
            className={`${
              isDualEngine ? "opacity-30" : ""
            } border-2 mx-2 p-2 rounded border-t-4 border-t-black hover:cursor-pointer transition-opacity ease-in-out`}
          >
            <h3 className="">Model S Plaid</h3>
            <p className="py-4 text-gray-700 tracking-wide hidden md:block">
              Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor
              All-Wheel Drive, featuring torque vectoring and three independent
              carbon-sleeved rotors.
            </p>
            <div className="mt-5 md:mt-0 md:flex md:items-center">
              <div className="md:text-center">
                <p className="text-2xl font-semibold">1.99s</p>
                <p className="text-gray-700">0-60 mph</p>
              </div>
              <div className="py-4 md:mx-6 md:text-center">
                <p className="text-2xl font-semibold">396 mi</p>
                <p className="text-gray-700">Range (EPA est.)</p>
              </div>
              <div className="md:text-center">
                <p className="text-2xl font-semibold">1020 hp</p>
                <p className="text-gray-700">Peak Power</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden max-w-6xl mx-auto xl:flex ">
        <div
          onClick={selectDualEngineHandler}
          className={`${
            isDualEngine ? "" : "opacity-30"
          } border-2 mx-4 p-2 rounded border-t-4 border-t-black hover:cursor-pointer transition-opacity ease-in-out`}
        >
          <h3 className="">Model S</h3>
          <p className="py-4 text-gray-700 tracking-wide ">
            Dual Motor All-Wheel Drive unlocks more range than any other vehicle
            in our current lineup, with insane power and maximum control.
          </p>
          <div className="flex items-center">
            <div className="text-center">
              <p className="text-2xl font-semibold">3.1s</p>
              <p className="text-gray-700">0-60 mph</p>
            </div>
            <div className="py-4 text-center mx-10">
              <p className="text-2xl font-semibold">405 mi</p>
              <p className="text-gray-700">Range (EPA est.)</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold">670 hp</p>
              <p className="text-gray-700">Peak Power</p>
            </div>
          </div>
        </div>

        <div
          onClick={selectTriEngineHandler}
          className={`${
            isDualEngine ? "opacity-30" : ""
          } border-2 mx-4 p-2 rounded border-t-4 border-t-black hover:cursor-pointer transition-opacity ease-in-out`}
        >
          <h3 className="">Model S Plaid</h3>
          <p className="py-4 text-gray-700 tracking-wide ">
            Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor
            All-Wheel Drive, featuring torque vectoring and three independent
            carbon-sleeved rotors.
          </p>
          <div className="flex items-center">
            <div className="text-center">
              <p className="text-2xl font-semibold">1.99s</p>
              <p className="text-gray-700">0-60 mph</p>
            </div>
            <div className="py-4 text-center mx-10">
              <p className="text-2xl font-semibold">396 mi</p>
              <p className="text-gray-700">Range (EPA est.)</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold">1020 hp</p>
              <p className="text-gray-700">Peak Power</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricPowertrain;
