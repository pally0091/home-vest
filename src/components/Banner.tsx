/* eslint-disable @next/next/no-img-element */
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start  pt-20 gap-5 max-w-[1500px] mx-auto">
      <div className="w-full md:w-1/2 lg:w-1/2 lg:pe-20">
        <h1 className="text-left text-5xl font-semibold mb-10">
          Real Estate <br /> Real Easy !
        </h1>
        <p className="text-left mt-5">
          HomeVest is a state of the art investment platform that allows
          fractional investors to purchase SEC-compliant shares in single-family
          rental homes
        </p>
        <div className="flex gap-2 mt-5 w-full">
          <input
            type="email"
            placeholder="Your email"
            className="bg-[#F2F2F2] border border-[#dcdcdc] px-2 py-2 rounded-md w-[75%]"
          />
          <button className="bg-[#EE7214] text-white p-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2">
        <img src="/images/banner-img.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
