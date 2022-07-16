import React from "react";
import Footer from "../layout/footer";
import { Link } from "react-router-dom";


const Button = (props) => {
  const classes = `${props.className} rounded-full mx-2 md:mx-0 mb-3 md:mb-0 py-2 md:px-16 xl:py-2 uppercase text-xs  font-bold tracking-wide`;
  return (
    <button className={classes}>
      <Link to="/">{props.children}</Link>
    </button>
  );
};

export default Button;

export const AccessoriesButtons = () => {
  return (
    <>
      {" "}
      <Button className="bg-zinc-600 text-white w-full md:w-1/2 mb-32 mx-auto ">
        shop now
      </Button>
      <Footer />
    </>
  );
};

export const SectionButtons = ({ type }) => {
  return (
    <>
      <Button className="bg-zinc-600 text-white mb-3 md:mr-6">
        {type === "solar" ? "order now" : "customer order"}
      </Button>

      <Button className=" bg-gray-200">
        {type === "solar" ? "learn more" : "existing inventory"}
      </Button>
    </>
  );
};
