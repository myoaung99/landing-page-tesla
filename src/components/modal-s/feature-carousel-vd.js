import React from "react";
import Slider from "react-slick";

const CarouselVideo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    rows: 2,
    fade: true,
    autoplay: true,
    autoplaySpeed: 12000,
  };
  return (
    <section className="bg-black py-16">
      <Slider {...settings} className=" flex items-center">
        <div className="px-2 md:px-10">
          <video
            autoPlay
            playsInline
            loop
            muted
            className="rounded-xl md:rounded-3xl"
          >
            <source
              src="/videos/Model-S-Interior-Carousel-1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="px-4 py-4 mt-10 shadow-md text-sm bg-black md:px-10 lg:px-20 xl:px-48">
          <div className="lg:px-40">
            <h3 className=" text-white bold mb-4">Cinematic Experience</h3>
            <p className="text-sm text-gray-300">
              A 17” touchscreen with left-right tilt offers 2200 x 1300
              resolution, true colors and exceptional responsiveness for gaming,
              movies and more.
            </p>
          </div>
        </div>
        <div className="px-2 md:px-10">
          <video
            autoPlay
            playsInline
            loop
            muted
            className="rounded-xl md:rounded-3xl"
          >
            <source
              src="/videos/Model-S-Interior-Carousel-2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="px-4 py-4 mt-10 shadow-md text-sm bg-black md:px-10 lg:px-20 xl:px-48">
          <div className="lg:px-40">
            <h3 className=" text-white bold mb-6">Yoke Steering</h3>
            <p className="text-sm text-gray-300">
              A bold new approach gives you a true connection to Model S,
              offering better steering feel and unobstructed views of your dash
              and the road ahead. Tap the brake and Model S automatically
              selects the correct direction to start your trip.
            </p>
          </div>
        </div>

        <div className="px-2 md:px-10 ">
          <video
            autoPlay
            playsInline
            loop
            muted
            className="rounded-xl md:rounded-3xl "
          >
            <source
              src="/videos/Model-S-Interior-Carousel-3.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="px-4 py-4 mt-10 shadow-md text-sm bg-black md:px-10 lg:px-20 xl:px-48">
          <div className="lg:px-40">
            {" "}
            <h3 className=" text-white bold mb-6"> Perfect Environment</h3>
            <p className="text-sm text-gray-300">
              Air vents are hidden throughout the cabin, while tri-zone
              temperature controls, ventilated seats and HEPA filtration deliver
              the perfect environment.
            </p>
          </div>
        </div>
        <div className="px-2 md:px-10">
          <video
            autoPlay
            playsInline
            loop
            muted
            className="rounded-xl md:rounded-3xl"
          >
            <source
              src="/videos/Model-S-Interior-Carousel-4.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="px-4 py-4 mt-10 shadow-md text-sm bg-black md:px-10 lg:px-20 xl:px-48">
          <div className="lg:px-40">
            <h3 className=" text-white bold mb-6"> Redesigned Second Row</h3>
            <p className="text-sm text-gray-300">
              Seating for three adults, with extra legroom, headroom and a
              stowable armrest with integrated storage and wireless charging.
            </p>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default CarouselVideo;
