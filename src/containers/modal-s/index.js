import React from "react";
import CarouselVideo from "../../components/modal-s/feature-carousel-vd";
import Interior from "../../components/modal-s/interior-section";
import SectionOne from "../../components/modal-s/section-one";

const ModelS = () => {
  return (
    <div className="model-s-section">
      <SectionOne />
      <Interior />
      <CarouselVideo />
    </div>
  );
};

export default ModelS;
