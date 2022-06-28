import React from "react";

const InteriorGrid = () => {
  return (
    <section className="w-full bg-black py-24 md:px-4 xl:px-32">
      <div className="container mx-auto">
        <div className="text-white md:flex md:items-center mb-1 ">
          <div className="md:w-1/2">
            <img
              className=""
              src="/images/model-s/MS-Interior-Grid-A.jpg"
              alt="model-s-interior"
            />
          </div>
          <div className="p-2 m-2 pb-10 md:pb-4 md:w-1/2 md:px-8 xl:px-16 ">
            <h3 className="mb-3"> Stay Connected</h3>
            <p className="text-sm md:text-md text-gray-300">
              Instantly connect with multi-device Bluetooth, or fast charge
              devices with wireless and 36-watt USB-C charging.
            </p>
          </div>
        </div>
        <div className="text-white md:flex md:flex-row-reverse md:items-center mb-1 ">
          <div className="md:w-1/2">
            <video playsInline autoPlay muted loop>
              <source src="/images/model-s/MS-Interior-Grid-B.mp4" />
            </video>
          </div>
          <div className="p-2 m-2 pb-10 md:pb-4 md:w-1/2 md:px-8 xl:px-16 ">
            <h3 className="mb-3">Immersive Sound</h3>
            <p className="text-sm md:text-md text-gray-300">
              A 22-speaker, 960-watt audio system with Active Road Noise
              Reduction offers immersive listening and studio-grade sound
              quality.
            </p>
          </div>
        </div>
        <div className="text-white md:flex md:items-center mb-1 ">
          <div className="md:w-1/2">
            <img
              className=""
              src="/images/model-s/MS-Interior-Grid-C.jpg"
              alt="model-s-interior"
            />
          </div>
          <div className="p-2 m-2 pb-10 md:pb-4 md:w-1/2 md:px-8 xl:px-16 ">
            <h3 className="mb-3">Room for Everything</h3>
            <p className="text-sm md:text-md text-gray-300">
              With front and rear trunks and fold-flat seats you can fit your
              bike without taking the wheel off—and your luggage too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorGrid;
