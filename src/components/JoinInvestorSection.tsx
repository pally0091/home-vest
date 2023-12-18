import Image from "next/image";
import React from "react";

const JoinInvestorSection: React.FC = () => {
  return (
    <div className="lg:my-72 max-w-[1192px] lg:h-[533px] w-full  mx-auto bg-indigo-600 rounded-[24px] relative">
      <div className="w-[1192px] h-[533px] overflow-hidden hidden lg:block rounded-[24px] absolute">
        <Image
          src="/images/DotPatterns.png"
          width={1192}
          height={533}
          alt="Dotted patters"
        />
      </div>
      <div className="flex flex-col justify-center align-middle items-center w-full h-full lg:absolute py-20 lg:py-0 cursor-default bg-indigo-600 lg:bg-transparent">
        <p className="text-[#EE7214] text-[15px] font-semibold">
          We are holding a fundraising campaign
        </p>
        <h1 className="text-[36px] font-bold text-white">Join the crowd</h1>
        <p className="max-w-[483px] text-[15px] font-medium text-white text-center py-[30px]">
          To learn more about crowdfunding opportunities, please click the
          button below.
        </p>
        <button className="text-indigo-700 bg-white py-[10px] text-[15px] font-medium px-5 cursor-pointer rounded-md flex items-center">
          Become an investor
        </button>
      </div>
      <Image
        src="/images/Ellipse7.png"
        width={114}
        height={113}
        alt="Bubble 1"
        className="absolute top-16 -left-10 hidden lg:block"
      />
      <Image
        src="/images/Ellipse8.png"
        width={95}
        height={95}
        alt="Bubble 2"
        className="absolute -top-14 left-64 hidden lg:block"
      />
      <Image
        src="/images/Ellipse9.png"
        width={80}
        height={80}
        alt="Bubble 3"
        className="absolute bottom-32 left-32 hidden lg:block"
      />
      <Image
        src="/images/Ellipse10.png"
        width={80}
        height={80}
        alt="Bubble 4"
        className="absolute -bottom-40 left-96 hidden lg:block"
      />
      <Image
        src="/images/Ellipse11.png"
        width={70}
        height={70}
        alt="Bubble 5"
        className="absolute -bottom-10 right-96 hidden lg:block"
      />
      <Image
        src="/images/Ellipse12.png"
        width={70}
        height={70}
        alt="Bubble 6"
        className="absolute top-20 right-72 hidden lg:block"
      />
      <Image
        src="/images/Ellipse13.png"
        width={92}
        height={92}
        alt="Bubble 7"
        className="absolute bottom-14 right-36 hidden lg:block"
      />
      <Image
        src="/images/Ellipse14.png"
        width={80}
        height={80}
        alt="Bubble 8"
        className="absolute top-48 -right-10 hidden lg:block"
      />
    </div>
  );
};

export default JoinInvestorSection;
