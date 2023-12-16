/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars2Icon, ChevronDownIcon } from "@heroicons/react/20/solid";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="w-full px-10 py-4 flex justify-between items-center fixed top-0 bg-white">
      <div>
        <img
          src="/images/LOGO.png"
          alt=""
        />
      </div>
      <div
        className="md:hidden lg:hidden h-8 flex justify-end w-8"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <Bars2Icon className="rotate-90 transition-all duration-300" />
        ) : (
          <Bars2Icon className="transition-all duration-300" />
        )}
      </div>
      {isMenuOpen && (
        <div className="absolute bg-white top-16 right-0 flex w-3/4 lg:w-[65%] flex-col lg:flex-row gap-2 justify-end items-end px-10 ">
          <div className="flex flex-col gap-[20px] text-right">
            <Link
              className="hover:font-semibold"
              href="#"
            >
              Home
            </Link>
            <Link
              className="hover:font-semibold"
              href="#"
            >
              Properties
            </Link>
            <div className="relative flex text-right w-16 self-end">
              <span
                onClick={toggleDropdown}
                className={`${
                  isDropdownOpen ? "font-semibold" : ""
                } cursor-pointer`}
              >
                Learn
              </span>
              {isDropdownOpen ? (
                <ChevronDownIcon className="rotate-180" />
              ) : (
                <ChevronDownIcon />
              )}
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 p-2 rounded-md w-36 flex flex-col">
                  <Link
                    className="hover:font-semibold"
                    href="#"
                  >
                    Option 1
                  </Link>
                  <Link
                    className="hover:font-semibold"
                    href="#"
                  >
                    Option 2
                  </Link>
                  {/* Add more dropdown options as needed */}
                </div>
              )}
            </div>
            <Link
              className="hover:font-semibold"
              href="#"
            >
              About Us
            </Link>
            <Link
              className="hover:font-semibold"
              href="#"
            >
              Contact
            </Link>
          </div>
          <hr className="bg-gray-500 border border-gray-500 w-5 rotate-90 hidden lg:block" />
          <div className="flex gap-[35px]">
            <button className="hover:font-semibold">Login</button>
            <button className="bg-[#527853] px-3 py-2 text-white rounded-md hover:bg-[#6a9742] hover:font-semibold transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      )}
      <div className="hidden md:flex lg:flex w-full lg:w-[65%] flex-col lg:flex-row gap-2 justify-between items-center  ">
        <div className="flex gap-[42px]">
          <Link
            className="hover:font-semibold"
            href="#"
          >
            Home
          </Link>
          <Link
            className="hover:font-semibold"
            href="#"
          >
            Properties
          </Link>
          <div className="relative flex w-16">
            <span
              onClick={toggleDropdown}
              className={`${
                isDropdownOpen ? "font-semibold" : ""
              } cursor-pointer`}
            >
              Learn
            </span>
            {isDropdownOpen ? (
              <ChevronDownIcon className="rotate-180" />
            ) : (
              <ChevronDownIcon />
            )}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 p-2 rounded-md w-36 flex flex-col">
                <Link
                  className="hover:font-semibold"
                  href="#"
                >
                  Option 1
                </Link>
                <Link
                  className="hover:font-semibold"
                  href="#"
                >
                  Option 2
                </Link>
                {/* Add more dropdown options as needed */}
              </div>
            )}
          </div>
          <Link
            className="hover:font-semibold"
            href="#"
          >
            About Us
          </Link>
          <Link
            className="hover:font-semibold"
            href="#"
          >
            Contact
          </Link>
        </div>
        <hr className="bg-gray-500 border border-gray-500 w-5 rotate-90 hidden lg:block" />
        <div className="flex gap-[35px]">
          <button className="hover:font-semibold">Login</button>
          <button className="bg-[#527853] px-3 py-2 text-white rounded-md hover:bg-[#6a9742] hover:font-semibold transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
