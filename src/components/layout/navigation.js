import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
import { AiOutlineRight } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const MobileMenu = ({ toggle }) => {
  const toggleMenu = () => {
    toggle();
  };
  return (
    <>
      <div className="absolute top-0 right-0 z-30 w-screen h-screen backdrop-blur-sm xl:hidden">
        <div className="fixed h-screen z-40 w-3/4 md:w-2/4  right-0 top-0 bg-white xl:hidden ">
          <div className="h-16">
            <button
              onClick={toggleMenu}
              className=" float-right my-6 mr-8 text-2xl border-2 border-black border-opacity-25 rounded-full p-2 "
            >
              <GrClose />
            </button>
          </div>
          <ul className="menu-list w-full h-screen pb-48 flex flex-col text-center mt-2 items-start overflow-scroll ">
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Model S
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Model 3
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Model X
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Model Y
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Solar Roof
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Solar Panels
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Existing Inventory
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Used Inventory
              </li>
            </NavLink>
            <NavLink to="/">
              {" "}
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Trade-in
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Test Drive
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Insurance
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Powerwall
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Commercial Energy
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Utilities
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Charging
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Find Us
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Support
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Investor Relations
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Shop
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2">
                Account
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2 flex justify-between items-center w-full">
                <span> More</span>
                <span className="mr-14">
                  <AiOutlineRight />
                </span>
              </li>
            </NavLink>
            <NavLink to="/">
              {" "}
              <li className="menu-list-item cursor-pointer ml-10 p-2 mb-2 flex">
                <TbWorld size={36} strokeWidth={1} />

                <div className="flex flex-col items-start pl-5">
                  <span>United States</span>
                  <span>English</span>
                </div>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

// z-index 10 navbar
const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // show hide mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <header>
      <nav className="container h-16 flex items-center justify-between fixed top-0 left-1/2 -translate-x-1/2 z-10 ">
        <NavLink to="/">
          <h2 className="logo p-2 hover:cursor-pointer">
            <svg
              className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
              viewBox="0 0 342 35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z"
                fill="currentColor"
              ></path>
            </svg>
          </h2>
        </NavLink>

        <ul className="hidden xl:flex items-center justify-between px-1  ">
          <NavLink to="/">
            <li className="px-4 py-1 rounded-xl hover:bg-gray-400 hover:bg-opacity-30 mx-1 hover:cursor-pointer ">
              Modal S
            </li>
          </NavLink>
          <NavLink to="/">
            <li className="px-4 py-1 rounded-xl hover:bg-gray-400 hover:bg-opacity-30 mx-1 hover:cursor-pointer">
              Modal 3
            </li>
          </NavLink>
          <NavLink to="/">
            <li className="px-4 py-1 rounded-xl hover:bg-gray-400 hover:bg-opacity-30 mx-1 hover:cursor-pointer">
              Modal X
            </li>
          </NavLink>
          <NavLink to="/">
            <li className="px-4 py-1 rounded-xl hover:bg-gray-400 hover:bg-opacity-30 mx-1 hover:cursor-pointer">
              Modal Y
            </li>
          </NavLink>
          <NavLink to="/">
            <li className="px-4 py-1 rounded-xl hover:bg-gray-400 hover:bg-opacity-30 mx-1 hover:cursor-pointer">
              Modal Y
            </li>
          </NavLink>
          <NavLink to="/">
            <li className="px-4 py-1 rounded-xl hover:bg-gray-400 hover:bg-opacity-30 mx-1 hover:cursor-pointer">
              Modal Y
            </li>
          </NavLink>
        </ul>

        <ul className="hidden xl:flex items-center justify-between actions">
          <NavLink to="/">
            <li className="px-4 py-1 rounded-xl hover:bg-gray-400 hover:bg-opacity-30 mx-1 hover:cursor-pointer">
              Shop
            </li>
          </NavLink>
          <NavLink to="/">
            <li className="px-4 py-1 rounded-xl hover:bg-gray-400 hover:bg-opacity-30 mx-1 hover:cursor-pointer">
              Account
            </li>
          </NavLink>
          <NavLink to="/">
            <li className="px-4 py-1 rounded-xl hover:bg-gray-400 hover:bg-opacity-30 mx-1 hover:cursor-pointer">
              Menu
            </li>
          </NavLink>
        </ul>

        {/* toggle button */}
        <button
          onClick={toggleMobileMenu}
          className="xl:hidden px-5 py-1 mr-5 rounded-md bg-gray-400 bg-opacity-50"
        >
          {showMobileMenu ? "" : "Menu"}
        </button>
        {showMobileMenu ? <MobileMenu toggle={toggleMobileMenu} /> : ""}
      </nav>
    </header>
  );
};

export default Navigation;
