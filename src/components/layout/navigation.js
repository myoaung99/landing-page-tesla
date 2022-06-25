import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const MobileMenu = ({ toggle }) => {
  const toggleMenu = () => {
    toggle();
  };
  return (
    <>
      <div className="absolute top-0 right-0 z-50 w-screen h-screen backdrop-blur-sm">
        <div className="fixed h-screen z-40 w-3/4 md:w-2/4  right-0 top-0 bg-white xl:hidden backdrop-blur-sm">
          <div className="h-20">
            <button
              onClick={toggleMenu}
              className="p-8 float-right mr-16 text-3xl"
            >
              X
            </button>
          </div>
          <ul className="menu-list flex flex-col text-center mb-2 items-start">
            <li className="menu-list-item cursor-pointer ml-10 p-2">Home</li>
            <li className="menu-list-item cursor-pointer ml-10 p-2">Home</li>
            <li className="menu-list-item cursor-pointer ml-10 p-2">Home</li>
            <li className="menu-list-item cursor-pointer ml-10 p-2">Home</li>
            <li className="menu-list-item cursor-pointer ml-10 p-2">Home</li>
            <li className="menu-list-item cursor-pointer ml-10 p-2">Home</li>
            <li className="menu-list-item cursor-pointer ml-10 p-2">Home</li>
            <li className="menu-list-item cursor-pointer ml-10 p-2">Home</li>
            <li className="menu-list-item cursor-pointer ml-10 p-2">Home</li>
            <li className="menu-list-item cursor-pointer ml-10 p-2">Home</li>
            <li className="menu-list-item cursor-pointer ml-10 p-2">Home</li>
            <li className="menu-list-item cursor-pointer ml-10 p-2">Home</li>
            <li className="menu-list-item cursor-pointer ml-10 p-2">Home</li>
            <li className="menu-list-item cursor-pointer ml-10 p-2">Home</li>
            <li className="menu-list-item cursor-pointer ml-10 p-2">Home</li>
            <li className="menu-list-item cursor-pointer ml-10 p-2">Home</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // show hide mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <header className="">
      <nav className="navbar container h-16 flex items-center justify-between fixed top-0 left-1/2 -translate-x-1/2 z-10 ">
        <h2 className="logo px-4">
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

        <ul className="hidden lg:flex items-center justify-between px-1  ">
          <li className="pt-1 px-2 mx-2">Modal S</li>
          <li className="pt-1 px-2 mx-2">Modal 3</li>
          <li className="pt-1 px-2 mx-2">Modal X</li>
          <li className="pt-1 px-2 mx-2">Modal Y</li>
          <li className="pt-1 px-2 mx-2">Modal Y</li>
          <li className="pt-1 px-2 mx-2">Modal Y</li>
        </ul>

        <ul className="hidden lg:flex items-center justify-between actions">
          <li className="pt-1 px-2 mx-1">Shop</li>
          <li className="pt-1 px-2 mx-1">Account</li>
          <li className="pt-1 px-2 mx-1">Menu</li>
        </ul>

        {/* toggle button */}
        <button onClick={toggleMobileMenu} className="lg:hidden px-3">
          {showMobileMenu ? "Close" : "Menu"}
        </button>
        {showMobileMenu ? <MobileMenu toggle={toggleMobileMenu} /> : ""}
      </nav>
    </header>
  );
};

export default Navigation;
