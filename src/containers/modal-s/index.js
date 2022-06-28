import React from "react";
import CarouselVideo from "../../components/modal-s/feature-carousel-vd";
import InteriorGrid from "../../components/modal-s/interior-grid";
import Interior from "../../components/modal-s/interior-section";
import SectionOne from "../../components/modal-s/section-one";

const ModelS = () => {
  return (
    <div className="model-s-section">
      <SectionOne />
      <Interior />
      <CarouselVideo />
      <InteriorGrid />
    </div>
  );
};

export default ModelS;
