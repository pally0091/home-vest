/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
const svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M9 12L11 14L15 10M20.6179 5.98434C20.4132 5.99472 20.2072 5.99997 20 5.99997C16.9265 5.99997 14.123 4.84453 11.9999 2.94434C9.87691 4.84446 7.07339 5.99985 4 5.99985C3.79277 5.99985 3.58678 5.9946 3.38213 5.98422C3.1327 6.94783 3 7.95842 3 9.00001C3 14.5915 6.82432 19.2898 12 20.622C17.1757 19.2898 21 14.5915 21 9.00001C21 7.95847 20.8673 6.94791 20.6179 5.98434Z"
      stroke="#6FCF97"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const eye = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.45825 12C3.73253 7.94288 7.52281 5 12.0004 5C16.4781 5 20.2684 7.94291 21.5426 12C20.2684 16.0571 16.4781 19 12.0005 19C7.52281 19 3.73251 16.0571 2.45825 12Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PropertySlide: React.FC = () => {
  return (
    <div className="mt-80 mb-10 max-w-[1500px] mx-auto">
      <div className="mt-20 mb-10 max-w-[1500px] mx-auto">
        <p className="uppercase text-[15px] font-semibold text-[#ee7214] text-center">
          Starting as low as $20.00 / share
        </p>
        <h3 className="text-[36px] font-bold text-center">
          Buy Shares in Curated Properties
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-4">
        <div className="">
          <Image
            src="/images/bannerImg.png"
            width={700}
            height={500}
            alt="house Image"
          />
        </div>
        <div className="h-full flex flex-col py-4 justify-between items-start">
          <div>
            <p className="uppercase text-[15px] font-semibold text-[#ee7214]">
              6231 Mableton Pkwy SW, Georgea
            </p>
            <h3 className="text-[36px] font-bold text-center">
              Dextor Fortmouth House
            </h3>
            <h2 className="text-[#3F3F3F] text-2xl font-bold mt-3">
              $100/share
            </h2>
          </div>
          <h3 className="mt-16 flex gap-2">
            {svg} Near Major Employers and Notable Attractions
          </h3>
          <h3 className="mt-5 flex gap-2">{svg} Safest Affluent Community</h3>
          <h3 className="mt-5 flex gap-2">{svg} Value-added upgrades</h3>
          <button className="bg-[#EE7214] text-white py-3 px-5 rounded-md mt-14 flex gap-2">
            {eye} See details
          </button>
        </div>
      </div>
      <div className="hidden lg:flex gap-4 mt-10 justify-center align-middle items-center">
        <div className="w-[182px] h-[121px] flex-shrink-0 rounded-[18px] border border-[#DCDCDC] bg-[#F2F2F2] opacity-70">
          <Image
            src="/images/bannerImg.png"
            width={700}
            height={500}
            alt="house Image"
          />
        </div>
        <div className="w-[182px] h-[121px] flex-shrink-0 rounded-[18px] border border-[#DCDCDC] bg-[#F2F2F2] opacity-70">
          {/* ...rest of your code */}
        </div>
        <div className="w-[182px] h-[121px] flex-shrink-0 rounded-[18px] border border-[#DCDCDC] bg-[#F2F2F2] opacity-70">
          {/* ...rest of your code */}
        </div>
        <div className="w-[182px] h-[121px] flex-shrink-0 rounded-[18px] border border-[#DCDCDC] bg-[#F2F2F2] opacity-70">
          {/* ...rest of your code */}
        </div>
        <div className="w-[182px] h-[121px] flex-shrink-0 rounded-[18px] border border-[#DCDCDC] bg-[#F2F2F2] opacity-70">
          {/* ...rest of your code */}
        </div>
        <div className="w-[182px] h-[121px] flex-shrink-0 rounded-[18px] border border-[#DCDCDC] bg-[#F2F2F2] opacity-70">
          {/* ...rest of your code */}
        </div>
      </div>
    </div>
  );
};

export default PropertySlide;
