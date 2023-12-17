/* eslint-disable @next/next/no-img-element */
import React from "react";
import BannerStep from "./BannerStep";
import styles from "./ProgressBanner.module.css";

interface steps {
  image: string;
  title: string;
  description: string;
}

const steps: steps[] = [
  {
    image: "/images/search.png",
    title: "Browse Properties",
    description:
      "Search from a variety of high-performing single family rental homes.",
  },
  {
    image: "/images/invest.png",
    title: "View Details & Invest",
    description:
      "Conduct due diligence and purchase SEC-compliant shares in rental properties",
  },
  {
    image: "/images/browse.png",
    title: "Browse Properties",
    description:
      "Manage and monitor your real estate holdings all in one place.",
  },
];

const ProgressBanner: React.FC = () => {
  return (
    <div className="mt-20 mb-10 max-w-[1500px] mx-auto">
      <p className="uppercase text-[15px] text-[#ee7214] text-center">
        WE are changing the way you invest
      </p>
      <h3 className="text-[36px] font-semibold text-center">
        It’s easy to get started.
      </h3>
      <p className="text-[15px] text-[#3f3f3f] my-5 w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
        We specialize in investing in single family rental homes in key markets
        in the American South East. Our platform allows investors to purchase
        SEC-compliant shares in single family homes for as little as $100.
      </p>
      <div className="flex justify-between align-middle items-center mt-36 relative">
        {/* {steps.map((step, index) => (
          <BannerStep key={index} step={step} />
        ))} */}
        {steps.flatMap((step, index, array) => [
          <BannerStep key={index} step={step} />,
          index < array.length - 1 ? (
            <img
              key={index}
              className={`absolute ${
                index % 2 === 0 ? styles.arrowUp : styles.arrowDown
              }`}
              src={
                index % 2 === 0
                  ? "/images/arrowup.png"
                  : "/images/arrowdown.png"
              }
              alt="description"
            />
          ) : null,
        ])}
      </div>
    </div>
  );
};

export default ProgressBanner;
