import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-hook-inview";
import { motion, useAnimation } from "framer-motion";

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

const Section = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section
      id="modalS"
      className="transition-all h-screen w-full relative snap-center"
    >
      <motion.div
        ref={ref}
        variants={actionVariant}
        initial="hidden"
        animate={control}
        className="absolute top-28 md:top-32 lg:top-20 left-1/2 -translate-x-1/2  mx-auto text-center"
      >
        <h1 className="text-5xl mb-2">Model 3</h1>
        <p className="text-sm tracking-wider whitespace-nowrap">
          Order Online for{" "}
          <Link to="/">
            <span className="underline underline-offset-4">
              Touchless Delivery
            </span>
          </Link>
        </p>
      </motion.div>
      <div className=" h-screen w-full">
        <div className="bg-small-model-3 md:bg-large-model-3 bg-center bg-cover h-full w-full"></div>
      </div>

      <motion.div
        ref={ref}
        variants={actionVariant}
        initial="hidden"
        animate={control}
        className="absolute left-1/2 bottom-28 lg:bottom-24 -translate-x-1/2 w-full lg:w-1/2 flex flex-col md:flex-row md:justify-around md:px-10 "
      >
        <button className="rounded-full bg-zinc-600 mx-6 md:mx-0 mb-3 md:mb-0 py-3 md:px-20 uppercase text-white md:mr-6 text-xs font-bold tracking-wide">
          customer order
        </button>
        <button className="rounded-full bg-slate-100 mx-6 md:mx-0 py-3 md:px-20 uppercase text-xs font-bold tracking-wide">
          existing inventory
        </button>
      </motion.div>
    </section>
  );
};

export default Section;
