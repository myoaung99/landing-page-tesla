import React from "react";

const Footer = () => {
  return (
    <div className="container px-6 md:max-w-xl h-14 absolute -bottom-20 md:-bottom-28 lg:-bottom-40 xl:-bottom-24 left-1/2 -translate-x-1/2">
      <ul className="flex justify-start flex-wrap gap-x-1">
        <li className="w-24 mx:w-auto pb-2 md:mb-0 text-xs hover:cursor-pointer ">
          Tesla 2022
        </li>
        <li className="w-24 mx:w-auto pb-2 md:mb-0 text-xs hover:cursor-pointer whitespace-nowrap">
          Pravicy & Legal
        </li>
        <li className="w-24 mx:w-auto pb-2 md:mb-0 text-xs hover:cursor-pointer whitespace-nowrap">
          Vehicle Recalls
        </li>
        <li className="w-24 mx:w-auto pb-2 md:mb-0 text-xs hover:cursor-pointer">
          Contact
        </li>
        <li className="w-24 mx:w-auto pb-2 md:mb-0 text-xs hover:cursor-pointer">
          Careers
        </li>
        <li className="w-24 mx:w-auto pb-2 md:mb-0 text-xs hover:cursor-pointer">
          News
        </li>
        <li className="w-24 mx:w-auto pb-2 md:mb-0 text-xs hover:cursor-pointer">
          Engage
        </li>
        <li className="w-24 mx:w-auto pb-2 md:mb-0 text-xs hover:cursor-pointer">
          Locations
        </li>
        <li className="w-24 mx:w-auto pb-2 md:mb-0 text-xs hover:cursor-pointer">
          Copy Right
        </li>

        <li className="w-24 mx:w-auto pb-2 md:mb-0 text-xs hover:cursor-pointer">
          Presented by Myo
        </li>
      </ul>
    </div>
  );
};

export default Footer;
