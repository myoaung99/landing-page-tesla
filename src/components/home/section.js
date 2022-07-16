import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-hook-inview";
import { motion, useAnimation } from "framer-motion";
import SectionOne from "./section-one";
import { SectionButtons, AccessoriesButtons } from "./section-button";

const actionVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Section = (props) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const { bgImg, model, type } = props;

  const imgClasses = `${bgImg} bg-center bg-cover h-screen w-full`;

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  if (model === "Model 3") {
    return <SectionOne />;
  }

  return (
    <section id={model} className=" h-screen w-full relative snap-center">
      <motion.div
        ref={ref}
        variants={actionVariant}
        initial="hidden"
        animate={control}
        className="absolute top-28 lg:top-16  xl:top-20 left-1/2 -translate-x-1/2  mx-auto text-center"
      >
        <h1 className="text-5xl lg:text-6xl xl:text-5xl mb-2">{model}</h1>
        <p className="text-sm lg:text-lg xl:text-sm tracking-wider whitespace-nowrap">
          Order Online for{" "}
          <Link to="/">
            <span className="underline underline-offset-4">
              Touchless Delivery
            </span>
          </Link>
        </p>
      </motion.div>

      <div className={imgClasses} />

      <motion.div
        ref={ref}
        variants={actionVariant}
        initial="hidden"
        animate={control}
        className="absolute left-1/2 bottom-28 lg:bottom-30 xl:bottom-24 -translate-x-1/2 w-full xl:w-1/2 flex flex-col
        items-stretch md:flex-row md:justify-center px-6 md:px-10  "
      >
        {type === "accessories" ? (
          <AccessoriesButtons />
        ) : (
          <SectionButtons type={type} />
        )}
      </motion.div>
    </section>
  );
};

export default Section;
