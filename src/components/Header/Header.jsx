import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/schoolLogo.png";

function Header() {
  const schoolRed = "#a51834";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* 🔥 Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-[70px] font-['Poppins'] font-bold w-full">
        <div className="flex justify-between items-center max-w-[1300px] mx-auto px-4 h-full">
          <Link to="/" className="header-logo flex items-center">
            <img src={logo} alt="St Carmel School Logo" className="h-[75px]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex-grow flex justify-center text-center hidden md:flex">
            <ul className="list-none flex m-0 p-0 items-center">
              <li className="mx-6">
                <Link
                  to="/"
                  className="text-gray-900 font-bold text-base hover:text-[#a51834] transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li className="mx-6">
                <Link
                  to="/admission"
                  className="text-gray-900 font-bold text-base hover:text-[#a51834] transition duration-300"
                >
                  Admission & Fees
                </Link>
              </li>
              <li className="mx-6">
                <Link
                  to="/academics"
                  className="text-gray-900 font-bold text-base hover:text-[#a51834] transition duration-300"
                >
                  Our Academics
                </Link>
              </li>
              <li className="mx-6">
                <Link
                  to="/courses"
                  className="text-gray-900 font-bold text-base hover:text-[#a51834] transition duration-300"
                >
                  Our Courses
                </Link>
              </li>
              <li className="mx-6">
                <Link
                  to="/contact"
                  className="text-gray-900 font-bold text-base hover:text-[#a51834] transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4 relative">
            {/* Desktop Login Button */}
            <button
              className={`hidden md:block bg-transparent 
                border-2 border-[#a51834] text-[#a51834] 
                font-medium text-base py-2 px-6 rounded-full 
                cursor-pointer transition-all duration-300 ease-in-out 
                hover:bg-[#a51834] hover:text-white hover:shadow-lg focus:outline-none`}
            >
              Login
            </button>

            {/* Apply Now Button */}
            <button
              className={`bg-[#a51834] text-white font-medium text-base py-2 px-6 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-[#ab0d2c] hover:shadow-xl`}
            >
              Apply Now
            </button>

            {/* Mobile Menu/Hamburger Icon */}
            <button
              className="md:hidden text-gray-700 focus:outline-none ml-4"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* --- Mobile Side Drawer Menu --- */}
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleMobileMenu}
          ></div>

          {/* Actual Menu Panel */}
          <div
            className={`absolute top-0 right-0 h-full bg-white shadow-2xl w-[70%] sm:w-[40%] transition-transform duration-300 ease-in-out transform 
              ${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-900 text-2xl font-bold"
                >
                  &times;
                </button>
              </div>

              <ul className="list-none flex flex-col p-0 m-0 w-full">
                {/* Login Button (Mobile menu) */}
                <li className="w-full mb-4">
                  <button
                    onClick={toggleMobileMenu}
                    className={`w-full bg-transparent border-2 border-[#a51834] text-[#a51834] font-medium text-base py-2 px-6 rounded-full transition hover:bg-[#a51834] hover:text-white`}
                  >
                    Login
                  </button>
                </li>

                {/* Navigation Links */}
                <li className="w-full py-3 hover:bg-gray-100 border-b border-gray-200">
                  <Link
                    to="/"
                    className="text-gray-900 font-bold text-base block w-full hover:text-[#a51834]"
                    onClick={toggleMobileMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="w-full py-3 hover:bg-gray-100 border-b border-gray-200">
                  <Link
                    to="/admission"
                    className="text-gray-900 font-bold text-base block w-full hover:text-[#a51834]"
                    onClick={toggleMobileMenu}
                  >
                    Admission & Fees
                  </Link>
                </li>
                <li className="w-full py-3 hover:bg-gray-100 border-b border-gray-200">
                  <Link
                    to="/academics"
                    className="text-gray-900 font-bold text-base block w-full hover:text-[#a51834]"
                    onClick={toggleMobileMenu}
                  >
                    Our Academics
                  </Link>
                </li>
                <li className="w-full py-3 hover:bg-gray-100 border-b border-gray-200">
                  <Link
                    to="/courses"
                    className="text-gray-900 font-bold text-base block w-full hover:text-[#a51834]"
                    onClick={toggleMobileMenu}
                  >
                    Our Courses
                  </Link>
                </li>
                <li className="w-full py-3 hover:bg-gray-100">
                  <Link
                    to="/contact"
                    className="text-gray-900 font-bold text-base block w-full hover:text-[#a51834]"
                    onClick={toggleMobileMenu}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* 👇 Page content ke liye padding-top taaki header overlap na kare */}
      <div className="pt-[70px]"></div>
    </>
  );
}

export default Header;
