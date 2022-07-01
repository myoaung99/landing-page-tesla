import React from "react";
import ResponsiveImage from "../ui/responsive-image";

const Interior = () => {
  return (
    <section className="w-full min-h-screen bg-black pt-10  ">
      <h1 className="text-white text-center text-3xl md:text-5xl lg:text-6xl xl:py-10">
        Interior
      </h1>

      <ResponsiveImage
        className="w-full h-full object-cover object-center mt-16"
        mobileSrc="/images/model-s/mobile/Interior-Hero-Mobile.webp"
        desktopSrc="/images/model-s/Interior-Hero-Desktop.webp"
        alt="model s interior"
      />
    </section>
  );
};

export default Interior;
