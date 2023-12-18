/* eslint-disable @next/next/no-img-element */
import React from "react";

const MapSection: React.FC = () => {
  return (
    <div className="mt-20 mb-10 bg-[#F2F2F2] pt-16 pb-56">
      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row align-middle items-center justify-center ga-10 lg:gap-64">
        <div className="text-left max-w-[450px]">
          <p className="text-[15px] text-[#ee7214]">
            WE are changing the way you invest
          </p>
          <h3 className="text-[36px] font-bold my-5">
            Investing in Single Family Rental Homes in Growing Markets
          </h3>
          <p className="text-[15px]">
            We do the heavy lifting so that you don’t have to
          </p>
          <button className="bg-[#EE7214] text-white py-[10px] px-5 rounded-md flex items-center mt-[30px]">
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
        <div className="mt-10">
          <img src="/images/map.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MapSection;
