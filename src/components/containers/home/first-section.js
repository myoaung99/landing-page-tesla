import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FirstSection = () => {
  return (
    <section
      id="modalS"
      className="transition-all h-screen w-full relative snap-center"
    >
      <div className="absolute top-28 md:top-32 lg:top-20 left-1/2 -translate-x-1/2  mx-auto text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-5xl mb-2"
        >
          Model 3
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="text-sm tracking-wider whitespace-nowrap"
        >
          Order Online for{" "}
          <Link to="/">
            <span className="underline underline-offset-4">
              Touchless Delivery
            </span>
          </Link>
        </motion.p>
      </div>
      <div className=" h-screen w-full">
        <div className="bg-small-model-3 md:bg-large-model-3 bg-center bg-cover h-full w-full"></div>
      </div>

      <div className="absolute left-1/2 bottom-28 lg:bottom-24 -translate-x-1/2 w-full lg:w-1/2 flex flex-col md:flex-row md:justify-around md:px-10 ">
        <motion.button
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="rounded-full bg-zinc-600 mx-6 md:mx-0 mb-3 md:mb-0 py-3 md:px-20 uppercase text-white md:mr-6 text-xs font-bold tracking-wide"
        >
          customer order
        </motion.button>
        <motion.button
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="rounded-full bg-slate-100 mx-6 md:mx-0 py-3 md:px-20 uppercase text-xs font-bold tracking-wide"
        >
          existing inventory
        </motion.button>
      </div>
    </section>
  );
};

export default FirstSection;
