import React from "react";

const Footer = () => {
  return (
    <div className="container px-6 md:max-w-xl h-12 absolute -bottom-20 md:-bottom-32 lg:-bottom-48 xl:-bottom-40 left-1/2 -translate-x-1/2">
      <ul className="flex justify-evenly flex-wrap">
        <li className="w-24 mx:w-auto mb-2 md:mb-0 text-xs hover:cursor-pointer ">
          Tesla 2022
        </li>
        <li className="w-24 mx:w-auto mb-2 md:mb-0 text-xs hover:cursor-pointer whitespace-nowrap">
          Pravicy & Legal
        </li>
        <li className="w-24 mx:w-auto mb-2 md:mb-0 text-xs hover:cursor-pointer whitespace-nowrap">
          Vehicle Recalls
        </li>
        <li className="w-24 mx:w-auto mb-2 md:mb-0 text-xs hover:cursor-pointer">
          Contact
        </li>
        <li className="w-24 mx:w-auto mb-2 md:mb-0 text-xs hover:cursor-pointer">
          Careers
        </li>
        <li className="w-24 mx:w-auto mb-2 md:mb-0 text-xs hover:cursor-pointer">
          News
        </li>
        <li className="w-24 mx:w-auto mb-2 md:mb-0 text-xs hover:cursor-pointer">
          Engage
        </li>
        <li className="w-24 mx:w-auto mb-2 md:mb-0 text-xs hover:cursor-pointer">
          Locations
        </li>
        <li className="w-24 mx:w-auto mb-2 md:mb-0 text-xs hover:cursor-pointer">
          Copy Right
        </li>
      </ul>
    </div>
  );
};

export default Footer;
