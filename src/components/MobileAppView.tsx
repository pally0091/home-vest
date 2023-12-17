/* eslint-disable @next/next/no-img-element */
import React from "react";

const MobileAppView: React.FC = () => {
  return (
    <div className="mt-20 mb-10 max-w-[1500px] mx-auto">
      <div className="flex ">
        <div className="text-left">
          <p className="text-[15px] text-[#ee7214]">Getting started is easy</p>
          <h3 className="text-[36px] font-semibold my-5">
            The Convenience You’d Expect from a Modern Investment Platform
          </h3>
          <p className="text-[15px]">
            Our state of the art platform allows investors to purchase
            SEC-compliant shares in a secure, convenient environment.
          </p>
          <button className="bg-[#EE7214] text-white p-2 rounded-md flex items-center mt-5">
            Browse Properties{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="16"
                viewBox="0 0 64 16"
                fill="none"
              >
                <path
                  d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 9H63V7H0V9Z"
                  fill="url(#paint0_linear_169_1727)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_169_1727"
                    x1="89"
                    y1="31"
                    x2="-16"
                    y2="8.00002"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </button>
        </div>
        <div className="relative h-[550px]">
          <div className="w-[297px] absolute top-10 right-10">
            <img
              className="w-full h-full"
              src="/images/mobile-screen.png"
              alt=""
            />
          </div>
          <div className="w-[70px] h-[70px] absolute bottom-28 right-5">
            <img className="w-full h-full" src="/images/Frame 26.png" alt="" />
          </div>
          <div className="w-[70px] h-[70px] absolute left-52 top-5">
            <img className="w-full h-full" src="/images/Frame 27.png" alt="" />
          </div>
          <div className="w-[259px] h-[137px] shadow-md shadow-gray-200 bg-white p-2 rounded-md z-10 absolute top-40 left-2">
            <div className="w-[24px] h-[2px] bg-[#ee7214] mb-2"></div>
            <p className="text-[14px] text-justify">
              Our team of property professionals combine a data driven valuation
              and analysis process with over 20 years of leadership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppView;
