import React from "react";
import EfficientDesign from "../../components/modal-s/design-for-efficiency";
import ElectricPowertrain from "../../components/modal-s/electric-powertrain";
import ExteriorGrid from "../../components/modal-s/exterior-grid";
import CarouselVideo from "../../components/modal-s/feature-carousel-vd";
import InteriorGrid from "../../components/modal-s/interior-grid";
import Interior from "../../components/modal-s/interior-section";
import Footer from "../../components/modal-s/model-s-footer";
import BeyondLudicrous from "../../components/modal-s/plaid-beyond";
import SectionOne from "../../components/modal-s/section-one";
import Layout from "../../components/layout/layout";

const ModelS = () => {
  return (
    <>
      <Layout position="absolute" className="overflow-hidden">
        <div className="model-s-section">
          <SectionOne />
          <Interior />
          <CarouselVideo />
          <InteriorGrid />
          <BeyondLudicrous />
          <ElectricPowertrain />
          <EfficientDesign />
          <ExteriorGrid />
          <Footer />
        </div>
      </Layout>
    </>
  );
};

export default ModelS;
