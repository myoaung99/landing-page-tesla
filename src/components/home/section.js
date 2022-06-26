import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-hook-inview";
import { motion, useAnimation } from "framer-motion";
import Footer from "../layout/footer";

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

  const imgClasses = `${bgImg} bg-center bg-cover h-full w-full`;

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  if (model === "Model 3") {
    return (
      <section className="transition-all h-screen w-full relative snap-center">
        <div className="absolute top-28 md:top-32 lg:top-48 xl:top-20 left-1/2 -translate-x-1/2  mx-auto text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-5xl lg:text-6xl xl:text-5xl mb-2"
          >
            Model 3
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="text-sm lg:text-lg xl:text-sm tracking-wider whitespace-nowrap"
          >
            Order Online for{" "}
            <Link to="/">
              <span className="underline underline-offset-4">
                Touchless Delivery
              </span>
            </Link>
          </motion.p>
        </div>
        <div className="h-screen w-full">
          <div className="bg-small-model-3 md:bg-large-model-3 bg-center bg-cover h-full w-full"></div>
        </div>

        <div className="absolute left-1/2 bottom-28 lg:bottom-48 xl:bottom-24 -translate-x-1/2 w-full xl:w-1/2 flex flex-col md:flex-row md:justify-center px-6 md:px-10 ">
          <motion.button
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="rounded-full bg-zinc-600 mx-2 md:mx-0 mb-3 md:mb-0 py-3 md:px-16 lg:py-4 xl:py-2 uppercase text-white md:mr-6 text-xs lg:text-sm xl:text-xs font-bold tracking-wide"
          >
            <Link to="/"> customer order</Link>
          </motion.button>
          <motion.button
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="rounded-full bg-gray-200 mx-2 md:mx-0 mb-3 md:mb-0 py-3 md:px-16 lg:py-4 xl:py-2 uppercase text-xs lg:text-sm xl:text-xs font-bold tracking-wide"
          >
            <Link to="/"> existing inventory</Link>
          </motion.button>
        </div>
      </section>
    );
  }

  let actions = (
    <motion.div
      ref={ref}
      variants={actionVariant}
      initial="hidden"
      animate={control}
      className="absolute left-1/2 bottom-28 lg:bottom-48 xl:bottom-24 -translate-x-1/2 w-full xl:w-1/2 flex flex-col items-stretch md:flex-row md:justify-center px-6 md:px-10  "
    >
      <button className=" rounded-full bg-zinc-600 mx-2 md:mx-0 mb-3 md:mb-0 py-3 md:px-16 lg:py-4 xl:py-2 uppercase text-white md:mr-6 text-xs lg:text-sm xl:text-xs font-bold tracking-wide">
        <Link to="/">{type === "solar" ? "order now" : "customer order"}</Link>
      </button>

      <button className=" rounded-full bg-gray-200 mx-2 md:mx-0 mb-3 md:mb-0 py-3 md:px-16 lg:py-4 xl:py-2 uppercase  text-xs lg:text-sm xl:text-xs font-bold tracking-wide">
        <Link to="/">
          {" "}
          {type === "solar" ? "learn more" : "existing inventory"}
        </Link>
      </button>
    </motion.div>
  );

  return (
    <section
      id={model}
      className="transition-all h-screen w-full relative snap-center"
    >
      <motion.div
        ref={ref}
        variants={actionVariant}
        initial="hidden"
        animate={control}
        className="absolute top-28 md:top-32 lg:top-48 xl:top-20 left-1/2 -translate-x-1/2  mx-auto text-center"
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
      <div className=" h-screen w-full">
        <div className={imgClasses}></div>
      </div>

      <motion.div
        ref={ref}
        variants={actionVariant}
        initial="hidden"
        animate={control}
        className="absolute left-1/2 bottom-28 lg:bottom-48 xl:bottom-36 -translate-x-1/2 w-full xl:w-1/2 flex flex-col items-stretch md:flex-row md:justify-center px-6 md:px-10  "
      >
        {type === "accessories" ? (
          <>
            {" "}
            <button className="mb-14 md:mb-0 rounded-full bg-zinc-600 md:mx-0 py-3 md:px-20 lg:py-4 xl:py-2 uppercase text-white  text-xs lg:text-sm xl:text-xs font-bold tracking-wide">
              <Link to="/">shop now</Link>
            </button>
            <Footer />
          </>
        ) : (
          <>
            <button className=" rounded-full bg-zinc-600 mx-2 md:mx-0 mb-3 md:mb-0 py-3 md:px-16 lg:py-4 xl:py-2 uppercase text-white md:mr-6 text-xs lg:text-sm xl:text-xs font-bold tracking-wide">
              <Link to="/">
                {type === "solar" ? "order now" : "customer order"}
              </Link>
            </button>

            <button className=" rounded-full bg-gray-200 mx-2 md:mx-0 mb-3 md:mb-0 py-3 md:px-16 lg:py-4 xl:py-2 uppercase  text-xs lg:text-sm xl:text-xs font-bold tracking-wide">
              <Link to="/">
                {" "}
                {type === "solar" ? "learn more" : "existing inventory"}
              </Link>
            </button>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default Section;
