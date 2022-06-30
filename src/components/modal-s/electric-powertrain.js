import React from "react";
import Slider from "react-slick";

const ElectricPowertrain = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    rows: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className="w-full mt-16 md:mt-0 lg:py-14 pb-16 bg-gray-100">
      <div className="p-6 ">
        <h2 className="text-3xl mb-5">Electric Powertrain</h2>
        <p className="text-gray-700 xl:w-4/5 tracking-wide">
          Model S platforms unite powertrain and battery technologies for
          unrivaled performance, range and efficiency. New module and pack
          thermal architecture allows faster charging and gives you more power
          and endurance in all conditions.
        </p>
      </div>

      <div className="mt-10 mb-20">
        <Slider {...settings} className="">
          <div className="lg:h-screen">
            <div className="w-full h-56 lg:h-2/4 xl:h-4/6 mb-5 bg-small-dual-engine md:bg-large-dual-engine bg-center bg-cover"></div>
            <div className="">
              <div className="mx-6 p-2 border-2 border-t-4 border-t-black">
                <h3 className="">Model S</h3>
                <p className="py-4 text-gray-700 tracking-wide md:w-3/4">
                  Dual Motor All-Wheel Drive unlocks more range than any other
                  vehicle in our current lineup, with insane power and maximum
                  control.
                </p>
                <div className="md:flex md:items-center">
                  <div>
                    <p className="text-2xl font-semibold">3.1s</p>
                    <p className="text-gray-700">0-60 mph</p>
                  </div>
                  <div className="py-4 md:mx-20">
                    <p className="text-2xl font-semibold">405 mi</p>
                    <p className="text-gray-700">Range (EPA est.)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">670 hp</p>
                    <p className="text-gray-700">Peak Power</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:h-screen">
            <div className="w-full h-56 lg:h-2/4 xl:h-4/6 mb-5 bg-small-dual-engine md:bg-large-tri-engine bg-center bg-cover"></div>
            <div className="">
              <div className="mx-6 p-2 border-2 border-t-4 border-t-black">
                <h3 className="">Model S Plaid</h3>
                <p className="py-4 text-gray-700 tracking-wide md:w-3/4">
                  Maintain 1,000+ horsepower all the way to 200 mph with
                  Tri-Motor All-Wheel Drive, featuring torque vectoring and
                  three independent carbon-sleeved rotors.
                </p>
                <div className="md:flex md:items-center">
                  <div>
                    <p className="text-2xl font-semibold">1.99s</p>
                    <p className="text-gray-700">0-60 mph</p>
                  </div>
                  <div className="py-4 md:mx-20">
                    <p className="text-2xl font-semibold">396 mi</p>
                    <p className="text-gray-700">Range (EPA est.)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">1020 hp</p>
                    <p className="text-gray-700">Peak Power</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ElectricPowertrain;
