import Image from "next/image";
import React from "react";

const BannerStep = ({ step }: any) => {
  return (
    <div className="flex flex-col justify-center align-middle items-center">
      <Image
        src={step.image}
        width={150}
        height={140}
        alt="search"
        className="w-[149px] h-[160px] object-fill"
      />
      <h2 className="text-xl font-bold pb-4 pt-8">{step.title}</h2>
      <p className="text-[15px] max-w-[363px] w-full text-center">
        {step.description}
      </p>
    </div>
  );
};

export default BannerStep;
