/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Slider from "./ui/Slider";

const InvestmentCalculator: React.FC = () => {
  const handleSliderChange = (value: number) => {
    console.log("Slider value changed:", value);
    // function handleSliderChange
  };
  return (
    <div className="mt-20 mb-10">
      <p className="text-[#EE7214] text-[15px] uppercase">
        WE are changing the way you invest
      </p>
      <h3 className="text-[36px] font-semibold">Investment Calculator</h3>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <div className="bg-[#F2F2F2]  border border-[#DCDCDC] rounded-md px-5 py-10 text-justify">
          <h4 className="text-[20px] font-semibold">
            How much do you want to invest?
          </h4>
          <Slider
            content="Initial Investment"
            minValue={10000}
            maxValue={50000}
            price
            onChange={handleSliderChange}
          />
          <Slider
            content="Property Value Growth(over 5 year)"
            minValue={0}
            maxValue={100}
            percent
            onChange={handleSliderChange}
          />
          <Slider
            content="Expected annual rental yield"
            minValue={0}
            maxValue={100}
            percent
            onChange={handleSliderChange}
          />
          <p className="mt-5 text-[12px]">
            All projected values are before any property costs and platform
            fees, and based on a 5-year holding period. We expect the asset
            value to grow 30% over the next 5 years.*
          </p>
        </div>
        <div>
          <img
            src="/images/chart.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default InvestmentCalculator;
