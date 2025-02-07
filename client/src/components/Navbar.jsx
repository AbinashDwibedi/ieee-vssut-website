import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar z-30 flex px-4 justify-between items-center md:items-stretch h-16 fixed shadow-2xl transition-all ease-in-out duration-300">
      <div className="flex items-center left-nav -translate-x-4">
        <img
          className="h-20 pb-2 transition-all ease-in-out duration-300"
          src="https://ieee-induction-2024.vercel.app/IEEE.png"
          alt="IEEE Logo"
        />
      </div>
      <div className={`absolute right-nav transition-all flex items-center justify-center ${isMenuOpen ? "right-4" : "-right-full"} top-20 md:static`}>
        <ul className="md:flex text-white gap-2 md:gap-1 flex flex-col md:flex-row bg-secondary md:bg-transparent p-2 md:p-0  rounded-lg">
          <li>
            <a
              className="px-12 md:bg-transparent md:px-2 md:py-2 md:rounded-none bg-primary py-2 w-full block rounded-lg md:text-sm text-lg text-center font-medium border-b-2 border-transparent hover:border-white transition-all decoration-color_2 decoration-4"
              href="#HOME"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              className="px-12 md:bg-transparent md:px-2 md:py-2 md:rounded-none bg-primary py-2 w-full block rounded-lg md:text-sm text-lg text-center font-medium border-b-2 border-transparent hover:border-white transition-all decoration-color_2 decoration-4"
              href="#ABOUT"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              className="px-12 md:bg-transparent md:px-2 md:py-2 md:rounded-none bg-primary py-2 w-full block rounded-lg md:text-sm text-lg text-center font-medium border-b-2 border-transparent hover:border-white transition-all decoration-color_2 decoration-4"
              href="#CONTACT"
            >
              CONTACT
            </a>
          </li>
          <li>
            <a
              className="px-12 md:bg-transparent md:px-2 md:py-2 md:rounded-none bg-primary py-2 w-full block rounded-lg md:text-sm text-lg text-center font-medium border-b-2 border-transparent hover:border-white transition-all decoration-color_2 decoration-4"
              href="#DOMAINS"
            >
              DOMAINS
            </a>
          </li>
          {/* INDUCTION Button with Default and Hover Background Colors */}
          <li className="relative ">
            <Link
              className="induction-btn px-12   md:px-2 md:py-2  bg-white py-2 w-full block rounded-lg md:text-sm text-lg font-mono text-center font-medium border-text-lg b-2 border-transparent transition-all text-black hover:bg-primary  hover:text-white"
              to="/induction"
            >
              INDUCTION
              
            </Link>
            <div className="h-4 w-4 absolute bg-gray -right-1 -top-1 rounded-full bg-white animate-ping "></div>
          </li>
        </ul>
      </div>
      <div className="hamburger md:hidden">
        <button onClick={toggleMenu} className="text-white text-3xl">
          {isMenuOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
