/* eslint-disable @next/next/no-img-element */
import React from "react";

const InvestSection: React.FC = () => {
  return (
    <div className="mt-20 mb-10 text-center max-w-[1500px] mx-auto">
      <p className="text-[#EE7214] text-[15px] uppercase">
        Join the future of real estate investing
      </p>
      <h3 className="text-[36px] font-semibold">Why Invest in Real Estate?</h3>
      <p className="text-[15px] mt-5">
        Start building your real estate investment portfolio today with as
        little as $100.
      </p>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {/* cards  */}
        <div className="flex justify-center flex-col items-center">
          <div className="w-[82px] h-[82px]">
            <img src="/images/frame 6.png" alt="" />
          </div>
          <p className="text-[20px] font-semibold">Passive income</p>
          <p className="text-[15px]">
            Our expert team vetts every property thoroughly.
          </p>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className="w-[82px] h-[82px]">
            <img src="/images/frame 1.png" alt="" />
          </div>
          <p className="text-[20px] font-semibold">Stable Cashflow</p>
          <p className="text-[15px]">
            Our expert team vetts every property thoroughly.
          </p>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className="w-[82px] h-[82px]">
            <img src="/images/frame 2.png" alt="" />
          </div>
          <p className="text-[20px] font-semibold">Tax Advantages</p>
          <p className="text-[15px]">
            Our expert team vetts every property thoroughly.
          </p>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className="w-[82px] h-[82px]">
            <img src="/images/frame 3.png" alt="" />
          </div>
          <p className="text-[20px] font-semibold">Capital Appreciation</p>
          <p className="text-[15px]">
            Our expert team vetts every property thoroughly.
          </p>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className="w-[82px] h-[82px]">
            <img src="/images/frame 4.png" alt="" />
          </div>
          <p className="text-[20px] font-semibold">Inflation Protection</p>
          <p className="text-[15px]">
            Our expert team vetts every property thoroughly.
          </p>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className="w-[82px] h-[82px]">
            <img src="/images/frame 5.png" alt="" />
          </div>
          <p className="text-[20px] font-semibold">Diversification</p>
          <p className="text-[15px]">
            Our expert team vetts every property thoroughly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestSection;
